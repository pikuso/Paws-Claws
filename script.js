document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
});

document.getElementById('restart-button').addEventListener('click', function() {
    document.querySelector('.menu-screen').style.display = 'block';
    document.querySelector('.game-screen').style.display = 'none';
});
