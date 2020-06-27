var getS = function (selector) { return HTMLElement = document.querySelector(selector); }; //функція вибору елемента document
var arrUser = [getS('.table tr').innerHTML]; //масив для зберігання даних юзерів (нульовий елемент = заголовки колонок/перший рядок)
var userIndex = false; //для редагування даних юзера
function addUser() {
    if (getS(".login").value
        && getS(".password").value
        && getS(".email").value) { //виконується, якщо всі поля заповнено
        var objUser = {
            login: getS(".login").value,
            password: getS(".password").value,
            email: getS(".email").value
        };
        if (typeof userIndex === 'number') { //якщо редагуємо юзера
            arrUser[userIndex] = objUser;
            userIndex = false;
            getS(".addUser").textContent = 'Add user';
        }
        else { //якщо вводимо нового юзера
            arrUser.push(objUser);
        }
        ;
        getS('form').reset(); //очистка форми
        render();
    }
    ;
}
;
function render() {
    getS(".table").innerHTML = arrUser[0]; //заголовки табличок/рядок 1
    for (var i = 1; i < arrUser.length; i++) { //вставляються рядки таблиці
        var enterRow = "\n            <tr>\n            <td>" + i + "</td>\n            <td> " + arrUser[i].login + " </td>\n            <td>" + arrUser[i].password + "</td>\n            <td>" + arrUser[i].email + "</td>\n            <td><button class=\"editUser\" data-ed=\"" + i + "\">Edit</button></td>\n            <td><button class=\"deleteUser\" data-del=\"" + i + "\">Delete</button></td>\n            </tr>";
        getS(".table").innerHTML += enterRow;
        getS("button[data-ed = '" + i + "']").addEventListener('click', function () {
            var e = event;
            editUser(e);
        });
        getS("button[data-del = '" + i + "']").addEventListener('click', function () {
            var e = event;
            deleteUser(e);
        });
    }
    ;
}
;
function editUser(event) {
    var target = event.target;
    getS(".addUser").textContent = 'Edit user';
    userIndex = parseInt(target.dataset.ed); //визначення індекса юзера, по якому клікнуто
    getS(".login").value = arrUser[userIndex].login;
    getS(".password").value = arrUser[userIndex].password;
    getS(".email").value = arrUser[userIndex].email;
}
;
function deleteUser(event) {
    var target = event.target;
    arrUser.splice(parseInt(target.dataset.del), 1); //видалення відповідного запису про користувачча в масиві
    render(); //перемальовування таблички
    getS('form').reset(); //очистка форми - якщо нажато Delete в режимі редагування
}
;
