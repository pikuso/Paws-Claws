document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
});

document.getElementById('restart-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'block';
    document.querySelector('.game-screen').style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const choice = prompt('What do you want to place? Type "cat" or "dog"');
            if (choice === 'cat' || choice === 'dog') {
                // Скрываем изображение во всех ячейках
                cells.forEach(cell => {
                    cell.querySelector('img').style.display = 'none';
                });
                // Показываем изображение только в выбранной ячейке
                const image = cell.querySelector('img');
                image.src = `art-material/${choice}.png`;
                image.style.display = 'block';
            }
        });
    });
});