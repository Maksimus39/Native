// const arr = [1, 2, 3, 4, 5];
// arr.push(6)
// console.log(arr)
//
//
// // splice ---------------------  arr.splice(start[, deleteCount, elem1, ..., elemN])
//
// arr.splice(0, 4)
// console.log(arr)
//
// const strArr = ["Я", "изучаю", "JavaScript"];
// strArr.splice(2, 1)
// console.log(strArr)
//
// const stringArray = [
//     "Привет, мир!",
//     "JavaScript",
//     "Массив строк",
//     "Открытие нового",
//     "Кодирование",
//     "Программирование",
//     "Технологии",
//     "Инновации",
//     "Разработка",
//     "Обучение"
// ];
//
// stringArray.splice(5,5)
// console.log(stringArray)
//
// stringArray.splice(0,1, 'hello world')
// console.log(stringArray)


// ---------------------------------------------------------------------------------- slice arr.slice([start], [end])------------------------------------------

// let arr = ["t", "e", "s", "t"];
//
// console.log(arr.slice(1,3)) // e,s (копирует с 1 до 3)
// console.log(arr.slice(-2))

// ---------------------------------------------------------------------------------- concat arr.concat(arg1, arg2...) -----------------------------------------------

// let arr = [1, 2]
//
// console.log(arr.concat([3, 4]))
//
// console.log(arr.concat([5, 6], [7, 8])) // не изменяет исходные массивы, а возвращает новый массив, содержащий все элементы из исходных массивов.
//
// let arrayLike = {
//     0: "что-то",
//     length: 1
// };
//
// console.log(arr.concat(arrayLike))

// ---------------------------------------------------------------------------------- Перебор: forEach -------------------------------------------------------------

// arr.forEach(function(item, index, array) {
//     // ... делать что-то с item
// });

// ['Max','Larisa','Andrey','Bogdan'].forEach((item,index,array)=>{
//     console.log(`имя ${item} индекс ${index} массив ${array} `)
// });

//  ---------------------------------------------------------------------- Поиск в массиве indexOf/lastIndexOf и includes ---------------------------
// const name = ['Max','Larisa','Andrey','Bogdan']
// console.log(name.indexOf('Larisa'))
//
// const name2 = ['Max','Larisa','Andrey','Bogdan']
// console.log(name2.lastIndexOf('Larisa'))

// ------------------------------------------------------------- find и findIndex/findLastIndex -------------------------------------------------

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let user = users.find(item => item.id === 1);
let user2 = users.findIndex(item => item.name === "Петя");
let user3 = users.findLastIndex(item => item.name === "Маша");

console.log(user.name); // Вася
console.log(user2.name); // 0
console.log(user3.name); // 0