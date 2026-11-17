// Discrete Mathematics Exam Logic
// Handles login, question randomization, answer tracking, and results

let currentStudent = null;
let examQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const examScreen = document.getElementById('examScreen');
const resultScreen = document.getElementById('resultScreen');
const loginForm = document.getElementById('loginForm');
const questionContainer = document.getElementById('questionContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const questionCounter = document.getElementById('question-counter');

// ============================================
// LOGIN LOGIC
// ============================================

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const rollNumber = document.getElementById('rollNumber').value.trim();
    const uniqueCode = document.getElementById('uniqueCode').value.trim();
    
    if (!rollNumber || !uniqueCode) {
        alert('Please enter both roll number and unique code');
        return;
    }
    
    try {
        // Validate credentials
        const response = await fetch('/api/validate-student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rollNumber: rollNumber,
                uniqueCode: uniqueCode,
                tableName: '"2ndyearstudentscse"'
            })
        });
        
        const data = await response.json();
        
        if (data.success && data.valid) {
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
                    query: `UPDATE "2ndyearstudentscse" SET verified_at = NOW() WHERE roll_number = $1`,
                    params: [rollNumber]
                })
            });
            
            startExam();
        } else {
            alert('Invalid credentials! Please check your roll number and unique code.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('System error. Please try again.');
    }
});

// ============================================
// EXAM LOGIC
// ============================================

function startExam() {
    // Hide login, show exam
    loginScreen.style.display = 'none';
    examScreen.style.display = 'block';
    
    // Select 10 random questions from 50
    examQuestions = getRandomQuestions(dmQuestions, 10);
    
    // Initialize user answers array
    userAnswers = new Array(10).fill(null);
    
    // Show first question
    currentQuestionIndex = 0;
    displayQuestion();
}

function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function displayQuestion() {
    const question = examQuestions[currentQuestionIndex];
    
    // Update counter
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of 10`;
    
    // Render question
    questionContainer.innerHTML = `
        <div class="question-card">
            <h3 class="question-text">
                ${currentQuestionIndex + 1}. ${formatMathText(question.question)}
            </h3>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <div class="option">
                        <input 
                            type="radio" 
                            name="answer" 
                            id="option${index}" 
                            value="${index}"
                            ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}
                        >
                        <label for="option${index}" class="option-label">
                            ${String.fromCharCode(65 + index)}) ${formatMathText(option)}
                        </label>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners to options
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.addEventListener('change', (e) => {
            userAnswers[currentQuestionIndex] = parseInt(e.target.value);
        });
    });
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Render math if MathJax is loaded
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function formatMathText(text) {
    // Convert common math notations to better display
    text = text.replace(/\^(\d+)/g, '<sup>$1</sup>');
    text = text.replace(/_(\d+)/g, '<sub>$1</sub>');
    text = text.replace(/≥/g, '&ge;');
    text = text.replace(/≤/g, '&le;');
    text = text.replace(/∞/g, '&infin;');
    text = text.replace(/Σ/g, '&Sigma;');
    text = text.replace(/∪/g, '&cup;');
    text = text.replace(/∩/g, '&cap;');
    text = text.replace(/⁰/g, '<sup>0</sup>');
    text = text.replace(/¹/g, '<sup>1</sup>');
    text = text.replace(/²/g, '<sup>2</sup>');
    text = text.replace(/³/g, '<sup>3</sup>');
    text = text.replace(/⁴/g, '<sup>4</sup>');
    text = text.replace(/⁵/g, '<sup>5</sup>');
    text = text.replace(/ⁿ/g, '<sup>n</sup>');
    text = text.replace(/ʳ/g, '<sup>r</sup>');
    text = text.replace(/ₙ/g, '<sub>n</sub>');
    text = text.replace(/ₖ/g, '<sub>k</sub>');
    text = text.replace(/ᵣ/g, '<sub>r</sub>');
    
    return text;
}

function updateNavigationButtons() {
    // Previous button
    prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    
    // Next button
    nextBtn.style.display = currentQuestionIndex < 9 ? 'inline-block' : 'none';
    
    // Submit button (show on last question)
    submitBtn.style.display = currentQuestionIndex === 9 ? 'inline-block' : 'none';
}

// Navigation event listeners
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < 9) {
        currentQuestionIndex++;
        displayQuestion();
    }
});

submitBtn.addEventListener('click', () => {
    // Check if all questions are answered
    const unanswered = userAnswers.filter(a => a === null).length;
    
    if (unanswered > 0) {
        if (!confirm(`You have ${unanswered} unanswered question(s). Do you want to submit anyway?`)) {
            return;
        }
    }
    
    calculateAndShowResults();
});

// ============================================
// RESULTS LOGIC
// ============================================

async function calculateAndShowResults() {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    
    // Calculate correct and wrong answers
    examQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctAnswers++;
        } else if (userAnswers[index] !== null) {
            wrongAnswers++;
        }
    });
    
    // Calculate marks and percentage
    const totalQuestions = 10;
    const maxMarks = 5;
    const marks = (correctAnswers / totalQuestions) * maxMarks;
    const percentage = (correctAnswers / totalQuestions) * 100;
    
    // Prepare detailed answers for storage
    const detailedAnswers = examQuestions.map((question, index) => ({
        questionId: question.id,
        question: question.question,
        userAnswer: userAnswers[index],
        correctAnswer: question.correctAnswer,
        isCorrect: userAnswers[index] === question.correctAnswer
    }));
    
    // Save results to database
    try {
        const response = await fetch('/api/save-results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tableName: '"2ndyearstudentscseresults"',
                rollNumber: currentStudent.rollNumber,
                correctAnswers: correctAnswers,
                wrongAnswers: wrongAnswers,
                totalQuestions: totalQuestions,
                marks: marks.toFixed(2),
                percentage: percentage.toFixed(2),
                userAnswers: detailedAnswers
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            console.log('Results saved successfully');
        }
    } catch (error) {
        console.error('Error saving results:', error);
    }
    
    // Display results
    displayResults(correctAnswers, wrongAnswers, marks, percentage);
}

function displayResults(correct, wrong, marks, percentage) {
    // Hide exam, show results
    examScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    // Update result display
    document.getElementById('studentInfo').textContent = 
        `Roll Number: ${currentStudent.rollNumber}`;
    
    document.getElementById('marksDisplay').textContent = 
        `${marks.toFixed(2)} / 5`;
    
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = wrong;
    document.getElementById('percentageDisplay').textContent = 
        `${percentage.toFixed(1)}%`;
    
    // Color code based on performance
    const marksDisplay = document.getElementById('marksDisplay');
    if (percentage >= 80) {
        marksDisplay.style.color = '#10b981'; // Green
    } else if (percentage >= 60) {
        marksDisplay.style.color = '#f59e0b'; // Orange
    } else {
        marksDisplay.style.color = '#ef4444'; // Red
    }
}

// ============================================
// SYSTEM CHECK
// ============================================

console.log('🎓 Discrete Mathematics Exam System Loaded');
console.log('📚 Total Questions Available:', dmQuestions.length);
console.log('✅ System Ready!');
