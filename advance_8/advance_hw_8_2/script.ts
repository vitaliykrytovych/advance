let numberPrompt: string = prompt ('Введіть парне або непарне ціле число');
let message: string = (+numberPrompt === 0) ? 'Ви ввели число 0' : (+numberPrompt % 2 === 0) ? 'Ви ввели парне число' : (+numberPrompt % 2 === 1) ? 'Ви ввели непарне число' : 'Ви неправильно ввели значення - будь-ласка введіть парне або непарне ціле число';
console.log (message);