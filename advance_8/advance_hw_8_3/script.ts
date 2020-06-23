function maxNum(a: number, b: number, ...arg: Array<number>): number {
    let max: number = arguments[1];
    for (let i = 0; i < arguments.length; i++){
        if (max < arguments[i]) max = arguments[i];
    }
    return max;
};

console.log(maxNum(5,-2));
console.log(maxNum(5,-2, 30, 6));