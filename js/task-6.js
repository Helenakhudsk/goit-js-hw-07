function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const allBoxes = document.getElementById('boxes');

function createBoxes(amount) {
  allBoxes.innerHTML = '';
    const boxSize = 30;
    const boxesArrey = [];

    for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArrey.push(box)
  }
  allBoxes.append(...boxesArrey);
}

function destroyBoxes() {
allBoxes.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const numberInput = Number(input.value);
  if (numberInput >= 1 && numberInput <= 100) {
    createBoxes(numberInput);
    input.value = '';
  }
});
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
 