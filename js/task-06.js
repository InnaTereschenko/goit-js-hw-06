// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної
//  кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.querySelector('input');

input.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
 console.log('Це таргет', event.target.value.length);
    console.log('це дата', parseInt(input.dataset.length));

if (event.target.value.length === parseInt(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
             
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    
    }



