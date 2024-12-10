class GalleryManager {
    constructor() {
        this.galleryGrid = document.getElementById('galleryGrid');
        this.backBtn = document.getElementById('backBtn');
        
        // Массив всех изображений с сайта
        this.images = [
            { src: '../assets/images/smart.jpg', alt: 'Умная Лера' },
            { src: '../assets/images/beautiful.jpg', alt: 'Красивая Лера' },
            { src: '../assets/images/together.jpg', alt: 'Мы вместе' },
            { src: '../assets/images/together1.jpg', alt: 'Мы вместе 1' },
            { src: '../assets/images/together2.jpg', alt: 'Мы вместе 2' },
            { src: '../assets/images/together3.jpg', alt: 'Мы вместе 3' },
            { src: '../assets/images/smart-cat.jpg', alt: 'Умный кот' },
            { src: '../assets/images/fluffy-cat.jpg', alt: 'Пушистый умный кот' },
            { src: '../assets/images/sad-cat.jpg', alt: 'Грустный кот' },
            { src: '../assets/images/memories1.jpg', alt: 'Воспоминание 1' },
            { src: '../assets/images/memories2.jpg', alt: 'Воспоминание 2' },
            { src: '../assets/images/memories3.jpg', alt: 'Воспоминание 3' },
            { src: '../assets/images/good1.jpg', alt: 'Мы хорошие 1' },
            { src: '../assets/images/good2.jpg', alt: 'Мы хорошие 2' },
            { src: '../assets/images/good3.jpg', alt: 'Мы хорошие 3' },
            { src: '../assets/images/london.jpg', alt: 'Мы в Лондоне' },
            { src: '../assets/images/south-america.jpg', alt: 'Убегаем от картеля' },
            { src: '../assets/images/villefranche.jpg', alt: 'Мы в Вильфранше' },
            { src: '../assets/images/ege100.jpg', alt: '100 баллов на ЕГЭ' }
        ];

        this.initializeGallery();
        this.initializeEventListeners();
    }

    initializeGallery() {
        this.images.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            
            galleryItem.appendChild(img);
            this.galleryGrid.appendChild(galleryItem);

            // Добавляем обработчик для открытия изображения в модальном окне
            galleryItem.addEventListener('click', () => this.openModal(image));
        });
    }

    initializeEventListeners() {
        this.backBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });

        // Закрытие модального окна по клику вне изображения
        document.addEventListener('click', (e) => {
            const modal = document.querySelector('.modal');
            if (modal && e.target === modal) {
                modal.remove();
            }
        });

        // Закрытие модального окна по клавише Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.querySelector('.modal');
                if (modal) {
                    modal.remove();
                }
            }
        });
    }

    openModal(image) {
        // Удаляем существующее модальное окно, если оно есть
        const existingModal = document.querySelector('.modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Создаем новое модальное окно
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        const modalImg = document.createElement('img');
        modalImg.src = image.src;
        modalImg.alt = image.alt;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const galleryManager = new GalleryManager();
}); 