document.addEventListener('DOMContentLoaded', function() {

    // ===== ПРОВЕРКА, НУЖНО ЛИ ПОКАЗЫВАТЬ ЭКРАН ВХОДА =====
    if (sessionStorage.getItem('authenticated') === 'true') {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        initializeContentWithGlitch(); // Запускаем с гличем
    } else {
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('mainContent').style.display = 'none';
    }

});

// Функция для подсчета полных месяцев
function getMonthsCount() {
    const startDate = new Date('2025-07-28');
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    return years * 12 + months;
}

// Функция для проверки кода
function checkCode() {
    const code = document.getElementById('secret-code').value;

    // Убираем пробелы в начале и конце, приводим к нижнему регистру
    const cleanCode = code.trim().toLowerCase();

    // Массив допустимых кодов
    const validCodes = ['2807', 'мяу', 'meow'];

    if (validCodes.includes(cleanCode)) {
        sessionStorage.setItem('authenticated', 'true');

        document.getElementById('overlay').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';

        // Показываем 6 и запускаем глич
        initializeContentWithGlitch();
    } else {
        alert('Неверный код, попробуй еще раз, котя ❤️');
        document.getElementById('secret-code').value = '';
    }
}

// Функция для создания контента с 6 и гличем
function initializeContentWithGlitch() {
    const contentDiv = document.getElementById('mainContent');
    const monthsCount = getMonthsCount(); // Реальное число (7)

    // Очищаем контент
    contentDiv.innerHTML = '';

    // 1. Главное число - показываем 6 (для глича)
    const bigNumberDiv = document.createElement('div');
    bigNumberDiv.className = 'big-number';
    bigNumberDiv.id = 'bigNumber';
    bigNumberDiv.textContent = '6'; // СТАВИМ 6!
    bigNumberDiv.style.opacity = '0';
    contentDiv.appendChild(bigNumberDiv);

    // 2. Подзаголовок
    const subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.id = 'subtitle';
    subtitle.textContent = 'МЕСЯЦЕВ С ТОБОЙ';
    subtitle.style.opacity = '0';
    contentDiv.appendChild(subtitle);

    // 3. Секция счетчика
    const counterSection = document.createElement('div');
    counterSection.className = 'counter-section';
    counterSection.innerHTML = `
        <div class="counter-item">
            <div class="counter-number" id="daysCounter">0</div>
            <div>Дней</div>
        </div>
        <div class="counter-item">
            <div class="counter-number" id="hoursCounter">0</div>
            <div>Часов</div>
        </div>
        <div class="counter-item">
            <div class="counter-number" id="minutesCounter">0</div>
            <div>Минут</div>
        </div>
        <div class="counter-item">
            <div class="counter-number" id="secondsCounter">0</div>
            <div>Секунд</div>
        </div>
    `;
    contentDiv.appendChild(counterSection);

    // 4. Чейнджлог (с правильной версией)
    const changelogDiv = document.createElement('div');
    changelogDiv.className = 'changelog';
    changelogDiv.innerHTML = `
        <h2>📜 Список изменений v${monthsCount}.0</h2>
        <div class="changelog-item">[ADD] Твоя улыбка в списке моих любимых вещей</div>
        <div class="changelog-item">[FIX] Исправлены дни без тебя (теперь они просто прекрасны)</div>
        <div class="changelog-item">[IMPROVE] Качество времени с тобой — теперь только премиум</div>
        <div class="changelog-item">[FEATURE] Режим "Бесконечные объятия" активирован</div>
        <div class="changelog-item">[HOTFIX] Исправлена версия с 6 на ${monthsCount}</div>
    `;
    contentDiv.appendChild(changelogDiv);

    // 5. Сетка с фото (9 штук)
    const photoGrid = document.createElement('div');
    photoGrid.className = 'photo-grid';
    photoGrid.innerHTML = `
        <div class="photo-item">
            <img src="images/1.JPG" alt="Фото" onerror="this.src='https://via.placeholder.com/300/ffd1d1/ff8a8a?text=❤️'">
            <div class="photo-caption">31 июля 2025<br>Та самая ночь</div>
        </div>
        <div class="photo-item">
            <img src="images/2.jpg" alt="Фото" onerror="this.src='https://via.placeholder.com/300/ffd1d1/ff8a8a?text=❤️'">
            <div class="photo-caption">9 августа 2025<br>Милая прогулка</div>
        </div>
        <div class="photo-item">
            <img src="images/3.jpg" alt="Фото" onerror="this.src='https://via.placeholder.com/300/ffd1d1/ff8a8a?text=❤️'">
            <div class="photo-caption">10 августа 2025<br>Хехе, там еще и котик спрятался</div>
        </div>
        <div class="photo-item">
            <img src="images/4.JPG" alt="Фото" onerror="this.src='https://via.placeholder.com/300/ffd1d1/ff8a8a?text=❤️'">
            <div class="photo-caption">14 августа 2025<br>Обязательно надо поплавать на лодке)</div>
        </div>
        <div class="photo-item">
            <img src="images/5.jpg" alt="Фото" onerror="this.src='https://via.placeholder.com/300/ffd1d1/ff8a8a?text=❤️'">
            <div class="photo-caption">22 августа 2025<br>Уютный вечер</div>
        </div>
        <div class="photo-item">
            <img src="images/6.jpg" alt="Фото" onerror="this.src='https://via.placeholder.com/300/ffd1d1/ff8a8a?text=❤️'">
            <div class="photo-caption">31 августа 2025<br>Я очень тебя люблю!</div>
        </div>
        <div class="photo-item">
            <img src="images/7.jpg" alt="Фото" onerror="this.src='https://via.placeholder.com/300/ffd1d1/ff8a8a?text=❤️'">
            <div class="photo-caption">9 декабря 2025<br>Холодный город</div>
        </div>
        <div class="photo-item">
            <img src="images/8.JPG" alt="Фото" onerror="this.src='https://via.placeholder.com/300/ffd1d1/ff8a8a?text=❤️'">
            <div class="photo-caption">31 декабря 2025<br>А вот и новый год</div>
        </div>
        <div class="photo-item">
            <img src="images/9.jpg" alt="Фото" onerror="this.src='https://via.placeholder.com/300/ffd1d1/ff8a8a?text=❤️'">
            <div class="photo-caption">6 января 2026<br>Тут просто милашки</div>
        </div>
    `;
    contentDiv.appendChild(photoGrid);

    // 6. Кнопка для комплиментов
    const button = document.createElement('button');
    button.className = 'love-button';
    button.id = 'complimentButton';
    button.textContent = 'Сказать комплимент 💌';
    contentDiv.appendChild(button);

    // 7. Запускаем счетчик
    updateCounter();
    setInterval(updateCounter, 1000);

    // 8. Обработчик кнопки комплиментов
    let currentCompliment = null; // переменная для хранения текущего комплимента

    document.getElementById('complimentButton').addEventListener('click', function() {
        const compliments = [
            "Твои глаза сияют ярче всех звезд на небе.",
            "Твоя улыбка — лучшее, что случалось со мной.",
            "Ты делаешь этот мир лучше просто тем, что ты есть.",
            "С тобой даже обычный день превращается в приключение.",
            "Ты самая умная, красивая и добрая девушка на свете.",
            "Ты просто ослепительна!",
            "Когда ты улыбаешься, внутри меня все замирает.",
            "Твои объятия лечат быстрее любого врача.",
            "С тобой я чувствую себя самим собой.",
            "Ты — моё любимое утро и самый тёплый вечер."
        ];

        // Выбираем случайный комплимент, но не тот же самый, что был в прошлый раз
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * compliments.length);
        } while (compliments.length > 1 && compliments[randomIndex] === currentCompliment?.text);
        // "?." - это опциональная цепочка, чтобы не было ошибки, если currentCompliment === null

        const complimentText = compliments[randomIndex];

        // Если уже есть старый комплимент - удаляем его
        if (currentCompliment) {
            currentCompliment.remove();
        }

        // Создаём новый комплимент
        const heart = document.createElement('div');
        heart.text = complimentText; // сохраняем текст в объекте для проверки повторов
        heart.textContent = '❤️ ' + complimentText + ' ❤️';
        heart.style.position = 'fixed';
        heart.style.top = '50%';
        heart.style.left = '50%';
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.backgroundColor = 'rgba(255, 138, 138, 0.95)';
        heart.style.color = 'white';
        heart.style.padding = '20px 30px';
        heart.style.borderRadius = '50px';
        heart.style.fontSize = '20px';
        heart.style.zIndex = '1000';
        heart.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        heart.style.textAlign = 'center';
        heart.style.maxWidth = '80%';
        heart.style.transition = 'opacity 0.3s ease'; // плавное исчезновение

        // Добавляем небольшую анимацию появления
        heart.style.opacity = '0';
        document.body.appendChild(heart);

        // Плавно появляемся
        setTimeout(() => {
            heart.style.opacity = '1';
        }, 10);

        // Сохраняем текущий комплимент
        currentCompliment = heart;

        // Автоматически удаляем через 3 секунды
        setTimeout(() => {
            if (currentCompliment === heart) { // проверяем, не появился ли уже новый
                heart.style.opacity = '0';
                setTimeout(() => {
                    if (currentCompliment === heart) {
                        heart.remove();
                        currentCompliment = null;
                    }
                }, 300);
            }
        }, 3000);
    });

    // 9. Запускаем базовую анимацию появления
    setTimeout(() => {
        if (typeof gsap !== 'undefined') {
            gsap.to('#bigNumber', {
                opacity: 1,
                y: -20,
                duration: 1.5,
                ease: "power2.out"
            });

            gsap.to('#subtitle', {
                opacity: 1,
                y: -20,
                duration: 1.5,
                delay: 0.5,
                ease: "power2.out"
            });
        }
    }, 100);

    // 10. Запускаем глич-эффект через 2 секунды
    setTimeout(() => {
        glitchEffect();
    }, 2000);
}

// Функция счетчика
function updateCounter() {
    // ВАЖНО: ИЮЛЬ!
    const startDate = new Date('2025-07-28');
    const now = new Date();

    const diffInMilliseconds = now - startDate;

    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMilliseconds / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60);
    const seconds = Math.floor((diffInMilliseconds / 1000) % 60);

    if (document.getElementById('daysCounter')) {
        document.getElementById('daysCounter').textContent = days;
    }
    if (document.getElementById('hoursCounter')) {
        document.getElementById('hoursCounter').textContent = hours;
    }
    if (document.getElementById('minutesCounter')) {
        document.getElementById('minutesCounter').textContent = minutes;
    }
    if (document.getElementById('secondsCounter')) {
        document.getElementById('secondsCounter').textContent = seconds;
    }
}

// ГЛИЧ-ЭФФЕКТ (превращение 6 в 7)
function glitchEffect() {
    const bigNumber = document.getElementById('bigNumber');

    // Быстро мелькают цифры
    let glitchCount = 0;
    const glitchInterval = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 10);
        bigNumber.textContent = randomNum;
        bigNumber.style.transform = `translate(${Math.random()*10-5}px, ${Math.random()*10-5}px)`;
        bigNumber.style.color = `hsl(${Math.random()*20 + 340}, 70%, 70%)`;
        glitchCount++;

        if (glitchCount > 15) {
            clearInterval(glitchInterval);
            // Финальный аккорд - СТАВИМ 7!
            bigNumber.textContent = '7';
            bigNumber.style.transform = 'translate(0, 0)';
            bigNumber.style.color = '#ff8a8a';

            gsap.to('#bigNumber', {
                scale: 1.3,
                duration: 0.2,
                yoyo: true,
                repeat: 2,
                ease: "power1.inOut"
            });

            // Появляется пояснение - ТЕПЕРЬ ПОСЛЕ ПОДЗАГОЛОВКА!
            setTimeout(() => {
                const note = document.createElement('div');
                note.className = 'glitch-note';
                note.innerHTML = '⚠️ Обнаружена ошибка в расчетах ⚠️<br>6 месяцев → 7 месяцев';
                note.style.opacity = '0';

                // Вставляем после подзаголовка, но перед счетчиком
                const subtitle = document.getElementById('subtitle');
                const counterSection = document.querySelector('.counter-section');

                document.getElementById('mainContent').insertBefore(note, counterSection);

                gsap.to(note, {
                    opacity: 1,
                    duration: 1,
                    delay: 0.5
                });
            }, 500);

            console.log('%c🐛 Баг найден: программист ошибся в расчетах 😅', 'color: #ff8a8a; font-size: 16px;');
        }
    }, 80);
}