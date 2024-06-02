document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
});

document.getElementById('restart-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'block';
    document.querySelector('.game-screen').style.display = 'none';
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 10 + 5 + 'px';
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('snowflakes-container').appendChild(snowflake);

    // Удаление снежинки после окончания анимации
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 200);

window.addEventListener('resize', () => {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
    });
});

// Анимация текста в меню
const text = document.querySelector('.typewriter');
const textContent = text.textContent;
text.textContent = '';
let index = 0;

function animateText() {
    text.textContent += textContent[index];
    index++;
    if (index < textContent.length) {
        setTimeout(animateText, 50); // Интервал между буквами
    }
}

animateText();