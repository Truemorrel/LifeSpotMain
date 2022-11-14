/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */
//let session =  new Map();
//let session = {};
//if (session.getItem('startDate')) {
//    session.setItem('startDate', new Date().toLocaleString());
//    session.setItem('userAgent', window.navigator.userAgent);
//}
//session.setItem('userAgent', window.navigator.userAgent);
//if (session.getItem('userAge')) {
//session.setItem('userAge', prompt("Пожалуйста, введите ваш возраст?"));
//}

let session = window.sessionStorage;
/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */

function handleSession(logger, checker) {
    // Сохраним время начала сессии
    //session["startDate"] = new Date().toLocaleString();
    // Сохраним UserAgent
    //session.set("userAgent", window.navigator.userAgent)
    //session["userAgent"] = window.navigator.userAgent;
    //session["userAge"] = prompt("Пожалуйста, введите ваш возраст?");

    if (session.getItem('startDate') == null) {
        session.setItem('startDate', new Date().toLocaleString());
    };

    if (session.getItem('userAgent') == null) {
        session.setItem('userAgent', window.navigator.userAgent);
    };
    if (session.getItem('userAge') == null) {
        
        session.setItem('userAge', prompt('Введите свой возраст, пожалуйста:'));
        checker(true);
    } else {
        checker(false);
    };
    logger();
}

/*
* Проверка возраста пользователя
* 
* */

let checker = function checkAge(newVisit) {
    // session["userAge"] = prompt("Пожалуйста, введите ваш возраст?")
    if (session.getItem('userAge') >= 18) {
        if (newVisit) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
    }
    else {
        session.setItem('userAgent', window.navigator.userAgent);
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}


/*
* Вывод данных сессии в консоль
* 
* */
//let sessionLog = function () {
//    for (let result of session){
//        console.log(result)
//    }
//}
let logger = function () {
    console.log('Начало сессии: ' + session.getItem("startDate"))
    console.log('Даныне клиента: ' + session.getItem("userAgent"))
    console.log('Возраст пользователя: ' + session.getItem("userAge"))
}
//let logger = () => {
//    for (let item in session) {
//        console.log('\t' + item +':\t ' + session[item]);
//    }
//}

/*
* Функция для фильтраци контента
* Будет вызываться благодаря атрибуту oninput на index.html
* 
* */

function filterContent() {
    let elements = document.getElementsByClassName('video-container');
    
    for (let i = 0; i <= elements.length; i++ ){
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
// setTimeout(() =>
//     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
// 7000);




