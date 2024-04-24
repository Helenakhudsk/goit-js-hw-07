function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector('body');
const colorText = document.querySelector('.color')
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener("click", clickColorChange) 

function clickColorChange(){
  const newColor = getRandomHexColor()
  color.style.background = newColor;
  colorText.textContent = newColor;
}