class PageManager {
    constructor() {
        this.currentPage = 0;
        this.content = document.getElementById('content');
        this.nextBtn = document.getElementById('nextBtn');
        this.galleryBtn = document.getElementById('galleryBtn');
        
        this.pages = [
            // Страница 1
            {
                text: 'Ты должна быть Лера, да?',
                image: '../assets/images/front_page.png',
                imageAlt: 'Лера',
                buttons: [
                    { text: 'Да', action: () => this.nextPage() },
                    { text: 'Нет', action: () => this.showMessage('Ээ, как это не Лера?') }
                ]
            },
            // Страница 2
            {
                image: '../assets/images/lerich.jpg',
                imageAlt: 'Лерич',
                imageClass: 'medium-image',
                text: 'Но для меня ты не просто Лера. Для меня ты намного больше, <span style="white-space: nowrap;"><img src="../assets/images/heart.webp" class="small-heart"><span class="clickable">Лерич</span><img src="../assets/images/heart.webp" class="small-heart"></span>',
                onClick: { element: 'Лерич', action: () => this.nextPage() }
            },
            // Страница 3
            {
                title: 'Умная',
                image: '../assets/images/smart.jpg',
                imageAlt: 'Умная Лера'
            },
            // Страница 4
            {
                title: 'Красивая',
                image: '../assets/images/beautiful.jpg',
                imageAlt: 'Красивая Лера'
            },
            // Страница 5
            {
                text: 'Но самое главное.. ты у меня любимая!',
                carousel: {
                    images: [
                        { src: '../assets/images/together1.jpg', alt: 'Мы вместе 1' },
                        { src: '../assets/images/together2.jpg', alt: 'Мы вместе 2' },
                        { src: '../assets/images/together3.jpg', alt: 'Мы вместе 3' }
                    ]
                },
                link: { text: 'Леееерич!!!', action: () => this.nextPage() }
            },
            // Страница 6
            {
                text: 'Сейчас ты ударилась в учебу.',
                image: '../assets/images/smart_cat.jpg',
                imageAlt: 'Умный кот',
                imageClass: 'medium-image',
                caption: 'Это ты'
            },
            // Страница 7
            {
                text: 'И ты ооочень большая молодец!',
                images: [
                    { src: '../assets/images/fluffy-cat.jpg', alt: 'Пушистый умный кот' },
                    { src: '../assets/images/ege100.jpg', alt: '100 баллов на ЕГЭ' }
                ]
            },
            // Страница 8
            {
                text: 'Но пока ты занята собой, мне тебя <span class="clickable" data-action="special">не хватает</span>. Правда ли ты перестала любить меня?',
                image: '../assets/images/sad_cat1.jpg',
                imageAlt: 'Грустный кот',
                imageClass: 'medium-image',
                link: { text: 'Вспомнить', action: () => this.nextPage() }
            },
            // Страница 9
            {
                text: 'Я могу только вспоминать то, чем мы когда-то были.',
                carousel: {
                    items: [
                        { type: 'video', src: '../assets/images/memory1.MOV', alt: 'Воспоминание 1' },
                        { type: 'video', src: '../assets/images/memory2.mp4', alt: 'Воспоминание 2' },
                        { type: 'video', src: '../assets/images/memory3.mp4', alt: 'Воспоминание 3' },
                        { type: 'video', src: '../assets/images/memory4.MOV', alt: 'Воспоминание 4' },
                        { type: 'video', src: '../assets/images/memory5.mp4', alt: 'Воспоминание 5' },
                        { type: 'image', src: '../assets/images/memory6.jpg', alt: 'Воспоминание 6' },
                        { type: 'image', src: '../assets/images/memory7.jpg', alt: 'Воспоминание 7' }
                    ]
                }
            },
            // Страница 10
            {
                text: 'Смотри, какие мы тут хорошие.',
                carousel: {
                    images: [
                        { src: '../assets/images/good1.jpg', alt: 'Мы хорошие 1' },
                        { src: '../assets/images/good2.jpg', alt: 'Мы хорошие 2' },
                        { src: '../assets/images/good3.jpg', alt: 'Мы хорошие 3' }
                    ]
                }
            },
            // Страница 11
            {
                text: 'Я понимаю, что я тебя сильно обидел и очень-очень алею об этом.'
            },
            // Страница 12
            {
                text: 'Но моя мечта — вернуться в то время, когда мы любили друг друга больше всего, и я просыпался от твох объятий.',
                image: '../assets/images/together.jpg',
                imageAlt: 'Мы вместе'
            },
            // Страница 13
            {
                text: 'Так подумать, у нас е многое ещё вперед. Смотри!',
                link: { text: 'Смотреть мечты', action: () => this.nextPage() }
            },
            // Страница 14 (Мечты о будущем)
            {
                text: 'Мы с тобой в Лондоне.',
                image: '../assets/images/london.jpg',
                imageAlt: 'Мы в Лондоне'
            },
            // Страница 15
            {
                text: 'Мы с тобой в Южной Америке.',
                image: '../assets/images/south-america.jpg',
                imageAlt: 'Убегаем от картеля',
                caption: 'Пендехо!'
            },
            // Страница 16
            {
                text: 'Мы с тобой вместе, просто наедине.',
                image: '../assets/images/villefranche.jpg',
                imageAlt: 'Мы в Вильфранше'
            },
            // Страница 17
            {
                text: 'Я понимаю, что сейчас, возможно, не лучший момент, но моя любовь всегда будет поддерживать тебя во всём, что ты делаешь! Я искренне желаю тебе успехов, Леа! Пожалуйста, пусти меся к себе.'
            },
            // Страница 18
            {
                text: 'Давай встречаться? (как бойфренд и герлфренд)',
                buttons: [
                    { 
                        text: 'Да', 
                        action: () => this.showCelebration() 
                    },
                    { 
                        text: 'Нет', 
                        action: () => this.showSadCat() 
                    }
                ]
            }
        ];

        this.initializeEventListeners();
        this.renderCurrentPage();
    }

    initializeEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextPage());
        this.galleryBtn.addEventListener('click', () => this.openGallery());
    }

    renderCurrentPage() {
        const page = this.pages[this.currentPage];
        let html = `<div class="page">`;
        
        if (page.title) {
            html += `<h2>${page.title}</h2>`;
        }
        
        if (page.text) {
            html += `<p>${page.text}</p>`;
        }

        if (page.image) {
            const imageClass = page.imageClass || (this.currentPage === 0 ? 'first-page-image' : '');
            html += `
                <div class="image-container ${imageClass}">
                    <img src="${page.image}" alt="${page.imageAlt || ''}">
                    ${page.caption ? `<p class="caption">${page.caption}</p>` : ''}
                </div>
            `;
        }

        if (page.images) {
            html += `<div class="images-grid">`;
            page.images.forEach(img => {
                html += `<img src="${img.src}" alt="${img.alt || ''}">`;
            });
            html += `</div>`;
        }

        if (page.carousel) {
            const carousel = this.initCarousel(page.carousel.items || page.carousel.images);
            html += carousel.outerHTML;
        }

        if (page.link) {
            html += `<div class="link-container">
                <span class="clickable" data-action="next">${page.link.text}</span>
            </div>`;
        }

        if (page.buttons) {
            html += `<div class="buttons">`;
            page.buttons.forEach(button => {
                html += `<button class="nav-button">${button.text}</button>`;
            });
            html += `</div>`;
        }

        html += `</div>`;
        this.content.innerHTML = html;

        // Добавляем обработчики событий
        if (page.buttons) {
            const buttons = this.content.querySelectorAll('button');
            buttons.forEach((button, index) => {
                button.addEventListener('click', page.buttons[index].action);
            });
        }

        if (page.link) {
            const link = this.content.querySelector('.clickable[data-action="next"]');
            link.addEventListener('click', () => this.nextPage());
        }

        // Добавляем обработчик для клика по "Лерич"
        if (this.currentPage === 1) { // Проверяем, что это вторая страница
            const lerichElement = this.content.querySelector('.clickable');
            if (lerichElement) {
                lerichElement.addEventListener('click', () => this.nextPage());
            }
        }

        if (page.carousel) {
            this.initCarouselControls();
        }

        if (this.currentPage === 7) { // Страница 8 (индекс 7)
            const specialLink = this.content.querySelector('.clickable[data-action="special"]');
            if (specialLink) {
                specialLink.addEventListener('click', () => this.showSpecialSection());
            }
        }
    }

    initCarouselControls() {
        const carousel = this.content.querySelector('.carousel');
        const inner = carousel.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        let currentSlide = 0;

        const prevBtn = carousel.querySelector('.carousel-nav.prev');
        const nextBtn = carousel.querySelector('.carousel-nav.next');

        const showSlide = (index) => {
            inner.style.transform = `translateX(-${index * 100}%)`;
        };

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + items.length) % items.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % items.length;
            showSlide(currentSlide);
        });
    }

    nextPage() {
        if (this.currentPage < this.pages.length - 1) {
            this.currentPage++;
            this.renderCurrentPage();
        }
    }

    openGallery() {
        window.location.href = 'gallery.html';
    }

    showMessage(message) {
        alert(message);
    }

    showSpecialSection() {
        let html = `
            <div class="special-section">
                <audio id="cryAudio" controls>
                    <source src="../assets/voice/cry2.ogg" type="audio/ogg">
                    Ваш браузер не поддерживает аудио элемент.
                </audio>
            </div>
        `;
        this.content.innerHTML = html;
    }

    initCarousel(items) {
        const carousel = document.createElement('div');
        carousel.className = 'carousel';
        
        const carouselInner = document.createElement('div');
        carouselInner.className = 'carousel-inner';
        
        items.forEach(item => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';

            if (item.type === 'video') {
                const videoContainer = document.createElement('div');
                videoContainer.className = 'video-container';

                const video = document.createElement('video');
                if (item.src.endsWith('.MOV')) {
                    video.innerHTML = `
                        <source src="${item.src}" type="video/quicktime">
                        <source src="${item.src.replace('.MOV', '.mp4')}" type="video/mp4">
                        Ваш браузер не поддерживает видео.
                    `;
                } else {
                    video.src = item.src;
                    video.type = 'video/mp4';
                }
                
                video.controls = true;
                video.muted = false;
                video.preload = 'auto';
                video.playsinline = true;
                video.alt = item.alt;

                video.addEventListener('error', (e) => {
                    console.error('Video error:', e);
                    console.error('Video path:', item.src);
                    console.error('Error details:', video.error);
                });

                videoContainer.appendChild(video);
                carouselItem.appendChild(videoContainer);
            } else {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.alt;
                carouselItem.appendChild(img);
            }

            carouselInner.appendChild(carouselItem);
        });

        carousel.appendChild(carouselInner);
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-nav prev';
        prevBtn.innerHTML = '❮';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-nav next';
        nextBtn.innerHTML = '❯';
        
        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);
        
        return carousel;
    }

    showCelebration() {
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        celebration.innerHTML = '<h1>УРА УРА УРА УРА УРА</h1>';
        
        // Добавляем анимацию конфетти
        this.createConfetti();
        
        this.content.innerHTML = '';
        this.content.appendChild(celebration);
    }

    showSadCat() {
        const sadCat = document.createElement('div');
        sadCat.className = 'sad-cat';
        sadCat.innerHTML = `
            <p>Точно…?</p>
            <img src="images/sad-cat.jpg" alt="Грустный кот">
            <button class="nav-button maybe">Может быть?</button>
        `;
        
        this.content.innerHTML = '';
        this.content.appendChild(sadCat);
        
        sadCat.querySelector('.maybe').addEventListener('click', () => {
            this.showMessage('Подумай ещё раз 😊');
        });
    }

    createConfetti() {
        // Добавляем анимацию конфетти
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(confetti);
        }
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const pageManager = new PageManager();
}); 