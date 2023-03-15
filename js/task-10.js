// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, 0)}`;
// }

// const createBtn = document.querySelector('button[data-create]');
// const destroyBtn = document.querySelector('button[data-destroy');
// const boxesEl = document.querySelector('div#boxes');

// createBtn.addEventListener('click', getAmount);
// destroyBtn.addEventListener('click', destroyBoxes);

// function getAmount() {
//     const amount = document.querySelector('div#controls input').value;
//     createBoxes(amount);
//     // console.log(amount)
// }

// function createBoxes(amount) {
//     let basicSize = 30;
//     let fragment = document.createDocumentFragment();
//     for (var i = 0; i < amount; i += 1) {
//         var size = basicSize + i * 10;
//         var div = document.createElement('div');
//         div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
//         fragment.appendChild(div);
//     }
//     boxesEl.appendChild(fragment);
// }

// function destroyBoxes() {
//     boxesEl.innerHTML = '';
// }
