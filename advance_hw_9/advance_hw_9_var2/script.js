const getS = selector => HTMLElement = document.querySelector(selector);
const arrUser = [getS('.table tr').innerHTML];
let userIndex = false;
;
class User {
    constructor(login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
    }
    ;
}
;
function addUser() {
    if (getS(`.login`).value
        && getS(`.password`).value
        && getS(`.email`).value) {
        let objUser = new User(getS(`.login`).value, getS(`.password`).value, getS(`.email`).value);
        if (typeof userIndex === 'number') {
            arrUser[userIndex] = objUser;
            userIndex = false;
            getS(`.addUser`).textContent = 'Add user';
        }
        else {
            arrUser.push(objUser);
        }
        ;
        getS('form').reset();
        render();
    }
    ;
}
;
function render() {
    getS(`.table`).innerHTML = arrUser[0];
    for (let i = 1; i < arrUser.length; i++) {
        let enterRow = `
            <tr>
            <td>${i}</td>
            <td> ${arrUser[i].login} </td>
            <td>${arrUser[i].password}</td>
            <td>${arrUser[i].email}</td>
            <td><button class="editUser" data-ed="${i}">Edit</button></td>
            <td><button class="deleteUser" data-del="${i}">Delete</button></td>
            </tr>`;
        getS(`.table`).innerHTML += enterRow;
        getS(`button[data-ed = '${i}']`).addEventListener('click', () => {
            const e = event;
            editUser(e);
        });
        getS(`button[data-del = '${i}']`).addEventListener('click', () => {
            const e = event;
            deleteUser(e);
        });
    }
    ;
}
;
function editUser(event) {
    const target = event.target;
    getS(`.addUser`).textContent = 'Edit user';
    userIndex = parseInt(target.dataset.ed);
    getS(`.login`).value = arrUser[userIndex].login;
    getS(`.password`).value = arrUser[userIndex].password;
    getS(`.email`).value = arrUser[userIndex].email;
}
;
function deleteUser(event) {
    const target = event.target;
    arrUser.splice(parseInt(target.dataset.del), 1);
    render();
    getS('form').reset();
}
;
