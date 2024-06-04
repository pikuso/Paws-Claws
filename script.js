document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
});

document.getElementById('restart-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'block';
    document.querySelector('.game-screen').style.display = 'none';
});


document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
});

document.getElementById('restart-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'block';
    document.querySelector('.game-screen').style.display = 'none';
    // Очистить игровое поле
    document.querySelectorAll('.cell img').forEach(img => img.style.display = 'none');
});

document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        const img = document.createElement('img');
        img.style.display = 'none';
        cell.appendChild(img);

        cell.addEventListener('click', () => {
            const choice = prompt('What do you want to place? Type "cat" or "dog"');
            if (choice === 'cat' || choice === 'dog') {
                const image = cell.querySelector('img');
                if (image) {
                    image.src = `art-material/${choice}.png`;
                    image.style.display = 'block';
                    cell.dataset.choice = choice; // Сохраняем выбор в data-атрибут
                    if (checkWinner(choice)) {
                        alert(`${choice} wins!`);
                        resetGame();
                    }
                }
            }
        });
    });
});

// Функция для проверки победителя
function checkWinner(choice) {
    const cells = document.querySelectorAll('.cell');
    const combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтальные линии
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикальные линии
        [0, 4, 8], [2, 4, 6] // Диагональные линии
    ];

    return combinations.some(combination => {
        return combination.every(index => {
            return cells[index].dataset.choice === choice;
        });
    });
}

// Функция для сброса игры
function resetGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const image = cell.querySelector('img');
        if (image) {
            image.style.display = 'none';
            cell.dataset.choice = ''; // Сбросить выбор
        }
    });
}