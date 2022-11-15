// Создаем объект Map
let myMap = new Map();
myMap.set("Германия", "Берлин")
myMap.set("Швеция", "Стокгольм")
myMap.set(1, "Москва")

let newArray = [];
// Перебор Map в цикле for
for (let result of myMap){
    newArray.push(result);
}
console.log(newArray);

let newArrayOfStrings = [];
// Перебор Map с помощью Array.from
// Позволяет на лету выполнять операции с парой ключ-значение
Array.from(myMap, ([key,value]) => newArrayOfStrings.push(`${key} - ${value}`) );
console.log(newArrayOfStrings);

let input = window.sessionStorage;

const listener = function () {
    let prefix = 'arr';
    let curIndex = 0;
    let strOut = '';
    let strIn = inputParseFunction();
    if (input.getItem('curIndex') == null) {
        input.setItem('curIndex', 1);
        input.setItem(prefix + curIndex, strIn);
        strOut = 'Ваш ввод: ' + strIn;
    } else {
        curIndex = Number(input.getItem('curIndex')); // 0
        input.setItem(prefix + (curIndex + 1), strIn);
        strOut = 'Ваш ввод: ' + strIn;
        for (let i = curIndex; i > 0; i--) {
            debugger
            strOut += '\n' + input.getItem(prefix + (i - 1));
        }
        input.setItem('curIndex', ++curIndex)

    }
    alert(strOut);
}

//const listener = function () {
//    // Вытащим значение текстового поля (как у нас уже делается при фильтрации)
//    let currentInput = document.getElementsByTagName('input')[0].value;

//    // Покажем окно с прошлым и новым значением
//    alert('Последний ввод: ' + this.lastInput /* равноценно window.lastInput, так как мы работаем в контексте браузера */
//        + '\n' + 'Текущий ввод: ' + currentInput);

//    // Сохраним новое значение в контекст
//    this.lastInput = currentInput;
//}