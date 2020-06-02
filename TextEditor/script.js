const getS = selector => document.querySelector(selector); //функція вибору елемента document
function editBtn() { //-----кнопка edit-----
    getS('.style-block').classList.add('hidden'); //сховати блок style
    getS('.edit-block').classList.remove('hidden'); //показати блок edit
    let area = getS('.area');
    area.value = ''; //очистка textarea перед вводом
    for (let i = 0; i < getS('.top').children.length; i++) { //щоб забрати пробіли перед елементами <p>
        area.value += getS('.top').children[i].outerHTML;
        if (i !== getS('.top').children.length-1) area.value += `\n`;
    };
    //--динамічне задання висоти textarea:
    area.style.height = `${parseInt(getComputedStyle(getS('.area')).lineHeight) * (getS('.top').children.length + 1) + parseInt(getComputedStyle(getS('.area')).paddingTop) + parseInt(getComputedStyle(getS('.area')).paddingBottom)}px`;
}
function styleBtn() { //-----кнопка style-----
    getS('.edit-block').classList.add('hidden'); //сховати блок edit
    getS('.style-block').classList.remove('hidden'); //показати блок style
}
function saveBtn() { //-----кнопка save-----
    getS('.top').innerHTML = getS('.area').value;
    getS('.edit-block').classList.add('hidden');
};
function addBtn() { //-----кнопка add-----
    getS('.form-create').reset(); //очистка radio
    getS('.create-table').reset(); //попередня очистка форми (може вже використовувалася)
    getS('.create-list').reset(); //попередня очистка форми (може вже використовувалася)
    if (!getS('.list-box').classList.contains('hidden')) getS('.list-box').classList.add('hidden'); //закриття вкладки, якщо відкрита
    if (!getS('.table-box').classList.contains('hidden')) getS('.table-box').classList.add('hidden'); //закриття вкладки, якщо відкрита
    getS('.second-step').classList.remove('hidden'); //відкриття стор2 з radio вибору
    getS('.first-step').classList.add('hidden'); //закриття стор1
};
function fontSize() { //-----radio розмір шрифта-----
    getS('.top').style.fontSize = event.target.value;
};
function fontFamily() { //-----select form-family-----
    getS('.top').style.fontFamily = event.target.value;
};
function fontWeight() { //-----checkbox товшина шрифта-----
    getS('.top').style.fontWeight = event.target.checked ? 'bold' : 'normal';
};
function fontStyle() { //-----checkbox нахил шрифта-----
    getS('.top').style.fontStyle = event.target.checked ? 'italic' : 'normal';
};

//--------------------------------------------блок задання кольорів--------------------------------------------//
const colors = ['red', 'green', 'blue', 'yellow', 'gray', 'white', 'pink', 'coral', 'purple'];
function Color(){ //створення блоку з вибором кольорів для тексту
    if (event.target.classList.contains('clickColor')){ // якщо клік по вже клікнутому - зникає табличка з кольорами
        getS('.colors').remove();
        clearButcolor();
    } else {
        clearButcolor();
        event.target.classList.add('clickColor');
        if (!getS('.colors')){ //якщо таблички ще нема, то вона створиться і виведеться
            let str = `<div class="colors">`;
            for(let i=0; i<colors.length; i++){
                str += `<div class="color-box" style="background: ${colors[i]}" onclick="chooseColor()"></div>`;
            };
            str += `</div>`;
            getS('.bottom').insertAdjacentHTML('beforeend', str); 
        };
    };
};
function clearButcolor(){ //допоміжна функція очистки класу 2х кнопок
    if (getS('.textColor').classList.contains('clickColor')) getS('.textColor').classList.remove('clickColor'); //очистка 2х, щоб не визначати
    if (getS('.backgroundColor').classList.contains('clickColor')) getS('.backgroundColor').classList.remove('clickColor'); //очистка 2х, щоб не визначати
};
function chooseColor() { //встановлення вибраного кольору для тексту або для фону
    if (getS('.textColor').classList.contains('clickColor')) getS('.top').style.color = event.target.style.background; //задання кольору тексту
    if (getS('.backgroundColor').classList.contains('clickColor')) getS('.top').style.backgroundColor = event.target.style.background; //задання кольору фону
    getS('.bottom').removeChild(event.target.parentElement); //зникає табличка з кольорами
    clearButcolor();
};
//------------------------------------------------------------------------------------------------------------//

function openTable() { //-----radio відкриття створення таблички-----
    getS('.table-box').classList.remove('hidden');
    if (!getS('.list-box').classList.contains('hidden')) getS('.list-box').classList.add('hidden'); //щоб переключатися між табличкою і списком
};
function openList() { //-----radio відкриття створення cписку-----
    getS('.list-box').classList.remove('hidden');
    if (!getS('.table-box').classList.contains('hidden')) getS('.table-box').classList.add('hidden'); //щоб переключатися між табличкою і списком
};

function createTable() { //-----створення таблиці-----
    let table = `<table style="border-collapse: collapse;">`
    for (let i = 1; i <= getS('.countTr').value; i++) {
        table += `<tr>`;
        for (let j = 1; j <= getS('.countTd').value; j++) {
            table += `<td style="border: ${getS('.widthBorder').value}px ${getS('.typeBorder').value} ${getS('.colorBorder').value}; width: ${getS('.widthTd').value}px; height: ${getS('.heigthTd').value}px;">TD</td>`;
        };
        table += `</tr>`;
    };
    table += `</table>`;
    getS('.area').value += table;
    getS('.second-step').classList.add('hidden'); //зникнення стор із встановленням параметрів таблиці
    getS('.first-step').classList.remove('hidden'); //відкриття стор1
};

function createList() { //-----створення списку-----
    let list = `<ul type="${getS('.typeMarks').value}">`
    for (let i = 1; i <= getS('.countLi').value; i++) {
        list += `<li>`;
        list += `item ${i}`;
        list += `</li>`;
    };
    list += `</ul>`;
    getS('.area').value += list;
    getS('.second-step').classList.add('hidden'); //зникнення стор із встановленням параметрів таблиці
    getS('.first-step').classList.remove('hidden'); //відкриття стор1
};