function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const changeColorBtn = document.querySelector('button.change-color');
const colorName = document.querySelector('span.color');

changeColorBtn.addEventListener('click', onChangeColorBtn);
function onChangeColorBtn() {
    colorName.textContent = getRandomHexColor();
    bodyColor.style.backgroundColor = `${colorName.textContent}`;
}
