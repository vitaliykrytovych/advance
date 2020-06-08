function outAdd (){
    let sum = 0;
    return function add (num){
        let count = sum + num;
        sum = count;
        return count;
    };
};
let count1 = outAdd();
console.log(count1(3));
console.log(count1(5));
console.log(count1(228));