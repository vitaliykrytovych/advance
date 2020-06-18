let checkCount = 0; //лічильник правильно заповнених полів
const stor2 = document.querySelector(".div_signIn"); //сторінка2
const stor3 = document.querySelector(".div-acc"); //сторінка3
stor2.style.display = 'none'; //спочатку стор2 не видно
stor3.style.display = 'none'; //спочатку стор3 не видно


document.getElementById('signIn').addEventListener('click', function () { //клік по тексту "Sign In now" --------------------
    document.querySelector(".my_form").style.display = 'none'; //зникає сторінка1
    stor2.style.removeProperty('display'); //зявляється стор2
});


document.getElementById('signUp').addEventListener('click', function () { //клік по тексту "Sign Up now" -------------------
    stor2.style.display = 'none'; //зникає сторінка2
    document.querySelector(".my_form").style.removeProperty('display'); //зявляється стор1
});


document.getElementById('submit_signIn').addEventListener('click', function (e) { //клік по кнопці сторінки "Sign In" ------
    e.preventDefault();
    if (localStorage.getItem(document.querySelector('.email_signIn').value)) { //якщо введений емейл зареєстровано
        check(true, '.email_signIn');
        const currentUser = JSON.parse(localStorage.getItem(document.querySelector('.email_signIn').value));
        if (currentUser.password === document.querySelector('.password_signIn').value) { //якщо пароль правильний
            openAccount(currentUser);
        } else { //якщо пароль помилковий;
            check(false, '.password_signIn');
        };
    } else { //якщо введений емейл незареєстровано/відсутній
        check(false, '.email_signIn');
    };
});
document.querySelector('.div-acc__footer').addEventListener('click', function () { //клік по кнопці "Sign Up" стор3 ---------
    location.reload(); //повернення на початкову сторінку
});


document.getElementById('submit_signUp').addEventListener('click', function (e) { //клік по  кнопці сторінки "Sign Up" -----
    e.preventDefault();
    checkCount = 0; //обнулення лічильника кількості правильно заповнених полів
    document.querySelector('.email ~ p span').textContent = 'Please provide a valid Email address'; //в цьому span 2 різних види тексту
    auditSignUp(); //перевірка всіх полів на правильність заповнення (навіть коли емейл внесено повторно - все-одно вказується на інші помилки, якщо вони є)

    if (localStorage.getItem(document.querySelector('.email').value)) { //якщо в localStorage є ключ, що відповідає емейлу
        check(false, '.email'); //емейл - в цьому випадку точно помилково заповнений
        document.querySelector('.email ~ p span').textContent = 'This email already exist'; //повідомлення про вже наявність такого емейлу
    } else if (checkCount === 4) { //якщо в localStorage нема ключа, що відповідає емейлу, і правильно заповнено всі 4 поля input
        let user = {
            firstName: document.querySelector('.first_name').value,
            secondName: document.querySelector('.last_name').value,
            emailAddress: document.querySelector('.email').value,
            password: document.querySelector('.password').value,
            job: 'Designer & Web Developing'
        }
        localStorage.setItem(user.emailAddress, JSON.stringify(user));
        location.reload();
    };
});


function openAccount(currentUser) { //заповнення даних користувача ---------------------------------------------------------------------
    stor2.style.display = 'none'; //зникає сторінка2
    stor3.style.removeProperty('display'); //зявляється стор3
    document.querySelector('.div-acc__data-firstName').textContent = currentUser.firstName + ' ';
    document.querySelector('.div-acc__data-secondName').textContent = currentUser.secondName;
    document.querySelector('.div-acc__data-emailAddress').textContent = currentUser.emailAddress;
    document.querySelector('.div-acc__data-position').textContent = currentUser.job;
};


function inputClick() { //зменшення букв в input ----------------------------------------------------------------------------
    if (!event.path[1].children[0].classList.contains('hidden')) {
        event.path[1].children[0].classList.add('hidden');
        event.path[1].children[1].classList.remove('hidden');
    };
};


//блок перевірки заповнення полів сторінки "Sign Up" ----------------------------------------------------------------------------
function auditSignUp() {
    //в імені і прізвищі = перша буква маленька або велика, решта - маленькі (якщо вони є - якщо імя не з 1 букви)
    let first_check = /^[A-Za-z][a-z]{0,19}$/.test(document.querySelector('.first_name').value);
    check(first_check, '.first_name');

    let last_check = /^[A-Za-z][a-z]{0,19}$/.test(document.querySelector('.last_name').value);
    check(last_check, '.last_name');
    //в емейлі = до @ можна було просто [\w\.-]+ але тоді не врахується, що крапка і тире не можуть стояти спочатку або зразу перед @
    //після @ букви пишуть маленькі, крапка не може бути останнім символом, чи йти зразу після @
    let email_check = /^(([\w]+)|([\w]+[\w\.-]*[\w]+))@([a-z]+[.][a-z]+)$/.test(document.querySelector('.email').value);
    check(email_check, '.email');

    let password_check = /^\w{8,15}$/.test(document.querySelector('.password').value);
    check(password_check, '.password');
};

function check(check_in, name) { //забарвлення полів по результатах їх перевірки
    if (!check_in) { //якщо ввведено помилкове значення
        if (document.querySelector(`${name}`).classList.contains('valid')) document.querySelector(`${name}`).classList.remove('valid');
        if (!document.querySelector(`${name}`).classList.contains('invalid')) document.querySelector(`${name}`).classList.add('invalid');
        if (document.querySelector(`${name} ~ p`).classList.contains('hidden')) document.querySelector(`${name} ~ p`).classList.remove('hidden');
        if (!document.querySelector(`${name} ~ .after_V`).classList.contains('hidden')) document.querySelector(`${name} ~ .after_V`).classList.add('hidden');
        if (document.querySelector(`${name} ~ .after_X`).classList.contains('hidden')) document.querySelector(`${name} ~ .after_X`).classList.remove('hidden');
    } else if (check_in) { //якщо введено правильне значення
        checkCount += 1;
        if (document.querySelector(`${name}`).classList.contains('invalid')) document.querySelector(`${name}`).classList.remove('invalid');
        if (!document.querySelector(`${name}`).classList.contains('valid')) document.querySelector(`${name}`).classList.add('valid');
        if (!document.querySelector(`${name} ~ p`).classList.contains('hidden')) document.querySelector(`${name} ~ p`).classList.add('hidden');
        if (!document.querySelector(`${name} ~ .after_X`).classList.contains('hidden')) document.querySelector(`${name} ~ .after_X`).classList.add('hidden');
        if (document.querySelector(`${name} ~ .after_V`).classList.contains('hidden')) document.querySelector(`${name} ~ .after_V`).classList.remove('hidden');
    };
};