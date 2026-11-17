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
// START EXAM WITH FULLSCREEN
// ============================================

document.getElementById('startExamBtn').addEventListener('click', async () => {
    try {
        // Request fullscreen
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
    
    if (unanswered > 0) {
        if (!confirm(`You have ${unanswered} unanswered question(s). Do you want to submit anyway?`)) {
            return;
        }
    }
    
    submitExam(false);
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
    
    // Exit fullscreen
    if (document.fullscreenElement) {
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
// ANTI-CHEAT SYSTEM
// ============================================

function setupAntiCheat() {
    // Monitor fullscreen exit
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    
    // Monitor visibility change (tab switching)
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Monitor window blur (switching apps)
    window.addEventListener('blur', handleWindowBlur);
    
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
    if (!examStarted) return;
    
    if (document.hidden) {
        // Tab switched - submit exam
        showViolationModal('You switched to another tab.');
        setTimeout(() => {
            violationDetected = true;
            violationType = 'Tab Switch';
            submitExam(true);
        }, 2000);
    }
}

function handleWindowBlur() {
    if (!examStarted) return;
    
    // Window lost focus - submit exam
    showViolationModal('You switched to another application.');
    setTimeout(() => {
        violationDetected = true;
        violationType = 'App Switch';
        submitExam(true);
    }, 2000);
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
