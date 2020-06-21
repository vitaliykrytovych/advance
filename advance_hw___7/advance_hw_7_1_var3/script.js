actionWorkout()
    .then(() => tookShower())
    .then(() => madeBreakfast())
    .then(() => wentWork())
    .catch(error => console.log(error));



function actionWorkout() { //функція "зробити зарядку"
    const promiseActionWorkout = new Promise(
        (resolve, reject) => {
            resolve(console.log('We do charging'));
            reject('Error = I failed to charge');
        }
    );
    return promiseActionWorkout;
};

function tookShower() { //функція "прийняти душ"
    const promiseTookShower = new Promise(
        (resolve, reject) => {
            resolve(console.log('We took a shower'));
            reject('Error = I failed to take a shower');
        }
    );
    return promiseTookShower;
};

function madeBreakfast() { //функція "зробити сніданок"
    const promiseMadeBreakfast = new Promise(
        (resolve, reject) => {
            resolve(console.log('We made breakfast'));
            reject('Error = I failed to make breakfast');
        }
    );
    return promiseMadeBreakfast;
};

function wentWork() { //функція "піти на роботу"
    const promiseWentWork = new Promise(
        (resolve, reject) => {
            resolve(console.log('We went to work'));
            reject('Error = I failed to go to work');
        }
    );
    return promiseWentWork;
};