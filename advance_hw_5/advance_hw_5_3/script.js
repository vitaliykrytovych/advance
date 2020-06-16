class MyString {
    reverse(str) {
        return (str.split("").reverse().join(""));
    }
    reverse2(str) {
        let newStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        };
        return (newStr);
    }
    ucFirst(str) {
        return (str[0].toUpperCase() + str.slice(1));
    }
    ucWords(str) {
        return ((str[0].toUpperCase() + str.slice(1)).split("") //масив з рядка + зразу першу букву "збільшено"
            .map((elem, ind, arr) => { //"збільшення" кожної початкової букви слова
                if (arr[ind - 1] === ' ') { return elem = elem.toUpperCase() } else { return elem = elem };
            })
            .join("") //перетворення масива в рядок
        );
    }
    ucWords2(str) { //просто циклом - очевидніше і простіше
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            if (!newStr[newStr.length - 1] || newStr[newStr.length - 1] === ' ') {
                newStr += str[i].toUpperCase();
            } else {
                newStr += str[i];
            };
        };
        return (newStr);
    }
};

const str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.reverse2('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));
console.log(str.ucWords2('arsenal arsenal    arsenal'));