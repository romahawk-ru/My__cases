const board = document.querySelector('#board');
const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
const SQUAES_NUMBER = 371;

for (let i = 0; i < SQUAES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)];
}