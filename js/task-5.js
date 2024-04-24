function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBady = document.querySelector('.widget');
const colorText = document.querySelector('.color')
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener("click", clickColorChange) 

function clickColorChange(){
  colorBady.style.background = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}