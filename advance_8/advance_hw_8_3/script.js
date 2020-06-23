function maxNum(a, b) {
    var arg = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg[_i - 2] = arguments[_i];
    }
    var max = arguments[1];
    for (var i = 0; i < arguments.length; i++) {
        if (max < arguments[i])
            max = arguments[i];
    }
    return max;
}
;
console.log(maxNum(5, -2));
console.log(maxNum(5, -2, 30, 6));
