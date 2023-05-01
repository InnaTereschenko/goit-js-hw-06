// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
//  і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const spanColor = document.querySelector('span.color');
const btnChangeColor = document.querySelector('button.change-color');

btnChangeColor.addEventListener('click', changeColor);

function changeColor(event) {
  let colorRandom = getRandomHexColor();
  bodyEl.style.backgroundColor = colorRandom;
  spanColor.textContent = colorRandom;
  console.log(colorRandom);
}
