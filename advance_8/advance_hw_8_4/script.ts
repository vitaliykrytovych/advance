function getSqrt(...agr): string {
    if (arguments.length > 1) return 'Функція приймає тільки 1 аргумент!';
    if (arguments.length === 0) return 'Будь ласка, введіть число!';
    if (typeof agr[0] === "number" && !Number.isNaN(agr[0]) && agr[0] !== Infinity && agr[0] !== -Infinity) { //якщо ввели число
        if (agr[0] >= 0) {return `Квадратний корінь з ${agr[0]} дорівнює ${Math.sqrt(agr[0])}.`} else {return 'Введіть додатнє число.'};
    } else {
        return 'Повинно бути числове значення.';
    };
};

console.log(getSqrt(25));
console.log(getSqrt('передається не число'));
console.log(getSqrt(-25));
console.log(getSqrt());
console.log(getSqrt(23, 54)); //якщо передали більше 1 аргумента