//=============================Прототипы==================================

//             ЧТОЗА.__proto__            ЧТОЗА.prototype


//=============================__proto__==================================
// Для чего нужны прототипы?


// Как наследовать свойства из одного объекта в другой?

// const student = {
//     name: 'Max',
//     age: 41
//     // __proto__ :{} new Object()
// }
//
// const mentor = {
//     isMentor: true
// }
//
// mentor.__proto__ = student
// console.log(mentor.__proto__)

// -------- 1 способ -------
// console.log(student)
//
// console.log(mentor)
// console.log(mentor.name)
// console.log(mentor.age)


// -------2 способ ------------

// Object.create(), Object.HasOwnProperty()
// const mentor1 = Object.create(student)
// console.log(mentor1.name)


// Чем может быть равен __proto__?
// Объект либо null


// У кого есть __proto__?
// Есть у всех объектов

const obj = new Object()
const array = new Array()
const func = new Function()
const date = new Date()
const number = new Number()
const string = new String()


const a1 = 1

const man1 = {}  // new Object()
const man2 = {}  // new Object()

//console.log(man1.__proto__.__proto__)
// console.log(a1)
// console.log(a1.__proto__)
// console.log(a1.__proto__.__proto__)
// console.log(a1.__proto__.__proto__.__proto__)


//=============================prototype==================================
// функции-конструкторы в JS встроенные какие знаете?
// function Car(brand) {
//     this.brand = brand
// }
//
// const isPremiumCar = {
//     isPremium: true,
//     getBrand() {
//         return this.brand
//     }
// }
// Car.prototype = isPremiumCar
// const bmw = new Car('bmw')
// console.log(bmw.getBrand())


// У кого есть свойство prototype?

// __proto__ есть у всех объектов
// prototype - есть у функций и классов


// Какая связь между __proto__ и prototype?


// Посмотри с помощью чего созданы все типы данных


// Смотрим прототипы и их цепочку


//=============================Прототипы для функции-конструктора==================================
// Написать функцию конструктор
function Car() {
    // this.brand = brand
}

Car.prototype.incubator = 100200

const bmw = new Car('bmw')
console.log(bmw.incubator)







// Задание свойства в прототип для функции-конструктора


// Задание метода в прототип для функции-конструктора


// Как работает this для прототипов?


//=============================Создание своих методов для примитивов================================
// Откуда у примитивов взялись методы?
// Расскажи на примере (1).toString()


// Создай метод superSamurai для строки, который будет добавлять строку,
// переданную в качестве параметра в нашу функцию к нашей текущей строке


// Попробуй применить его к любой строке


// Создай свойство samuraiCount для чисел, которое должно равняться 100200


// Попробуй переопределить свойство length для строки и посмотри получилось ли


// Докажи что в JS все это объект


// =============== Задание по прототипам ========================================

/*
1. Создай функцию-конструктор Animal, внутри нее напиши console.log('Наш зверь')
2. С помощью функции-конструктора Animal создай экземпляр monkey
3. Посмотри что будет если создавать экземпляр без ключевого слова
4. Посмотри что будет если к monkey применить метод constructor
5. Посмотри что будет если взять instanceof monkey от Animal

6. Создай новые свойства для Animal: type, arial, isDangerous, energy
7. Создай экземпляр monkey и lion c этими свойствами и проверь вышло
8. Создай метод run внутри Animal, в котором будет проверяться свойство energy,
если energy больше нуля, то она будет уменьшаться на 20,
иначе выведи в консоль -> Пощади зверя!
9. Проверь экземпляры на наличие методов и их работу

10. Равны ли между собой методы для monkey и lion?
А теперь сравни метод map для любых двух массивов arr1.map === arr2.map и сделай вывод
11. Добавь метод run в prototype (и убери старый из Animal)
12. Попробуй вызвать данный метод для каждого из экземпляров
и посмотри в браузере что у нас за экземпляры
Поясни откуда у них взялся данный метод
13. Добавь с помощью prototype новое свойство hungry = 60% в Animal (вне его)
и такое же свойство внутри Animal hungry = 10%
и попробуй вывести данное свойство в консоль, сначала когда они оба есть и когда есть свойство
только вне функции (с помощью prototype)
Объясни как это работает?
14. Создай еще один метод в prototype -> getEnergyInfo и выведи в консоль текущий уровень энергии -> '(число)'
Создай ниже такой же метод в prototype ->
getEnergyInfo и выведи в консоль -> 'Текущий уровень энергии (число)'
Посмотри что будет

Объясни как это работает и что это дает?
 */


// =============== Решение задачи по прототипам ========================================


//=============================JSON==================================

// Расшифруй аббревиатуру


// Для чего нужен JSON?


// Что попадает в JSON, а что нет?
/*
JSON поддерживает следующие типы данных:
- Объекты { ... }
- Массивы [ ... ]
- null

- Примитивы:
   * cтроки,
   * числа,
   * логические значения true/false,
 */

/*
JSON пропускает некоторые специфические свойства объектов JavaScript:
- Свойства-функции (методы).
- Символьные ключи и значения.
- Свойства, содержащие undefined.
 */


// Пример
const frontData = {
    name: 'Alex',
    login: 'alexandro',
    age: 25,
    isOnline: false,
    isAdmin: false,
    email: 'alex25@gmail.com',
    password: '12345',
    location: {
        country: 'Belarus',
        city: 'Vitebsk'
    }
}

// как из данного объекта сделать JSON?


// В чем отличие данных в JSON от обычного объекта?


// console.log(frontData)
// console.log(jsonFrontData)


// Как теперь серверу превратить этот JSON обратно в объект?


// console.log(jsonBackData)


//=============================try, catch, finally==================================

// Для чего нужна данная конструкция и когда используется?


// Базовая запись


// Как обработать ошибку?


// Что делает блок try?


// Что делает блок catch?


// Какие свойства содержит объект ошибки и что они означают?


// Как можно сократить здесь код?


// Что делает блок finally?


// Как создать пользовательскую ошибку?