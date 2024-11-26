//=============================Метод объекта==================================

// 1. Метод объекта

// способы создания метода объекта

const user = {
    name: 'Max',
    age: 41,
    // 1 способ
    sayHi() {
        return 'Hello World!'
    },
    // 2 способ
    sayHi2: function () {
        return `Hello ${this.name}!`
    },
    getAge: function (inc1) {
        return `Мне ${this.age + inc1} год !`
    },
    getFullInfo() {
        return `Имя ${this.name}, Возраст ${this.age}`
    }
}
// 3 способ
user.sayHi3 = function () {
    return 'Hello world-3'
}


const son = {
    name: 'Andrey',
    age: 11
}


//=============================this==================================

// this

// Что это такое?                  - это объект перед точкой, контекст вызова.
// Какой тип данных?               - {} это объект
// Чему равен?

// для чего это?

// доказательство что это такое


//=============================call, bind, apply==================================

// call, bind, apply


// call
// const sayHi = function () {
//     return 123
// }
//
// console.log(user.getAge.call(son, 10, 20))
// console.log(user.getAge.call(son, 20, 30))
// console.log(user.getAge.apply(son, [20, 30]))
// console.log(user.getFullInfo())
//
// const userForName = user.getFullInfo.bind(son)
//
//
// const userAge = user.getAge.bind(son,10)
//
// console.log('userAge:', userAge())
// console.log('userForName',userForName())


// что за методы?
// для чего нужны?
// что принимают в качестве параметров?

// call

// apply

// bind


// Применение

// const junior = {
//     salary: 500,
//     name: 'Ilya',
//     workExp: 0
// }
//
//
// const teamLead = {
//     salary: 5000,
//     name: 'Denis',
//     workExp: 7
// }
//
// function printDeveloperInfo(extraInfo = '') {
// return `Name: ${this.name},
//         Salary: ${this.salary},
//         WorkExp: ${this.workExp},
//         ExtraInfo: ${extraInfo}
//         `
// }
//
// console.log(printDeveloperInfo.call(teamLead, 'Хватит душить!'))
// console.log(printDeveloperInfo.call(junior, 'Хватит душить!'))
//
// const res = printDeveloperInfo.bind(junior, 'Хватит душить!')
// console.log(res())


//=============================Случаи потери контекста==================================

// 1 й - вызываем функцию без какого либо контекста
// const dev = {
//     name:'Nikita',
//     programmingLanguage:'JavaScript',
//     getName(){
//         return this.name
//     },
//     getProgrammingLanguage(){
//         return this.programmingLanguage
//     }
// }
//
//  const newGetName = dev.getName
// // console.log('newGetName:',newGetName)
// // console.log('getName:', dev.getName())
//
// const res = newGetName.bind(dev)
// console.log('newGetName:',res())

// 2 вариант это стрелочная функция

// const dev = {
//     name:'Nikita',
//     programmingLanguage:'JavaScript',
//     getName(){
//         return this.name
//     },
//     getProgrammingLanguage:()=>{
//         console.log(this)
//         return this.programmingLanguage
//     }
// }
//
// console.log(dev.getProgrammingLanguage())


//=============================Функция-конструктор==================================

// Функция-конструктор

// для чего нужна

// Правила при работе с функцией конструктор

// Базовая запись

// Разница по сравнению с обычной функцией (что возвращают)

// Что делать, если нужно добавить свойство?


// ---------------------------------- Задачи -----------------------------------------------

/*
1. Создайте объект car, у которого есть свойство brand и метод getBrand,
который выводит название марки машины.
Вызовите метод getBrand как метод объекта car.

2. Создайте объект counter, у которого есть свойство count и методы increment, decrement и reset,
которые увеличивают, уменьшают, зануляют (сбрасывает) значение счетчика соответственно.
Используйте ключевое слово this для обращения к свойству count.

3. Создайте объект person, у которого есть свойства name и age.
Создайте метод greet, который выводит сообщение с именем и возрастом персоны.
Используйте метод bind для создания новой функции,
которая будет связывать значение this с объектом person.

4. Создайте объект calculator, у которого есть свойства x и y и методы сложения и умножения этих чисел.
Создайте другой объект user, у которого есть свойства a и b.
Используйте метод call или apply для вызова методов объекта calculator с аргументами из объекта user.
 */