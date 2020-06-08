import { cash, assortment, calculation } from './math.js';
function dataAssortment() { //видрук залишків каси і товарів
    document.getElementById('span_balans').textContent = cash;
    document.getElementById('span_beer').textContent = assortment.beer.num;
    document.getElementById('span_wine').textContent = assortment.wine.num;
    document.getElementById('span_pepsi').textContent = assortment.pepsi.num;
};
dataAssortment();

let printAssort = {}; //обєкт зберігання доданого/вибраного асортименту
document.getElementById('add').addEventListener('click', function () { //клік по кнопці "Додати"
    if (document.getElementById('input_num').value > 0) { //якщо введено число > 0
        if (assortment[document.querySelector('input:checked').value].num >= Math.round(document.getElementById('input_num').value)) { //якщо введена кількість товару є на залишку
            printAssort[document.querySelector('input:checked').value] = { name: document.querySelector('input:checked + label').textContent, num: Math.round(document.getElementById('input_num').value) };
            document.getElementById('add_goods').innerHTML = ''; //попередня очистка дисплею "Додати"
            for (const key in printAssort) {
                document.getElementById('add_goods').insertAdjacentHTML("beforeend", `<p>${printAssort[key].name}: ${printAssort[key].num} шт. </p>`);
            };
        } else {alert(`Вибачте, але на складі залишилося товару '${document.querySelector('input:checked + label').textContent}' тільки ${assortment[document.querySelector('input:checked').value].num} штук.`)};
    } else { alert('Потрібно ввести кількість вибраного товару - це має бути ціле число більше нуля.'); };
});

document.getElementById('buy').addEventListener('click', function () { //клік по кнопці "Купити"
    if (document.getElementById('add_goods').innerHTML) {
        document.getElementById('add_goods').innerHTML = ''; //очистка дисплею "Додати"
        document.getElementById('output_data').innerHTML = ''; //попередня очистка дисплею "Куплено"
        let sum = 0;
        for (const key in printAssort) { //видрук купленого асортименту
            sum += (+printAssort[key].num * assortment[key].price);
            document.getElementById('output_data').insertAdjacentHTML("beforeend", `<p>${printAssort[key].name}: ${printAssort[key].num} шт. </p>`);
        };
        document.getElementById('output_data').insertAdjacentHTML("beforeend", `<p>Всього: ${sum} гривень </p>`); //видрук загальної вартості
        calculation(printAssort); //передача обєктa з вибраними товарами в модуль
        dataAssortment(); //видрук залишків каси і товарів
        printAssort = {}; //очистка обєктa зберігання доданого/вибраного асортименту
    } else { alert('У Вас немає доданих в корзину товарів - спочатку виберіть товари для купівлі.') };
});

