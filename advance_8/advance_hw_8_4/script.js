function getSqrt() {
    var agr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        agr[_i] = arguments[_i];
    }
    if (arguments.length > 1)
        return 'Функція приймає тільки 1 аргумент!';
    if (arguments.length === 0)
        return 'Будь ласка, введіть число!';
    if (typeof agr[0] === "number" && !Number.isNaN(agr[0]) && agr[0] !== Infinity && agr[0] !== -Infinity) { //якщо ввели число
        if (agr[0] >= 0) {
            return "\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u043A\u043E\u0440\u0456\u043D\u044C \u0437 " + agr[0] + " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 " + Math.sqrt(agr[0]) + ".";
        }
        else {
            return 'Введіть додатнє число.';
        }
        ;
    }
    else {
        return 'Повинно бути числове значення.';
    }
    ;
}
;
console.log(getSqrt(25));
console.log(getSqrt('передається не число'));
console.log(getSqrt(-25));
console.log(getSqrt());
console.log(getSqrt(23, 54)); //якщо передали більше 1 аргумента
