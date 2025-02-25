// let userAge = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
// };
//
// console.log(userAge.name)
// console.log(userAge.age)
// userAge.isAdmin = true;
// console.log(userAge)
// console.log(userAge.isAdmin)
// delete userAge.name
// console.log(userAge)
// userAge['likes birds'] = true
// console.log(userAge)
//
// const user = {
//     name: "John",
// }
// user.name = "Max"
// console.log(user)
//
// const us = {}
// us['likes birds'] = true
// console.log(us)

// let fruit = prompt('какой фрукт купить?', 'apple')
// let bag = {
//     [fruit]: 5
// }
// alert(bag.apple)

// function makeUser(name,age) {
//     return{
//         name : name,
//         age : age
//     }
// }
// let user = makeUser('John', 30);
// alert(user.name)

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// }
// alert(obj.for + obj.let + obj.return)

// let obj = {};
// obj.__proto__ = 5; // присвоим число
// alert(obj.__proto__); // [object Object], значение - это объект, т.е. не то, что мы ожидали

// let user = {}
// console.log(user.name === undefined)
// console.log('name' in user)
// console.log('age' in user)
// console.log('isMarried' in user)

// let obj = {
//     test: undefined
// }
// console.log('test' in obj)

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// }
//
// for (let key in user){
//     //console.log(key)
//     console.log(user[key])
// }

//

// task

// let user = {}
// user.name = 'John';
// user.surName = 'Smith';
// user.name = 'Pete'
// delete user.name
// console.log(user)

// const user = {
//     name: 'Max'
// }
// user.name = 'Larisa'
// console.log(user)

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let summa = 0
// for(let key in salaries) {
//     summa += salaries[key]
// }
// console.log(summa)

// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu)

// let message = "Привет!";
// let phrase = message;
// console.log(phrase)
// console.log(typeof phrase)

let user = {
    name: "John"
};


