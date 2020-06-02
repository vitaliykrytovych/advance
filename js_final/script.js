const getS = selector => document.querySelector(selector); //функція вибору елемента document
let changeContent; //відредагований контент
let styleSave = []; //запис поточних стилів при переході в режим редагування

//-------------------------------------------- розмір шрифта --------------------------------------------//
function fontSize() {
    if (getS('.li_size')) { getS('.li_size').remove(); } else { //стирання при повторному натисканні
        let arrSize = ['12px', '14px', '16px', '18px', '20px', '22px', '25px', '30px'];
        let str = inputLi('li_size', arrSize);
        getS('.fontOther').insertAdjacentHTML('beforeend', str);
        document.querySelectorAll('.li_size li').forEach(element => {
            element.style.fontSize = element.textContent; //розмір li = тексту li
            element.addEventListener('click', function () { //клік по li
                getS('.top').style.fontSize = event.target.textContent;
                getS('.li_size').remove();
                getS('.fontOther div:nth-child(2)').style.backgroundColor = 'rgb(228, 228, 228)';
            });
        });
        event.stopPropagation(); //щоб при першому кліку не спрацювала нижня подія
        if (getS('.li_family')) { //бо подію зупинено
            getS('.li_family').remove();
            getS('.fontOther div:nth-child(1)').style.backgroundColor = 'rgb(228, 228, 228)';
        };
        getS('body').addEventListener('click', clearLi);
    };
};
function clearLi() { //----------
    if (getS('.li_size')) getS('.li_size').remove();
    if (getS('.li_family')) getS('.li_family').remove();
    getS('.fontOther div:nth-child(1)').style.backgroundColor = 'rgb(228, 228, 228)';
    getS('.fontOther div:nth-child(2)').style.backgroundColor = 'rgb(228, 228, 228)';
    getS('body').removeEventListener('click', clearLi); //видалення
};
function inputLi(cls, arr) { //обробка блоків зі списками li
    let a = `<div class="${cls}"><ul>`;
    arr.forEach((elem) => {
        a += `<li>${elem}</li>`;
    });
    a += '</ul></div>';
    return a;
};

//-------------------------------------------- fontFamily шрифта --------------------------------------------//
function fontFamily() {
    if (getS('.li_family')) { getS('.li_family').remove(); } else { //стирання при повторному натисканні
        let arrFont = ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'];
        let str2 = inputLi('li_family', arrFont);
        getS('.fontOther').insertAdjacentHTML('beforeend', str2);
        document.querySelectorAll('.li_family li').forEach(element => {
            element.style.fontFamily = element.textContent; //fontFamily li = тексту li
            element.addEventListener('click', function () { //клік по li
                getS('.top').style.fontFamily = event.target.textContent;
                getS('.li_family').remove();
                getS('.fontOther div:nth-child(1)').style.backgroundColor = 'rgb(228, 228, 228)';
            });
            event.stopPropagation(); //щоб при першому кліку не спрацювала нижня подія
            if (getS('.li_size')) { //бо подію зупинено
                getS('.li_size').remove();
                getS('.fontOther div:nth-child(2)').style.backgroundColor = 'rgb(228, 228, 228)';
            };
            getS('body').addEventListener('click', clearLi);
        });
    };
};

//-------------------------------------------- блок задання кольорів/фону --------------------------------------------//
function Color() { //створення блоку з вибором кольорів для тексту
    const colors = ['#0aa999', '#089083', '#1fb66c', '#1b9b5e', '#2891dd', '#207ab9', '#9d63b5',
        '#9051ad', '#31485c', '#283d4f', '#f5bd05', '#f89b0a', '#ed821b', '#db5c00',
        '#f25a3a', '#c84525', '#eaeeef', '#bbc1c4', '#90a2a2', '#7c8a8b', '#000000'];
    event.target.classList.add('clickColor');
    let strColor = '<div class="colors">';
    for (let i = 0; i < colors.length; i++) {
        strColor += `<div class="color-box" style="background-color: ${colors[i]}" onclick="chooseColor()"></div>`;
    };
    strColor += `</div>`;
    let str = `<div class="div_colors">
        <div class="choose_colors">
        <div><p>Choose text color</p><p id = "del">X</p></div>
        <div class="background_container">
        ${strColor}
        </div></div></div>`;
    getS('header').insertAdjacentHTML('beforeend', str);

    if (getS('.backgroundColor').classList.contains('clickColor')) { //----------якщо клік по кнопці backgroundColor
        let str2 = `<div  class="colors_span"><span>Color</span>
                                            <span>Images</span>
                                            <span>Files</span></div>`;
        getS('.background_container').insertAdjacentHTML('beforebegin', str2);


        getS('.colors_span span:nth-child(1)').addEventListener('click', function () { //----------клік по span Color
            if (!getS('.colors')) { //якщо таблички ще нема
                spanBackground(event.target); //зміна backgroundColor у span
                getS('.background_container').innerHTML = strColor;
            };
        });

        getS('.colors_span span:nth-child(2)').addEventListener('click', function () { //----------клік по span Images
            spanBackground(event.target); //зміна backgroundColor у span
            const img = ['./img2/0.jpg', './img2/1.jpg', './img2/2.jpg', './img2/3.jpg', './img2/4.jpg', './img2/5.jpg', './img2/6.jpg', './img2/7.jpg', './img2/8.jpg'];
            if (!getS('.div_img')) { //якщо таблички ще нема, то створиться і виведеться
                let strImg = `<div class="div_img">`;
                for (let i = 0; i < img.length; i++) {
                    strImg += `<div class="color_img" style="background-image: url(${img[i]})" onclick="chooseImg()"></div>`;
                };
                strImg += `</div>`;
                getS('.background_container').innerHTML = strImg;
            };
        });

        getS('.colors_span span:nth-child(3)').addEventListener('click', function () { //----------клік по span Files
            spanBackground(event.target); //зміна backgroundColor у span
            if (!getS('.input_file')) { //якщо таблички ще нема, то створиться і виведеться
                getS('.background_container').innerHTML = `<div class="input_file">
                <input id="input" type="file" name="image" accept="image/jpeg,image/png" onchange="inputFile()">
                <div class="input_title">
                    <div>Choose file...</div>
                    <div>Browse</div>
                </div>
                </div>`;
            };
        });

        function spanBackground(elem) { //зміна backgroundColor у span
            document.querySelectorAll('.colors_span span').forEach(element => {
                element.style.backgroundColor = 'rgb(255, 255, 255)';
            });
            elem.style.backgroundColor = 'rgba(200, 200, 200, 0.3)';
        };
    };

    getS('#del').addEventListener('click', function () { //----------клік по X
        if (getS('.textColor').classList.contains('clickColor')) getS('.textColor').classList.remove('clickColor');
        if (getS('.backgroundColor').classList.contains('clickColor')) getS('.backgroundColor').classList.remove('clickColor');
        getS('.fontOther div:nth-child(3)').style.backgroundColor = 'rgb(228, 228, 228)';
        getS('.fontOther div:nth-child(4)').style.backgroundColor = 'rgb(228, 228, 228)';
        getS('.div_colors').remove();
    });
};

function chooseColor() { //встановлення вибраного кольору тексту або фону
    if (getS('.textColor').classList.contains('clickColor')) {
        getS('.top').style.color = event.target.style.backgroundColor; //задання кольору для тексту
    };
    if (getS('.backgroundColor').classList.contains('clickColor')) {
        getS('.top').style.backgroundImage = 'none';
        getS('.top').style.backgroundColor = event.target.style.backgroundColor; //задання кольору для фону
    };
};

function chooseImg() { //встановлення фону img
    getS('.top').style.backgroundImage = event.target.style.backgroundImage;
};

function inputFile() { //встановлення фону input_file
    let reader = new FileReader();
    reader.addEventListener("loadend", function (result) {
        getS('.top').style.backgroundImage = `url(${result.target.result})`;
    }, false);
    reader.readAsDataURL(getS('.input_file input').files[0]);
};


function signIn() { //клік на кнопці ідентифікації
    if (!getS('.activation .butt').classList.contains('clickSignIn') && !getS('.sign_in')) {
        const strIn = `<div class="sign_in">
                    <p>Sign in</p>
                    <input type="text" name="login" placeholder="Login here..." autofocus>
                    <input type="password" name="password" placeholder="Password here...">
                    <div></div>
                    <div>Sign in</div>
                </div>`;
        getS('header').insertAdjacentHTML('beforeend', strIn);

        getS('.sign_in div:last-child').addEventListener('click', function () { //клік на кнопці входу
            let login_check = /^admin$/;
            let password_check = /^admin$/;
            if (getS('.sign_in input[type=text]').value === '' && getS('.sign_in input[type=password]').value === '') { //якщо 2 поля порожні
                getS('.sign_in div:nth-of-type(1)').textContent = 'Value is empty';
            } else {
                if (login_check.test(getS('.sign_in input[type=text]').value) && password_check.test(getS('.sign_in input[type=password]').value)) {
                    enterUser();
                } else {
                    getS('.sign_in div:nth-of-type(1)').textContent = 'Please check your login and password';
                    getS('.sign_in input[type=text]').style = 'border: 1px solid red';
                    getS('.sign_in input[type=password]').style = 'border: 1px solid red';
                };
            };
        });

        function enterUser() { //вхід користувача
            getS('header .activation .butt').style.backgroundColor = 'rgb(228, 228, 228)';
            getS('header .activation .butt img').remove();
            getS('header .activation .butt').insertAdjacentHTML('afterbegin', '<img src="./img/unlock.svg" alt="unlock">');
            getS('header .one .butt').style.backgroundColor = 'rgb(228, 228, 228)';
            getS('header .one .butt').classList.add('chahgeUnblock');
            getS('.sign_in').remove();
            getS('.activation .butt').classList.add('clickSignIn');
        };
    } else if (getS('.activation .butt').classList.contains('clickSignIn')) {
        let strSingOut = `<div class="sign_out">
                                <div>Cancel</div>
                                <div>Sign out</div>
                            </div>
                            <div class="sign_block"></div>`;
        getS('body').insertAdjacentHTML('afterbegin', strSingOut);
        getS('.sign_out div:first-child').addEventListener('click', function () {
            getS('.sign_out').remove();
            getS('.sign_block').remove();
            getS('header .activation .butt').style.backgroundColor = 'rgb(228, 228, 228)';
        });
        getS('.sign_out div:last-child').addEventListener('click', function () {
            getS('.sign_out').remove();
            getS('.sign_block').remove();
            getS('header .activation .butt').style.backgroundColor = 'rgb(228, 228, 228)';
            getS('header .one .butt').style.backgroundColor = 'rgb(130, 130, 130)';
            getS('header .one .butt').classList.remove('chahgeUnblock');
            getS('header .activation .butt img').remove();
            getS('header .activation .butt').insertAdjacentHTML('afterbegin', '<img src="./img/lock.svg" alt="lock">');
            getS('.activation .butt').classList.remove('clickSignIn');
        });
    };
};


function chahge() { //клік по кнопці режиму редагування
    if (getS('.one .butt').classList.contains('chahgeUnblock')) {
        styleSave = [getS('.top').style.fontWeight,
        getS('.top').style.fontStyle,
        getS('.top').style.textDecoration,
        getS('.top').style.textAlign,
        getS('.top').style.fontSize,
        getS('.top').style.fontFamily,
        getS('.top').style.color,
        getS('.top').style.backgroundColor,
        getS('.top').style.backgroundImage];
        changeContent = getS('header').outerHTML;
        let topContent = [];
        for (let i = 0; i < getS('.top').children.length; i++) {
            topContent[i] = getS('.top').children[i].outerHTML;
        };
        const strHeader = `<header>
                                    <div class="edit_text">
                                        <div class="butt"><img src="./img/shutter-alt.svg" alt="shutter-alt"></div>
                                        <div class="butt"><img src="./img/table.svg" alt="table"></div>
                                        <div class="butt"><img src="./img/list-ul.svg" alt="list"></div>
                                        <div class="butt"><img src="./img/list-ul.svg" alt="list"></div>
                                    </div>
                                </header>`;
        getS('header').remove();
        getS('body').insertAdjacentHTML('afterbegin', strHeader);
        getS('.top').remove();
        const strArea = `<textarea class="area" style = "padding: 20px; min-height: 400px; width: 100%"></textarea>`;
        getS('main').insertAdjacentHTML('afterbegin', strArea);
        let area = getS('.area');
        for (let i = 0; i < topContent.length; i++) {
            area.value += topContent[i];
            area.value += `\n`;
        };

        getS('.edit_text .butt:nth-child(1)').addEventListener('click', function () { //клік по кнопці запису змін
            let content = getS('.area').value;
            getS('.area').remove();
            getS('main').insertAdjacentHTML('afterbegin', '<div class="top"></div>');
            getS('.top').innerHTML = content;
            getS('header').remove();
            getS('body').insertAdjacentHTML('afterbegin', changeContent);
            restorStyle(); //відновлення стилів
        });

        getS('.edit_text .butt:nth-child(2)').addEventListener('click', function () { //клік по кнопці створення таблиці
            getS('.edit_text .butt:nth-child(2)').style.backgroundColor = 'rgb(130, 130, 130)';
            const strTab = `<div class="table_box">
                    <div class="table_title">
                        <p>Greate table</p>
                        <p class="table_box_del">X</p>
                    </div>
                    <form name="createTable" class="create_table">
                        <div class="table_box_left">
                            <div>
                                <span>Count TR:</span>
                                <input type="text" name="countTR" placeholder="Type here...">
                            </div>
                            <div>
                                <span>Width of TD:</span>
                                <input type="text" name="widthTD" placeholder="Type here...">
                            </div>
                            <div>
                                <span>Width of border:</span>
                                <input type="text" name="widthBorder" placeholder="Type here...">
                            </div>
                            <div class="li_error"></div>
                            <div class="table_button button_reset">
                                Reset
                            </div>
                        </div>
                        <div class="table_box_right">
                            <div>
                                <span>Count TD:</span>
                                <input type="text" name="countTD" placeholder="Type here...">
                            </div>
                            <div>
                                <span>Heigth of TD:</span>
                                <input type="text" name="heigthTD" placeholder="Type here...">
                            </div>
                            <div class="border">
                                <div class="border_style">
                                    <span>Style of border:</span>
                                    <select name="styleBorder">
                                        <option value="" selected>choose style</option>
                                        <option value="dotted">dotted</option>
                                        <option value="dashed">dashed</option>
                                        <option value="solid">solid</option>
                                        <option value="double">double</option>
                                        <option value="groove">groove</option>
                                        <option value="ridge">ridge</option>
                                        <option value="inset">inset</option>
                                        <option value="outset">outset</option>
                                    </select>
                                </div>
                                <div class="border_color">                                
                                    <span>Color of border:</span>
                                    <select name="colorBorder">
                                        <option value="" selected>choose color</option>                            
                                        <option value="black">black</option>
                                        <option value="red">red</option>
                                        <option value="green">green</option>                                
                                        <option value="blue">blue</option>
                                        <option value="yellow">yellow</option>
                                        <option value="white">white</option>
                                        <option value="gray">gray</option>
                                        <option value="pink">pink</option>                                
                                    </select>
                                </div>                                
                            </div>
                            <div class="tab_error"></div>
                            <div class="table_button button_create">
                                Create table
                            </div>
                        </div>
                    </form>
            </div>
            <div class="table_block"></div>`
            getS('body').insertAdjacentHTML('afterbegin', strTab); //створення вікна вибору опцій
            getS('.table_box_del').addEventListener('click', function () { //клік по Х закриття вікна
                getS('.edit_text .butt:nth-child(2)').style.backgroundColor = 'rgb(228, 228, 228)';
                getS('.table_block').remove();
                getS('.table_box').remove();
            });

            getS('.button_reset').addEventListener('click', function () { //клік по Reset
                document.forms.createTable.reset();
                let formTabl = document.forms.createTable;
                getS('.li_error').textContent = '';
                for (let i = 0; i < formTabl.elements.length; i++) {
                    formTabl.elements[i].style.color = 'rgb(130, 130, 130)';
                    formTabl.elements[i].style.border = '1px solid rgba(200, 200, 200, 0.8)';
                };
            });

            getS('.button_create').addEventListener('click', function () { //клік по Create table
                let count = 0;
                let formTabl = document.forms.createTable;
                for (let i = 0; i < formTabl.elements.length; i++) { //червоний бордер незаповнених або заповнених неправильно елементів
                    if (formTabl.elements[i].localName == 'input') { //перевірка input
                        if (+formTabl.elements[i].value > 0) { //якщо input заповнено правильно (числами > 0)
                            formTabl.elements[i].style.border = '1px solid rgba(200, 200, 200, 0.8)';
                            formTabl.elements[i].style.color = 'black';
                            ++count;
                        } else {
                            formTabl.elements[i].style.border = '1px solid red';
                            formTabl.elements[i].style.color = 'rgb(130, 130, 130)';
                        };
                    } else { //перевірка select
                        if (formTabl.elements[i].value) { //якщо select вибрано
                            formTabl.elements[i].style.border = '1px solid rgba(200, 200, 200, 0.8)';
                            formTabl.elements[i].style.color = 'black';
                            ++count;
                        } else {
                            formTabl.elements[i].style.border = '1px solid red';
                            formTabl.elements[i].style.color = 'rgb(130, 130, 130)';
                        };
                    };
                };
                if (count === 7) { //якщо всі поля заповнено
                    function createTable() { //-----функція створення таблиці-----
                        let table = `<table style="border-collapse: collapse;">`
                        for (let i = 1; i <= formTabl.countTR.value; i++) {
                            table += `<tr>`;
                            for (let j = 1; j <= formTabl.countTD.value; j++) {
                                table += `<td style="border: ${formTabl.widthBorder.value}px ${formTabl.styleBorder.value} ${formTabl.colorBorder.value}; width: ${formTabl.widthTD.value}px; height: ${formTabl.heigthTD.value}px;">TD</td>`;
                            };
                            table += `</tr>`;
                        };
                        table += `</table>`;
                        getS('.area').value += table;
                    };
                    getS('.li_error').textContent = '';
                    createTable();
                } else {getS('.li_error').textContent = 'Invalid value'};
            });
        });

        getS('.edit_text .butt:nth-child(4)').addEventListener('click', function () { //клік по кнопці Create UI
            getS('.edit_text .butt:nth-child(4)').style.backgroundColor = 'rgb(130, 130, 130)';
            const strLI = `<div class="create_li">
                            <div class="li_title">
                                <p>Greate UI</p>
                                <p class="li_del">X</p>
                            </div>
                            <form name="createLI" class="li_form">
                                <div>
                                    <p>Count li item:</p>
                                    <input name="countLi" type="text" placeholder="Type here...">
                                </div>
                                <div>
                                    <p>Type marks of list:</p>
                                    <select  name="marksLi">
                                        <option value="" selected>choose UI type mark</option>
                                        <option value="circle">circle</option>
                                        <option value="disc">disc</option>
                                        <option value="square">square</option>
                                    </select>
                                </div>
                                <p class = "li_error"></p>
                                <div class="li_list_button">
                                    <div class="li_button li_reset">Reset</div>
                                    <div class="li_button li_create" data-id="ul">Create list</div>
                                </div>
                            </form>
                        </div>
                        <div class="li_block"></div>`
            getS('body').insertAdjacentHTML('afterbegin', strLI); //створення вікна вибору опцій
            getS('.li_del').addEventListener('click', liDel); //клік по Х закриття вікна
            getS('.li_reset').addEventListener('click', liReset); //клік по Reset
            getS('.li_create').addEventListener('click', liCreate) //клік по Create list
        });

        getS('.edit_text .butt:nth-child(3)').addEventListener('click', function () { //клік по кнопці Create OI
            getS('.edit_text .butt:nth-child(3)').style.backgroundColor = 'rgb(130, 130, 130)';
            const strLI = `<div class="create_li">
                            <div class="li_title">
                                <p>Greate OI</p>
                                <p class="li_del">X</p>
                            </div>
                            <form name="createLI" class="li_form">
                                <div>
                                    <p>Count li item:</p>
                                    <input name="countLi" type="text" placeholder="Type here...">
                                </div>
                                <div>
                                    <p>Type marks of list:</p>
                                    <select  name="marksLi">
                                        <option value="" selected>choose OI type mark</option>
                                        <option value="decimal">1</option>
                                        <option value="upper-roman">I</option>
                                        <option value="lower-roman">i</option>
                                        <option value="upper-alpha">A</option>
                                        <option value="lower-alpha">a</option>
                                    </select>
                                </div>
                                <p class = "li_error"></p>
                                <div class="li_list_button">
                                    <div class="li_button li_reset">Reset</div>
                                    <div class="li_button li_create" data-id="ol">Create list</div>
                                </div>
                            </form>
                        </div>
                        <div class="li_block"></div>`
            getS('body').insertAdjacentHTML('afterbegin', strLI); //створення вікна вибору опцій
            getS('.li_del').addEventListener('click', liDel); //клік по Х закриття вікна
            getS('.li_reset').addEventListener('click', liReset); //клік по Reset
            getS('.li_create').addEventListener('click', liCreate) //клік по Create list
        });
    };
};


//--------------------------------зміна backgroundColor деяких кнопок при кліку----------------------------------//
document.querySelectorAll('header .fontStyle .butt, header .fontOther .butt, header .activation .butt').forEach(element => {
    element.addEventListener('click', function () {
        event.target.style.backgroundColor = (event.target.style.backgroundColor === 'rgb(130, 130, 130)') ? 'rgb(228, 228, 228)' : 'rgb(130, 130, 130)';
    });
});

function fontWeight() { //-----товщина шрифта-----
    getS('.top').style.fontWeight = (getS('.top').style.fontWeight === 'bold') ? 'normal' : 'bold';
};
function fontStyle() { //-----нахил шрифта-----
    getS('.top').style.fontStyle = (getS('.top').style.fontStyle === 'italic') ? 'normal' : 'italic';
};
function fontUnderline() { //-----підкреслення шрифта-----
    if (getS('.top').style.textDecoration == 'line-through') getS('.fontStyle div:nth-child(4)').style.backgroundColor = 'rgb(228, 228, 228)'; //якщо включено перекреслювання
    getS('.top').style.textDecoration = (getS('.top').style.textDecoration == 'underline') ? 'none' : 'underline';
}
function fontThrough() { //-----перекреслення шрифта-----
    if (getS('.top').style.textDecoration == 'underline') getS('.fontStyle div:nth-child(3)').style.backgroundColor = 'rgb(228, 228, 228)'; //якщо включено підкреслювання
    getS('.top').style.textDecoration = (getS('.top').style.textDecoration == 'line-through') ? 'none' : 'line-through';
}
function alignLeft() { //-----вирівнювання вліво-----
    if (getS('.top').style.textAlign != 'left') getS('.top').style.textAlign = 'left';
}
function alignRight() { //-----вирівнювання центр-----
    if (getS('.top').style.textAlign != 'right') getS('.top').style.textAlign = 'right';
}
function alignCenter() { //-----вирівнювання вправо-----
    if (getS('.top').style.textAlign != 'center') getS('.top').style.textAlign = 'center';
}

//-------------------- робота з ul / ol -------------------
function createLI(count, mark, type) { //-----функція видруку відповідного списку li-----
    let list = `<${type} style = "list-style-type: ${mark}; list-style-position: inside;">`
    for (let i = 1; i <= count; i++) {
        list += `<li>`;
        list += `item ${i}`;
        list += `</li>`;
    };
    list += `</${type}>`;
    getS('.area').value += list;
};

function liDel() { //клік по Х закриття вікна
    getS('.edit_text .butt:nth-child(3)').style.backgroundColor = 'rgb(228, 228, 228)';
    getS('.edit_text .butt:nth-child(4)').style.backgroundColor = 'rgb(228, 228, 228)';
    getS('.li_block').remove();
    getS('.create_li').remove();
};

function liReset() { //клік по Reset
    document.forms.createLI.reset();
    let formLI = document.forms.createLI;
    getS('.li_error').textContent = '';
    for (let i = 0; i < formLI.elements.length; i++) {
        formLI.elements[i].style.color = 'rgb(130, 130, 130)';
        formLI.elements[i].style.border = '1px solid rgba(200, 200, 200, 0.8)';
    };
};

function liCreate() { //клік по Create list
    let count = 0;
    let formLI = document.forms.createLI;
    for (let i = 0; i < formLI.elements.length; i++) { //червоний бордер незаповнених або заповнених неправильно елементів
        if (formLI.elements[i].localName == 'input') { //перевірка input
            if (+formLI.elements[i].value > 0) { //якщо input заповнено правильно (числами > 0)
                formLI.elements[i].style.border = '1px solid rgba(200, 200, 200, 0.8)';
                formLI.elements[i].style.color = 'black';
                ++count;
            } else {
                formLI.elements[i].style.border = '1px solid red';
                formLI.elements[i].style.color = 'rgb(130, 130, 130)';
            };
        } else { //перевірка select
            if (formLI.elements[i].value) { //якщо select вибрано
                formLI.elements[i].style.border = '1px solid rgba(200, 200, 200, 0.8)';
                formLI.elements[i].style.color = 'black';
                ++count;
            } else {
                formLI.elements[i].style.border = '1px solid red';
                formLI.elements[i].style.color = 'rgb(130, 130, 130)';
            };
        };
    };

    if (count === 2) { //якщо всі поля правильно заповнено = видрук списку
        getS('.li_error').textContent = '';
        createLI(formLI.countLi.value, formLI.marksLi.value, this.dataset.id); //видрук списку ol чи ul
    } else {getS('.li_error').textContent = 'Invalid value'};
};

//-------------------- відновлення стилів при поверненні з режиму редагування -------------------
function restorStyle() {
    if (styleSave[0]) getS('.top').style.fontWeight = styleSave[0];
    if (styleSave[1]) getS('.top').style.fontStyle = styleSave[1];
    if (styleSave[2]) getS('.top').style.textDecoration = styleSave[2];
    if (styleSave[3]) getS('.top').style.textAlign = styleSave[3];
    if (styleSave[4]) getS('.top').style.fontSize = styleSave[4];
    if (styleSave[5]) getS('.top').style.fontFamily = styleSave[5];
    if (styleSave[6]) getS('.top').style.color = styleSave[6];
    if (styleSave[7]) getS('.top').style.backgroundColor = styleSave[7];
    if (styleSave[8]) getS('.top').style.backgroundImage = styleSave[8];
    document.querySelectorAll('header .fontStyle .butt, header .fontOther .butt, header .activation .butt').forEach(element => {
        element.addEventListener('click', function () {
            event.target.style.backgroundColor = (event.target.style.backgroundColor === 'rgb(130, 130, 130)') ? 'rgb(228, 228, 228)' : 'rgb(130, 130, 130)';
        });
    });
};