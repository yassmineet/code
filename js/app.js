/**
 * Application Logic for Tunisian Driving Exam Website
 * Handles routing, data population, and quiz mechanics.
 */

class DrivingExamApp {
    constructor() {
        this.root = document.getElementById('app-root');
        this.currentView = null;

        // Quiz State
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.quizQuestions = []; // Shuffled from data
        this.userAnswers = [];   // Store user selected indices
        this.timerInterval = null;
        this.timerRemaining = 1800; // 30 minutes in seconds

        this.init();
    }

    init() {
        // Setup Navigation Listeners
        document.querySelectorAll('.nav-links a, .logo').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const view = el.dataset.view || 'home';
                this.navigate(view);
            });
        });

        // Mobile menu
        document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--glass-bg)';
                navLinks.style.backdropFilter = 'blur(16px)';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid var(--glass-border)';
            }
        });

        // Load Initial View
        this.navigate('home');
    }

    navigate(viewName) {
        // Update Active Nav Link
        document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
        const navLink = document.querySelector(`.nav-links a[data-view="${viewName}"]`);
        if (navLink) navLink.classList.add('active');

        // Render View Template
        let templateId = `view-${viewName}`;
        // If navigating to quiz, always start at the intro screen
        if (viewName === 'quiz') {
            templateId = 'view-quiz-start';
        }

        const template = document.getElementById(templateId);
        if (template) {
            this.root.innerHTML = '';
            this.root.appendChild(template.content.cloneNode(true));
            this.currentView = viewName;

            // Trigger View Specific Initialization
            if (viewName === 'signs') this.initSignsView();
            if (viewName === 'lessons') this.initLessonsView();

            window.scrollTo(0, 0);
        } else {
            console.error(`Template ${templateId} not found.`);
        }
    }

    // --- Signs View Logic ---
    initSignsView() {
        const tabs = document.querySelectorAll('.tab-btn');
        const signsContainer = document.getElementById('signs-container');

        const renderSigns = (category) => {
            signsContainer.innerHTML = '';
            const filteredSigns = signsData.filter(sign => sign.category === category);

            filteredSigns.forEach((sign, i) => {
                const card = document.createElement('div');
                card.className = `glass-card sign-card slide-up delay-${(i % 3) + 1}`;
                card.innerHTML = `
                    <div class="sign-image-wrapper">
                        ${sign.iconHtml}
                    </div>
                    <h3>${sign.name}</h3>
                    <p>${sign.description}</p>
                `;
                signsContainer.appendChild(card);
            });
        };

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                tabs.forEach(t => t.classList.remove('active'));
                const btn = e.target;
                btn.classList.add('active');
                renderSigns(btn.dataset.category);
            });
        });

        // initial load
        renderSigns('danger');
    }

    // --- Lessons View Logic ---
    initLessonsView() {
        const container = document.getElementById('lessons-container');
        container.innerHTML = '';

        lessonsData.forEach((lesson, i) => {
            const item = document.createElement('div');
            item.className = `glass-card lesson-item slide-up delay-${(i % 3) + 1}`;

            item.innerHTML = `
                <div class="lesson-header" onclick="app.toggleLesson(this)">
                    <h3><i class="fa-solid ${lesson.icon}"></i> ${lesson.title}</h3>
                    <i class="fa-solid fa-chevron-down lesson-toggle"></i>
                </div>
                <div class="lesson-content">
                    ${lesson.content}
                </div>
            `;
            container.appendChild(item);
        });
    }

    toggleLesson(headerElement) {
        const item = headerElement.closest('.lesson-item');
        item.classList.toggle('active');
    }

    // --- Quiz Logic ---
    startQuiz() {
        // Reset state
        this.currentQuestionIndex = 0;
        this.score = 0;
        // Limit to 30 random questions
        this.quizQuestions = [...quizData].sort(() => Math.random() - 0.5).slice(0, 30);
        this.userAnswers = new Array(this.quizQuestions.length).fill(-1);

        this.timerRemaining = 1800; // 30 mins * 60 secs
        clearInterval(this.timerInterval);

        // Render Question Template
        const template = document.getElementById('view-quiz-question');
        this.root.innerHTML = '';
        this.root.appendChild(template.content.cloneNode(true));

        this.startTimer();
        this.renderQuestion();
    }

    startTimer() {
        this.updateTimerUI();
        this.timerInterval = setInterval(() => {
            this.timerRemaining--;
            this.updateTimerUI();

            if (this.timerRemaining <= 0) {
                clearInterval(this.timerInterval);
                this.timerRemaining = 0;
                this.updateTimerUI();
                this.showResults(); // Auto-submit when time is up
            }
        }, 1000);
    }

    updateTimerUI() {
        const timerBadge = document.getElementById('quiz-timer');
        if (!timerBadge) return;

        const m = Math.floor(this.timerRemaining / 60);
        const s = this.timerRemaining % 60;
        const formatted = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        timerBadge.innerHTML = `<i class="fa-solid fa-stopwatch"></i> ${formatted}`;

        if (this.timerRemaining <= 300) { // Last 5 minutes
            timerBadge.classList.add('danger');
        } else {
            timerBadge.classList.remove('danger');
        }
    }

    renderQuestion() {
        const q = this.quizQuestions[this.currentQuestionIndex];

        document.getElementById('current-q-num').textContent = this.currentQuestionIndex + 1;
        document.getElementById('total-q-num').textContent = this.quizQuestions.length;
        document.getElementById('question-text').textContent = q.question;

        // Update Progress Bar
        const progress = ((this.currentQuestionIndex) / this.quizQuestions.length) * 100;
        document.getElementById('quiz-progress').style.width = `${progress}%`;

        // Reset UI Elements
        const nextBtn = document.getElementById('next-q-btn');
        nextBtn.style.display = 'none';

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        const previousAnswer = this.userAnswers[this.currentQuestionIndex];

        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span>${opt}</span>
                <i class="fa-regular fa-circle status-icon"></i>
            `;
            if (previousAnswer === index) {
                btn.classList.add('selected');
                btn.querySelector('i').className = 'fa-solid fa-dot-circle';
            }
            btn.onclick = () => this.selectAnswer(index);
            optionsContainer.appendChild(btn);
        });

        if (previousAnswer !== -1) {
            nextBtn.style.display = 'inline-flex';
        }

        // Update next button text
        if (this.currentQuestionIndex === this.quizQuestions.length - 1) {
            nextBtn.innerHTML = 'إنهاء الاختبار والمراجعة <i class="fa-solid fa-flag-checkered ms-2"></i>';
        } else {
            nextBtn.innerHTML = 'التالي <i class="fa-solid fa-arrow-left ms-2"></i>';
        }
    }

    selectAnswer(index) {
        const optionsContainer = document.getElementById('options-container');
        const buttons = optionsContainer.querySelectorAll('.option-btn');

        // Remove selection from all
        buttons.forEach(btn => {
            btn.classList.remove('selected');
            btn.querySelector('i').className = 'fa-regular fa-circle status-icon';
        });

        // Add selection to clicked
        buttons[index].classList.add('selected');
        buttons[index].querySelector('i').className = 'fa-solid fa-dot-circle';

        // Save Answer
        this.userAnswers[this.currentQuestionIndex] = index;

        // Show next button
        const nextBtn = document.getElementById('next-q-btn');
        nextBtn.style.display = 'inline-flex';
    }

    showExplanation(isCorrect, text) {
        // This method is no longer used for immediate feedback
        // The explanation will be shown in the review panel at the end
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.quizQuestions.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        clearInterval(this.timerInterval);

        const template = document.getElementById('view-results');
        this.root.innerHTML = '';
        this.root.appendChild(template.content.cloneNode(true));

        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        const reviewContainer = document.getElementById('review-container');
        reviewContainer.innerHTML = '';

        this.quizQuestions.forEach((q, i) => {
            const userAnswer = this.userAnswers[i];
            const isCorrect = userAnswer === q.correctIndex;

            if (userAnswer === -1) {
                unanswered++;
            } else if (isCorrect) {
                correct++;
            } else {
                incorrect++;
            }

            // Build Review Item
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}`;

            let userText = userAnswer === -1 ? 'لم تتم الإجابة' : q.options[userAnswer];
            let userIcon = userAnswer === -1 ? 'fa-minus' : (isCorrect ? 'fa-check' : 'fa-times');

            reviewItem.innerHTML = `
                <div class="review-question">${i + 1}. ${q.question}</div>
                <div class="review-answer correct-text">
                    <i class="fa-solid fa-check"></i> الإجابة الصحيحة: ${q.options[q.correctIndex]}
                </div>
                ${!isCorrect || userAnswer === -1 ? `
                <div class="review-answer user-text">
                    <i class="fa-solid ${userIcon}"></i> إجابتك: ${userText}
                </div>
                ` : ''}
                <div class="review-explanation">
                    <i class="fa-solid fa-info-circle text-primary mt-1"></i>
                    <div>${q.explanation}</div>
                </div>
            `;
            reviewContainer.appendChild(reviewItem);
        });

        this.score = correct;

        document.getElementById('final-score').textContent = this.score;
        document.getElementById('correct-count').textContent = correct;
        document.getElementById('incorrect-count').textContent = incorrect;
        document.getElementById('unanswered-count').textContent = unanswered;

        const resultIcon = document.getElementById('result-icon');
        const resultTitle = document.getElementById('result-title');
        const resultMsg = document.getElementById('result-message');
        const resultCard = document.getElementById('result-card');

        // Pass threshold is 24 out of 30 for the theoretical exam in Tunisia
        const passed = this.score >= 24;

        if (passed) {
            resultIcon.innerHTML = '<i class="fa-solid fa-trophy" style="font-size: 5rem; color: var(--warning);"></i>';
            resultTitle.textContent = 'مبروك! لقد نجحت';
            resultTitle.className = 'text-success mb-2';
            resultMsg.textContent = 'أنت مستعد تماماً لاجتياز الامتحان النظري لرخصة السياقة بنجاح.';
            resultCard.style.borderTop = '4px solid var(--secondary)';
        } else {
            resultIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="font-size: 5rem; color: var(--danger);"></i>';
            resultTitle.textContent = 'حظاً أوفر للمرة القادمة';
            resultTitle.className = 'text-danger mb-2';
            resultMsg.textContent = 'تحتاج إلى مراجعة بعض الدروس والعلامات والمحاولة مرة أخرى. (يجب الحصول على 24 نقطة على الأقل للنجاح)';
            resultCard.style.borderTop = '4px solid var(--danger)';
        }

        // ========== إرسال النتيجة إلى Google Sheets ==========
        // يجب وضع رابط Google Apps Script الخاص بك هنا
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyDYk_LfCVX3cr9KHFcp5i1P5G7-qnyLGT-JF-xZJULlx5JTaTDR951-8c5x75TOes56w/exec';

        if (scriptURL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
            try {
                const formData = new FormData();
                formData.append('date', new Date().toLocaleString('ar-TN'));
                formData.append('score', this.score);
                formData.append('correct', correct);
                formData.append('incorrect', incorrect);
                formData.append('unanswered', unanswered);
                formData.append('passed', passed ? 'نعم' : 'لا');

                // إرسال البيانات باستخدام Fetch API
                fetch(scriptURL, { method: 'POST', body: formData })
                    .then(response => console.log('تم إرسال النتيجة بنجاح إلى جوجل شيت', response))
                    .catch(error => console.error('حدث خطأ أثناء الإرسال', error.message));
            } catch (error) {
                console.error('Fetch error:', error);
            }
        } else {
            console.log('لم يتم ضبط رابط Google Sheets. النتيجة لن تحفظ.');
        }
        // ======================================================

        window.scrollTo(0, 0);
    }
}

// Initialize Application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new DrivingExamApp();
});
