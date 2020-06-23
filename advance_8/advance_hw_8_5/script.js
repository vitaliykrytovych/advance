var badArr = ['java', 'tottenham']; //початкові значення bad_words
function printSpan(arg) {
    var span = document.getElementById('bad_words');
    if (span.textContent === '' && typeof arg === "object") { //при загрузці сторінки
        arg.forEach(function (elem, ind) {
            if (ind === 0) {
                span.textContent += elem;
            }
            else {
                span.textContent += ", " + elem;
            }
            ;
        });
    }
    else if (span.textContent === '') {
        span.textContent += arg;
    } //якщо поле попередньо очистилося Reset
    else {
        span.textContent += ", " + arg;
    }
    ; //якщо поле не пусте = додрук до вже наявних значень
}
;
printSpan(badArr); //друк початкових значень при загрузці сторінки
document.getElementById('span_add').addEventListener('click', function () {
    clearStyleTextarea();
    var inpValue = document.querySelector('input');
    if (inpValue.value.length > 0) { //якщо input містить значення
        clearStyleInput();
        printSpan(inpValue.value);
        inpValue.value = '';
        return;
    }
    else { //якщо input порожній
        if (!inpValue.classList.contains('inputEmpty'))
            inpValue.classList.add('inputEmpty');
        inpValue.placeholder = 'Please write a word!';
    }
    ;
});
document.getElementById('span_reset').addEventListener('click', function () {
    document.getElementById('bad_words').textContent = '';
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';
    clearStyleInput();
    clearStyleTextarea();
    badArr.length = 0;
});
document.getElementById('div_print').addEventListener('click', function () {
    var textArea = document.querySelector('textarea');
    if (textArea.value === '') {
        if (!textArea.classList.contains('inputEmpty'))
            textArea.classList.add('inputEmpty');
        textArea.placeholder = 'Please write a text!';
    }
    else {
        clearStyleTextarea();
        var arrPrint = document.getElementById('bad_words').textContent.split(', '); //масив слів bad_words
        var arrTextarea_1 = textArea.value.split(' '); //масив слів textarea
        arrPrint.forEach(function (elemArrPrint) {
            arrTextarea_1.forEach(function (elemArrTextarea, ind, arr) {
                if (elemArrPrint === elemArrTextarea) {
                    arr[ind] = '*'.repeat(elemArrTextarea.length);
                }
                ;
            });
        });
        textArea.value = arrTextarea_1.join(' ');
    }
    ;
});
document.querySelector('textarea').addEventListener('click', function () {
    clearStyleInput();
});
document.querySelector('input').addEventListener('click', function () {
    clearStyleTextarea();
});
function clearStyleInput() {
    var inpValue = document.querySelector('input');
    if (inpValue.classList.contains('inputEmpty'))
        inpValue.classList.remove('inputEmpty');
    inpValue.placeholder = 'word here...';
}
function clearStyleTextarea() {
    var textArea = document.querySelector('textarea');
    if (textArea.classList.contains('inputEmpty'))
        textArea.classList.remove('inputEmpty');
    textArea.placeholder = 'text here...';
}
