
/*
// 1 Переменные

{"use strict"; // заявляем, что мы работаем в современном режиме

    let myname = 'Nastya'; // Можно изменять, не самый практичный вариант
    const secondName = 'Foxxy'; // Постоянные, но иногда нет
    let age = 18; // Можно менять

// var = string, const = boolean, let = number

    const isProgrammer = true;

// имена Констант, camelCase: firstName, vladPidor
    {
        const _ = 'lol';
        const $ = 'GG'; // Такие переменные тоже являются переменными
        const withNum10 = '10'; // НО!!!! // const 10num НЕЛЬЗЯ
    }

// Непостоянные постоянные
    const obj = {
        a: 50
    };
    obj.a = 10;
    console.log(obj);
// Изменение постоянных
    {
        var result = 50;
    }
    console.log(result);
}

// 2 Типы данных
{
    let number = 10; // or let number = 15.5;

    console.log(-5 / 0); // -Infinity or Infinity
    console.log('Igor' * 20); // NaN

    const person = `15`;

    const bool = true // троя либо фальш, это логика такая

    let und;
    console.log(und); // Underfined и console.log(smth) это Null

    const abj = {
        name: "Red", // Ключ: "Значение"
        age: 25,
        isMarried: false
    };

    console.log(abj.name); // Или:
// console.log(abj["name"]);
// Пример массива:
    let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, [], 10];
    console.log(arr[1]);
}

// 3 Про работу с пользователем
{
// alert("Ага да");
// Про гея
    const conf = confirm("Are u gay?");
    console.log(conf);
    {
        if (conf === true) {
            alert("Yes, u are gay");

        } else {
            (conf === false)
            alert("Sorry, u are not gay");
        }
        ;
    }
    ;

//const answer = prompt("Слышь ты, ты в скорину ходишь?", ""); // С плюсом будет идти как число
//console.log(typeof(answer));

    const answers = [];

    answers[0] = prompt('Как тебя зовут?', '');
    answers[1] = prompt('Как тебя не зовут?', '');
    answers[2] = prompt('Давно по земле ходишь?', '');

    document.write(answers);
}

// 4 Интерполяция

{
    "use strict";

    const category = 'toys';

    console.log(`https://someurl.com/${category}/5`); // Только косые!!!

    const userlol = 'Ivanushka';

    alert(`Hello, ${userlol}`);
}

// 5 Операторы в JS
{
    console.log(7 + +"8"); // НО!!! строка плюс число равно строка
// Унарный плюс -- плюс перед определённым аргументом

// Инкремент и декремент:
    let incr = 10,
        decr = 10; // ; обязательная
//incr++; // Инкремент - увеличение на 1
//decr--; // Декремент - уменьшение на 1

    console.log(incr);
    console.log(decr);

// ++incr or decr - префиксная форма записи
// incr++ or dect - постфиксная форма записи

// Постфиксная форма записи сразу возвращает число к его изначальному значению
// А потом либо уменьшает, либо увлеичивает его

    console.log(5 % 2); // % Показывает ОСТАТОК деления числа

    console.log(2 * 4 == 8); // Нестрогое: число может равняться строке
    console.log(2 * 5 === '10') // Строгое: число равняется только числу

    const isCheked = true,
        isClose = true;
    console.log(isCheked && isClose); //&& (и и) отвечает только на права-правда

    const isChecked = false,
        isCloze = false;
    console.log(isChecked || isCloze); // || (или или) отвечает на "что-то
// из двух будет 100% правдой
    console.log(isChecked || !isCloze); // ! обращает переменную в обратное значение
// true in false etc.
// != это значение неравенства 2 != 8
}
*/
/*
// 13 условия
{
    {
        if (4 == 9) {
            console.log('Хорошо!');
        } else {
            console.log('Error!')
        }
    }
    const num = 30;
    if (num < 29) {
        console.log('Error!');
    } else if (num > 100) {
        console.log('Too much!');
    } else {
        console.log('Ok!');
    }
// Тернарный оператор: (<что-то> ? проверка <или> : <или>)
    (num === 40) ? console.log('Ok!') : console.log('Error!');
    const numb = 40;
// Switch ВСЕГДА идёт только на строгое сравнение
    switch (numb) {
        case 49:
            console.log('Никита ну алло');
            break;
        case 100:
            console.log('Useless');
            break;
        case 41:
            console.log('Yeah');
            break;
        default:
            console.log('Not today')
            break;
    }
}
// 14 Циклы
{
    let num = 40;
    while (num < 45) {
        alert('Can you feel my heart?');
        num++;
    }
    do {
        alert('Hello, gay');
        num++
    }
    while (num < 46);
// for 3 аргумента но не обязательно
// 1) задаеём, 2) до какого момента делаем, 3) шаг цикла
    for (let i = 1; i < 9; i++) {
        if (i === 6) {
            //break; // остановиться на заданном шаге
            continue; // продолжить, но без заданного значения
        }
        alert('Привет Андрей');
        console.log(i);
    }
// обращать внимание на условние и логический контекст
// дабы не было крашей
}
// 15 Функции
{
// В круглых скобках идут аргументы
// Function работает ещё до того, как вызывается
    let num = 25;
    function showFirstMessage(text) {
        console.log(text);
        let num = 15;   // Если переменная объявлена внутри функции, то снаружи
        console.log(num);              // она будет недоступна
    }
    showFirstMessage('Hello, Van');
    console.log(num);
    function calca (c, d) {
        return (a + b);
        console.log('pwep'); // код после ретурна нечитаемый!!!!!!!!
    }
    console.log(calca(4, 3));
    console.log(calca(6, 7));
    console.log(calca(5, 6));
    function ret() {
        let num = 45;
        return num;
    }
    const anotherNum = ret();
    console.log(anotherNum);
//данную функцю можно вызвать только после объявления
    const logger = function () {
        console.log('Hello');
    }; // ; стоит ставить
    logger();
// Стрелочная функция
    const calc = (a, b) => {
        console.log('1');
        return a + b;
    };
// Такая функция не имеет контекста вызова
// Она может записываться так же => ();
// И если она коротка то можно просто записать
}
// 16 Методы и свойства строк и чисел
{
const str = "tEst";
const arr = (1, 2, 4);
console.log(arr.length);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
const fruit = 'Some fruit';
console.log(fruit.indexOf("fruit"));
const logg = "Hello World";
// slice вырезает: (1 - откуда, 2 - до куда) не включая
// если будет только первый аргумент то с него и до конца
console.log(logg.slice(6, 11));
//можно задавать первый арг больше чем второй
//не поддерживает отрицательные значения
console.log(logg.substring(6, 11));
//1 аргумент -- откуда, второй -- длина вырезания
console.log(logg.substr(6, 5));
//Числа
const number = 12.2;
console.log(Math.round(number)); //округляет
const tests = "12.2px";
console.log(parseInt(tests)); // строка обрезается до целого числа
    //плюс становится числом
console.log(parseFloat(tests)); // число возвращает с плавующей точкой
}
// 17 CallBack Функции
{
    function first() {
        // Do smth
        setTimeout(function () {
            console.log(1);
        }, 500);
    }
    function second() {
        console.log(2);
    }
    first();
    second();
// callback - функция, которая должна быть выполнена тогда, после того
// как другая завершила своё выполнение
    function learnJS(lang, callback) {
        console.log(`I'm learning: ${lang}`);
        callback();
    }
    function done() {
        console.log('Done!');
    }
    learnJS('JavaScript', done);
}
// 18 Объекты, деструктуризация объектов
{
    const options = {
        name: "testt",
        width: 1024,
        height: 1024,
        colors: {
            border: 'black',
            bg: 'red'
        },
        makeTest: function () {  // Методы объекта = функция
            console.log("test");
        }
    };
    options.makeTest();
    const {border, bg} = options.colors; // Вытаскиваем из
    console.log(border);
    console.log(Object.keys(options).length);
//delete options.name;
    let counter = 0;
    for (let key in options) {
        if (typeof (options[key]) === 'object') {
            for (let i in options[key]) {
                console.log(`Свойство ${i} имеет значение ${options[key][i]}`); // объект объекта
                counter++;
            }
        } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
        }
        counter++;
        // перебор объекта
    }
    ;
}
// 19 Массивы и псевдомассивы
{
const arr = [1, 22, 13, 64, 58];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b
} // благодаря этой функции идёт нормальная сортировка чисел
//arr.pop(); // удаляет последний элемент массива
//arr.push(10); // добавляет элемент в конец массива
// shift unshift используются редко (начало массива)
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};
for (let value of arr) {
    console.log(value);
};
// 1: тот элемент, который перебираем (1, 2, и тд)
  // 2: номер по порядку
  // 3: ссылка на массив, который перебираем
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
});
const str = prompt("", "");
const products = str.split(", ");
products.sort(); // числа он сортирует по первой цифре
console.log(products.join('; '));
}
// 20 Передача данных по ссылке или значению
{
//let a = 5,
    // b = a;
//b = b + 5;
//console.log(b);
//console.log(a);
//const obj = {
    //  a: 5,
    //  b: 1
//};
//const copy = obj; // кладётся ссылка в копи
//copy.a = 10;
//console.log(copy);
//console.log(obj);
    function copy(mainObj) {
        let objCopy = {};
        let key;
        for (key in mainObj) {
            objCopy[key] = mainObj[key];
        }
        return objCopy;
    };
    const numbers = {
        a: 2,
        b: 5,
        c: {
            x: 7,
            y: 4
        }
    }
    const newNumbers = copy(numbers);
    newNumbers.a = 10;
    console.log(newNumbers);
    console.log(numbers);
    const add = {
        d: 17,
        e: 20
    };
//console.log(Object.assign(numbers, add));
// поверхностная копия:
    const clone = Object.assign({}, add);
    clone.d = 20;
    console.log(add);
    console.log(clone);
    const oldArray = ['a', 'b', 'c'];
    const newArray = oldArray.slice();
    newArray[1] = 'jkfasjkfjksad';
    console.log(newArray);
    console.log(oldArray);
// оператор разворота
    const video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'lj', 'blogger'],
        inet = [...video, ...blogs, 'vk', 'facebook'];
    console.log(inet);
    function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    };
    const nums = [2, 5, 7];
    log(...nums);
    const array = ["a", "b"];
    const newA = [...array];
    const q = {
        one: 1,
        two: 2
    };
    const newO = {...q};
};*/

/*21.Массивы и псевдомассивы

const arr = [1,2,4,7,10];
arr.sort(compareNum); //цифры сортирует как строки, при callback функции сортирует правильно.
console.log(arr);

function compareNum (a, b){
    return a - b; // алгоритм быстрой сортировки
}

arr.pop(); //удаляет элемент с конца массива
arr.push(11); //добавляет элемент в конец массива

console.log(arr);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);  //метод перебора for...of(для массивов)
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
}); //метод перебора forEach - принимает в себя callback функцию.
    //выполняется для каждого элемента массива. Принимает 3 аргумента

//методы перебора и трансформации

//arr.map() //переберает все элементы и может модифицировать его, возращает новый массив
//arr.every()
//arr.filter() //отфильтровываем массив по определенному критерию
//arr.reduce()

//const str = prompt("","");
//const products = str.split(", "); // формирует массив на основании строк
//products.sort(); //Сортирует элементы внутри массива по алфавиту
//console.log(products.join('; ')) // склеивает массив в строку

//псевдомасивы не имеют методов */

/*22. Передача по ссылке или по значению, Spread оператор

const obj = {
    a: 5,
    b: 10
};

//const copy = obj; //ссылка на существующий обьект

//copy.a = 10;

function copy(mainOnj) {
    let objCopy = {};

    let key;
    for (key in mainOnj){
        objCopy[key] = mainOnj[key];
    }

    return objCopy;
}

const number = {
    a: 3,
    b: 5,
    c: {        //вложенная структура
        x:7,
        y:5

    }

};

const newNumber = copy(number); //Поверхостная копия

newNumber.a = 10;
newNumber.c.x = 10;

console.log(newNumber);
console.log(number);

const add = {
    d:17,
    e:20
};

const clone = (Object.assign({}, add));

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c' ];
const newArray = oldArray.slice();

newArray[1] = 'aqsazazxq';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video,...blogs, 'vk', 'facebook']; //оператор разворота

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 9];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};*/

/*23. Основы обьектно орентированое программирование
Один из его стилей прототипно-ориентированное программирование

let str = "some";
let strObj = new String(str);

const soldier = {
    health: 400,
    armor: 100
};

const jonh = Object.create(soldier);

const jonh = {
   health: 100
};

jonh.__proto__ = soldier; //устаревший формат

Object.setPrototypeOf(jonh, soldier);*/

/*24. Практика 4


1) У нас уже есть рабочие приложение состоящее из отдельных функций. Представьте что
перед вами стоит задача переписать его так, чтобы все функции стали методами обьекта
personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре
программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat.
Если оно false - он переключает его в true, если true - в false. Протестировать вместе с
shoMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставить
пустую строку.
Если он это сделал - возращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }



             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

             if (genres === '' || genres == null) {
                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
                 i--;
             } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
             }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

// 26. Динамическая типизация

console.log(typeof (+'1262463578'));

console.log(typeof(parseInt('15qtyq7'))); //метод превращения строки в число

console.log(typeof (Boolean('4')));

// 27. Задачи с собеседований на понимание основ

// let x = 5; alert(x++); //5

// [] + false - null + true; //NaN

// [] + 1 + 2; //"12" как строка

// 2 && 1 && null && 0 && undefined // && запинается на лжи, не работает после null
//ИЛИ запинается на правде
// (!! (1 && 2 ) === (1 && 2)); // два знака"!!" превращают значение в булиновое значение
                    //3
// alert( null || 2 && 3 || 4 );

// a = [1, 2, 3]; b = [1, 2, 3]; //разные хранилища информации

// alert ( +"Infinity" ); //унарный плюс

// ("Ежик" > "яблоко"); особенности юникода

// ( 0 || "" || 2 || undefined || true || false ); // вернется "2" после значение true

*/


















