// Modern Exam Portal Script with Anti-Cheat Features
// ISL Engineering College

// ============================================
// GLOBAL VARIABLES
// ============================================

let currentStudent = null;
let examQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let examStarted = false;
let violationDetected = false;
let violationType = null;
let currentSubject = null; // Track which subject (DM or DSA)
let subjectConfig = {
    tableName: '',
    resultsTable: '',
    questionBank: []
};

// Mobile-friendly anti-cheat variables
let appSwitchTimer = null;
let gracePeriodActive = false;
const GRACE_PERIOD_MS = 10000; // 10 seconds
let isMobile = false;
let countdownInterval = null;
let secondsRemaining = 10;
let exitModalShowing = false; // Flag to prevent auto-submit during exit confirmation

// ============================================
// DOM ELEMENTS
// ============================================

const loginScreen = document.getElementById('loginScreen');
const rulesScreen = document.getElementById('rulesScreen');
const examScreen = document.getElementById('examScreen');
const resultsScreen = document.getElementById('resultsScreen');
const violationModal = document.getElementById('violationModal');
const loadingOverlay = document.getElementById('loadingOverlay');

// ============================================
// LOGIN HANDLING
// ============================================

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const rollNumber = document.getElementById('rollNumber').value.trim();
    const uniqueCode = document.getElementById('uniqueCode').value.trim();
    
    if (!rollNumber || !uniqueCode) {
        alert('Please enter both roll number and unique code');
        return;
    }
    
    showLoading();
    
    // Detect subject based on unique code
    if (uniqueCode.toLowerCase() === 'dm771') {
        currentSubject = 'DM';
        subjectConfig.tableName = '"2ndyearstudentscse"';
        subjectConfig.resultsTable = '"2ndyearstudentscseresults"';
        subjectConfig.questionBank = dmQuestions;
    } else if (uniqueCode.toLowerCase() === 'dsa771') {
        currentSubject = 'DSA';
        subjectConfig.tableName = '"2ndcsedsa"';
        subjectConfig.resultsTable = '"2nddsaresults"';
        subjectConfig.questionBank = dsaQuestions;
    } else if (uniqueCode.toLowerCase() === 'alc771') {
        currentSubject = 'ALC';
        subjectConfig.tableName = '"3rdcsealc"';
        subjectConfig.resultsTable = '"3rdcsealcresults"';
        subjectConfig.questionBank = alcQuestions;
    } else if (uniqueCode.toLowerCase() === 'cs771') {
        currentSubject = 'CS';
        subjectConfig.tableName = '"3rdcsecs"';
        subjectConfig.resultsTable = '"3rdcsecsresults"';
        subjectConfig.questionBank = csQuestions;
    } else if (uniqueCode.toLowerCase() === 'se771') {
        currentSubject = 'SE';
        subjectConfig.tableName = '"3rdcsese"';
        subjectConfig.resultsTable = '"3rdcsesesresults"';
        subjectConfig.questionBank = seQuestions;
    } else if (uniqueCode.toLowerCase() === 'italc771') {
        currentSubject = 'IT ALC';
        subjectConfig.tableName = '"3rditalc"';
        subjectConfig.resultsTable = '"3rditalcresults"';
        subjectConfig.questionBank = italcQuestions;
    } else if (uniqueCode.toLowerCase() === 'ml771') {
        currentSubject = 'IT ML';
        subjectConfig.tableName = '"3rditml"';
        subjectConfig.resultsTable = '"3rditmlresults"';
        subjectConfig.questionBank = itmlQuestions;
    } else if (uniqueCode.toLowerCase() === 'py771') {
        currentSubject = 'IT Python';
        subjectConfig.tableName = '"2nditpython"';
        subjectConfig.resultsTable = '"2nditpythonresults"';
        subjectConfig.questionBank = itpyQuestions;
    } else if (uniqueCode.toLowerCase() === 'dms771') {
        currentSubject = '2nd IT DM';
        subjectConfig.tableName = '"2nditdms"';
        subjectConfig.resultsTable = '"2nditdmsresults"';
        subjectConfig.questionBank = dmQuestions;
    } else if (uniqueCode.toLowerCase() === 'ewp771') {
        currentSubject = '3rd ECE AWP';
        subjectConfig.tableName = '"3rdeceewp"';
        subjectConfig.resultsTable = '"3rdeceewpresults"';
        subjectConfig.questionBank = awpQuestions;
    } else if (uniqueCode.toLowerCase() === 'dsp771') {
        currentSubject = '3rd ECE DSP';
        subjectConfig.tableName = '"3rdecedsp"';
        subjectConfig.resultsTable = '"3rdecedspresults"';
        subjectConfig.questionBank = dspQuestions;
    } else if (uniqueCode.toLowerCase() === 'mpmc771') {
        currentSubject = '3rd ECE MPMC';
        subjectConfig.tableName = '"3rdecempmc"';
        subjectConfig.resultsTable = '"3rdecempmcresults"';
        subjectConfig.questionBank = mpmcQuestions;
    } else if (uniqueCode.toLowerCase() === 'de771') {
        currentSubject = '2nd ECE DE';
        subjectConfig.tableName = '"2ndecede"';
        subjectConfig.resultsTable = '"2ndecederesults"';
        subjectConfig.questionBank = deQuestions;
    } else if (uniqueCode.toLowerCase() === 'signal771') {
        currentSubject = '2nd ECE Signals';
        subjectConfig.tableName = '"2ndecesignal"';
        subjectConfig.resultsTable = '"2ndecesignalresults"';
        subjectConfig.questionBank = signalsQuestions;
    } else {
        hideLoading();
        alert('Invalid unique code! Please check and try again.');
        return;
    }
    
    try {
        // Validate credentials using API
        const response = await fetch('/api/validate-student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rollNumber: rollNumber,
                uniqueCode: uniqueCode,
                tableName: subjectConfig.tableName
            })
        });
        
        const data = await response.json();
        
        if (data.success && data.valid) {
            // Check if student has already submitted exam for this subject
            const checkExamResponse = await fetch('/api/db-query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `SELECT * FROM ${subjectConfig.resultsTable} WHERE roll_number = $1 LIMIT 1`,
                    params: [rollNumber]
                })
            });
            
            const examData = await checkExamResponse.json();
            
            if (examData.success && examData.rows && examData.rows.length > 0) {
                // Student has already submitted exam
                hideLoading();
                alert(`You have already submitted this exam!\n\nYour Result:\nMarks: ${examData.rows[0].marks}/5\nPercentage: ${examData.rows[0].percentage}%\nCorrect: ${examData.rows[0].correct_answers}\nWrong: ${examData.rows[0].wrong_answers}\n\nYou cannot take the exam again.`);
                return;
            }
            
            // Student hasn't taken exam yet - proceed
            currentStudent = {
                rollNumber: rollNumber,
                uniqueCode: uniqueCode
            };
            
            // Update verification timestamp
            await fetch('/api/db-query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `UPDATE ${subjectConfig.tableName} SET verified_at = NOW() WHERE roll_number = $1`,
                    params: [rollNumber]
                })
            });
            
            hideLoading();
            showRulesScreen();
        } else {
            hideLoading();
            alert('Invalid credentials! Please check your roll number and unique code.');
        }
    } catch (error) {
        hideLoading();
        console.error('Login error:', error);
        alert('System error. Please try again.');
    }
});

// ============================================
// SCREEN NAVIGATION
// ============================================

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function showRulesScreen() {
    showScreen(rulesScreen);
}

function showLoading() {
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

// ============================================
// MOBILE DETECTION
// ============================================

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768;
}

// ============================================
// START EXAM WITH FULLSCREEN (MANDATORY FOR ALL)
// ============================================

document.getElementById('startExamBtn').addEventListener('click', async () => {
    isMobile = isMobileDevice();
    
    try {
        // Request fullscreen for EVERYONE (mobile + desktop)
        const elem = document.documentElement;
        
        if (elem.requestFullscreen) {
            await elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            await elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            await elem.msRequestFullscreen();
        }
        
        // Start exam after fullscreen is activated
        setTimeout(initializeExam, 500);
        
    } catch (error) {
        alert('Fullscreen is required to start the exam. Please allow fullscreen access.');
        console.error('Fullscreen error:', error);
    }
});

function initializeExam() {
    examStarted = true;
    
    // Select 10 random questions from the subject's question bank
    examQuestions = getRandomQuestions(subjectConfig.questionBank, 10);
    userAnswers = new Array(10).fill(null);
    currentQuestionIndex = 0;
    
    // Setup anti-cheat monitoring
    setupAntiCheat();
    
    // Setup back button handler for mobile
    setupBackButtonHandler();
    
    // Display exam screen
    document.getElementById('rollDisplay').textContent = `Roll: ${currentStudent.rollNumber}`;
    showScreen(examScreen);
    displayQuestion();
}

function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// ============================================
// QUESTION DISPLAY
// ============================================

function displayQuestion() {
    const question = examQuestions[currentQuestionIndex];
    
    // Update progress
    document.getElementById('questionProgress').textContent = 
        `Question ${currentQuestionIndex + 1} of 10`;
    
    // Display question
    document.getElementById('questionText').textContent = 
        `${currentQuestionIndex + 1}. ${question.question}`;
    
    // Display options
    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-item';
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <input 
                type="radio" 
                name="answer" 
                id="option${index}" 
                value="${index}"
                ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}
            >
            <label for="option${index}" class="option-label">
                ${String.fromCharCode(65 + index)}) ${option}
            </label>
        `;
        
        optionDiv.addEventListener('click', () => {
            selectOption(index);
        });
        
        optionsList.appendChild(optionDiv);
    });
    
    updateNavigationButtons();
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    
    // Update UI
    document.querySelectorAll('.option-item').forEach((item, i) => {
        if (i === index) {
            item.classList.add('selected');
            item.querySelector('input').checked = true;
        } else {
            item.classList.remove('selected');
            item.querySelector('input').checked = false;
        }
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === 9) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// ============================================
// NAVIGATION
// ============================================

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentQuestionIndex < 9) {
        currentQuestionIndex++;
        displayQuestion();
    }
});

document.getElementById('submitBtn').addEventListener('click', () => {
    const unanswered = userAnswers.filter(a => a === null).length;
    
    // Show submit confirmation modal
    const submitModal = document.getElementById('submitModal');
    const submitMessage = document.getElementById('submitMessage');
    const unansweredInfo = document.getElementById('unansweredInfo');
    
    if (unanswered > 0) {
        submitMessage.textContent = `You have ${unanswered} unanswered question(s).`;
        unansweredInfo.textContent = 'Are you sure you want to submit?';
    } else {
        submitMessage.textContent = 'All questions answered!';
        unansweredInfo.textContent = 'Ready to submit your exam?';
    }
    
    submitModal.classList.add('active');
});

// Cancel submit button
document.getElementById('cancelSubmitBtn').addEventListener('click', () => {
    document.getElementById('submitModal').classList.remove('active');
});

// Confirm submit button
document.getElementById('confirmSubmitBtn').addEventListener('click', () => {
    document.getElementById('submitModal').classList.remove('active');
    submitExam(false);
});

// Exit confirmation modal handlers
document.getElementById('cancelExitBtn').addEventListener('click', () => {
    // Just close modal, stay in fullscreen, continue exam
    exitModalShowing = false; // Reset flag
    document.getElementById('exitConfirmModal').classList.remove('active');
    console.log('✅ Exit cancelled - continuing exam in fullscreen');
});

document.getElementById('confirmExitBtn').addEventListener('click', () => {
    // Close modal and submit exam (fullscreen will exit in submitExam)
    exitModalShowing = false; // Reset flag
    document.getElementById('exitConfirmModal').classList.remove('active');
    console.log('⚠️ Exit confirmed - submitting exam');
    submitExam(false);
});

// Countdown modal continue button handler
document.getElementById('continueExamBtn').addEventListener('click', async () => {
    // Clear timers
    if (appSwitchTimer) {
        clearTimeout(appSwitchTimer);
        appSwitchTimer = null;
    }
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    
    gracePeriodActive = false;
    hideCountdownModal();
    
    // Re-enter fullscreen and continue
    await reenterFullscreenAndContinue();
});

// ============================================
// SUBMIT EXAM
// ============================================

async function submitExam(isViolation = false) {
    if (!examStarted) return;
    
    examStarted = false;
    
    // Calculate results
    let correctAnswers = 0;
    let wrongAnswers = 0;
    
    examQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctAnswers++;
        } else if (userAnswers[index] !== null) {
            wrongAnswers++;
        }
    });
    
    const totalQuestions = 10;
    const maxMarks = 5;
    const marks = (correctAnswers / totalQuestions) * maxMarks;
    const percentage = (correctAnswers / totalQuestions) * 100;
    
    // Prepare detailed answers
    const detailedAnswers = examQuestions.map((question, index) => ({
        questionId: question.id,
        question: question.question,
        userAnswer: userAnswers[index],
        correctAnswer: question.correctAnswer,
        isCorrect: userAnswers[index] === question.correctAnswer
    }));
    
    // Save to database
    try {
        showLoading();
        
        await fetch('/api/save-results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tableName: subjectConfig.resultsTable,
                rollNumber: currentStudent.rollNumber,
                correctAnswers: correctAnswers,
                wrongAnswers: wrongAnswers,
                totalQuestions: totalQuestions,
                marks: marks.toFixed(2),
                percentage: percentage.toFixed(2),
                userAnswers: detailedAnswers
            })
        });
        
        hideLoading();
        
    } catch (error) {
        console.error('Error saving results:', error);
        hideLoading();
    }
    
    // Exit fullscreen ONLY when exam is submitted
    if (document.fullscreenElement) {
        console.log('🖥️ Exiting fullscreen - exam submitted');
        document.exitFullscreen().catch(err => console.log(err));
    }
    
    // Show results
    displayResults(correctAnswers, wrongAnswers, marks, percentage);
}

function displayResults(correct, wrong, marks, percentage) {
    document.getElementById('rollResult').textContent = 
        `Roll Number: ${currentStudent.rollNumber}`;
    
    document.getElementById('marksValue').textContent = 
        `${marks.toFixed(2)} / 5`;
    
    document.getElementById('correctValue').textContent = correct;
    document.getElementById('wrongValue').textContent = wrong;
    document.getElementById('percentageValue').textContent = 
        `${percentage.toFixed(1)}%`;
    
    // Color code marks
    const marksElement = document.getElementById('marksValue');
    if (percentage >= 80) {
        marksElement.style.color = '#10b981';
    } else if (percentage >= 60) {
        marksElement.style.color = '#f59e0b';
    } else {
        marksElement.style.color = '#ef4444';
    }
    
    showScreen(resultsScreen);
}

// ============================================
// BACK BUTTON HANDLER (Mobile)
// ============================================

function setupBackButtonHandler() {
    // Push a state to history so back button can be intercepted
    window.history.pushState({ examPage: true }, '', '');
    
    window.addEventListener('popstate', (event) => {
        if (!examStarted) return;
        
        // Push state back to keep user on exam page
        window.history.pushState({ examPage: true }, '', '');
        
        // Show exit confirmation modal WITHOUT exiting fullscreen
        showExitConfirmationModal();
    });
}

function showExitConfirmationModal() {
    const exitModal = document.getElementById('exitConfirmModal');
    if (exitModal) {
        exitModalShowing = true; // Set flag to prevent fullscreen handler from submitting
        exitModal.classList.add('active');
        // Fullscreen stays active - modal appears on top
        console.log('📱 Back button pressed - showing exit confirmation (fullscreen maintained)');
    }
}

// ============================================
// ANTI-CHEAT SYSTEM (Mobile-Friendly)
// ============================================

function setupAntiCheat() {
    // Monitor fullscreen exit (MANDATORY FOR ALL - mobile + desktop)
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    
    // Monitor visibility change with grace period (mobile-friendly)
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Monitor window blur with grace period (mobile-friendly)
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    
    // Disable context menu
    document.addEventListener('contextmenu', (e) => {
        if (examStarted) {
            e.preventDefault();
        }
    });
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (!examStarted) return;
        
        // Block F12, Ctrl+Shift+I, Ctrl+U, etc.
        if (e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
            (e.ctrlKey && e.keyCode === 85)) {
            e.preventDefault();
        }
    });
}

function handleFullscreenChange() {
    if (!examStarted) return;
    
    // If exit modal is showing, don't trigger violation - user is making a choice
    if (exitModalShowing) {
        console.log('📱 Fullscreen change ignored - exit modal active');
        return;
    }
    
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        // Fullscreen exited - submit exam
        showViolationModal('You exited fullscreen mode.');
        setTimeout(() => {
            violationDetected = true;
            violationType = 'Fullscreen Exit';
            submitExam(true);
        }, 2000);
    }
}

function handleVisibilityChange() {
    if (!examStarted || gracePeriodActive) return;
    
    if (document.hidden) {
        console.log('📱 Tab/App switched - Starting 10s countdown');
        
        // Start grace period timer
        gracePeriodActive = true;
        secondsRemaining = 10;
        
        // Show countdown modal
        showCountdownModal();
        
        // Start countdown
        startCountdown();
        
        appSwitchTimer = setTimeout(() => {
            // Grace period expired without return
            console.log('⚠️ Grace period expired - Submitting exam');
            hideCountdownModal();
            showViolationModal('You were away for too long.');
            setTimeout(() => {
                violationDetected = true;
                violationType = 'Exceeded Grace Period';
                submitExam(true);
            }, 2000);
        }, GRACE_PERIOD_MS);
    } else {
        // User returned to tab
        if (appSwitchTimer && gracePeriodActive) {
            clearTimeout(appSwitchTimer);
            clearInterval(countdownInterval);
            appSwitchTimer = null;
            countdownInterval = null;
            gracePeriodActive = false;
            hideCountdownModal();
            console.log('✅ User returned within grace period');
            
            // Re-enter fullscreen and show same question
            reenterFullscreenAndContinue();
        }
    }
}

function handleWindowBlur() {
    if (!examStarted || gracePeriodActive) return;
    
    // This could be a notification, call, or intentional app switch
    // Start grace period with countdown
    console.log('📱 Window blur detected - Starting countdown');
    gracePeriodActive = true;
    secondsRemaining = 10;
    
    // Show countdown modal
    showCountdownModal();
    
    // Start countdown
    startCountdown();
    
    appSwitchTimer = setTimeout(() => {
        // Grace period expired
        console.log('⚠️ Window blur grace period expired');
        hideCountdownModal();
        showViolationModal('You switched away from the exam for too long.');
        setTimeout(() => {
            violationDetected = true;
            violationType = 'App Switch Timeout';
            submitExam(true);
        }, 2000);
    }, GRACE_PERIOD_MS);
}

function handleWindowFocus() {
    if (!examStarted) return;
    
    // User returned to window
    if (appSwitchTimer && gracePeriodActive) {
        clearTimeout(appSwitchTimer);
        clearInterval(countdownInterval);
        appSwitchTimer = null;
        countdownInterval = null;
        gracePeriodActive = false;
        hideCountdownModal();
        console.log('✅ User returned to exam window');
        
        // Re-enter fullscreen and show same question
        reenterFullscreenAndContinue();
    }
}

function showCountdownModal() {
    const countdownModal = document.getElementById('countdownModal');
    if (countdownModal) {
        document.getElementById('countdownSeconds').textContent = secondsRemaining;
        countdownModal.classList.add('active');
    }
}

function hideCountdownModal() {
    const countdownModal = document.getElementById('countdownModal');
    if (countdownModal) {
        countdownModal.classList.remove('active');
    }
}

function startCountdown() {
    countdownInterval = setInterval(() => {
        secondsRemaining--;
        const countdownElement = document.getElementById('countdownSeconds');
        if (countdownElement) {
            countdownElement.textContent = secondsRemaining;
        }
        
        if (secondsRemaining <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    }, 1000);
}

async function reenterFullscreenAndContinue() {
    try {
        // Request fullscreen again
        const elem = document.documentElement;
        
        if (elem.requestFullscreen) {
            await elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            await elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            await elem.msRequestFullscreen();
        }
        
        console.log('✅ Fullscreen re-entered, continuing with same question');
        
        // Show brief continue message
        showContinueExamPopup();
        
    } catch (error) {
        console.error('Failed to re-enter fullscreen:', error);
        // If fullscreen fails, show continue popup anyway
        showContinueExamPopup();
    }
}

function showContinueExamPopup() {
    const continuePopup = document.getElementById('continueExamPopup');
    if (continuePopup) {
        continuePopup.classList.add('active');
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            continuePopup.classList.remove('active');
        }, 3000);
    }
}

function showViolationModal(message) {
    document.getElementById('violationMessage').textContent = message;
    violationModal.classList.add('active');
}

// ============================================
// INITIALIZATION
// ============================================

console.log('✅ Exam Portal Loaded');
console.log('📚 DM Questions Available:', typeof dmQuestions !== 'undefined' ? dmQuestions.length : 0);
console.log('📚 DSA Questions Available:', typeof dsaQuestions !== 'undefined' ? dsaQuestions.length : 0);
console.log('📚 ALC Questions Available:', typeof alcQuestions !== 'undefined' ? alcQuestions.length : 0);
console.log('🎓 System Ready!');
