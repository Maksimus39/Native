// ----------------------------------------------------------------------- slice - immutable -----------------------------------------------------------------------------

// arr.slice(откуда отрезать, [докуда отрезать]

// 1

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// let subArr = arr.slice(0, 2)                    // [ 'a', 'b' ]
// console.log(arr)
// console.log(subArr)

// 2

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// let subArr = arr.slice(1, 4)                    // [ 'b', 'c', 'd' ]
// console.log(arr)
// console.log(subArr)


// 3

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// let subArr = arr.slice(2)                       // [ 'c', 'd', 'e', 'f' ]
// console.log(arr)
// console.log(subArr)


// ---------------------------------------------------------------------- splice - mutability --------------------------------------------------------------------------------
//  массив,splice (откуда удаляем, сколько удаляем, вставить, вставить)

// 1

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let subArr = arr.splice(1,3)
// console.log(arr)      // [ 'a', 'e', 'f' ]
// console.log(subArr)  //  [ 'b', 'c', 'd' ]


// 2

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let subArr = arr.splice(0,0,'testValue1', 'testValue2');
// console.log(arr);  //  [ 'testValue1', 'testValue2', 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(subArr);  // []


// 3

// let arr = [1,2,3];
// let arrayLength = arr.length;
// arr.splice(0,1,4)
// console.log('arr: ', arr)

// ----------------------------------------------------------------------- toSpliced() - передаются точно так же как и в splice ---------------------------------------------

// 1

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];                        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// let testArr = arr.toSpliced(0,2)                 // [ 'c', 'd', 'e', 'f' ]
// console.log(arr)
// console.log(testArr)

// ------------------------------------------------------------------------ reduce() -----------------------------------------------------------------------------------

// 1

//         reduce(function(acc, item, index) {}, [])
//         reduce(function(acc, item, index) {}) - стартовое значение acc a[0] так как не указали его через запятую


// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce(function (acc, current) {
//     console.log('acc: ', acc)
//     console.log('current: ', current)
//     return acc + current
// }, 0)
// console.log(result);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// task 2

// const fruits = [
//     {name: 'apple', quantity: 2},
//     {name: 'banana', quantity: 3},
//     {name: 'orange', quantity: 1}
// ]
//
// const totalQuantity = fruits.reduce(function (acc, fruit) {
//     return acc + fruit.quantity
// }, 0)
// console.log(totalQuantity)


// 3

// const numbers = [5, 6, 7, 10, 6, 7];
// const maxNumbers = numbers.reduce(function (accumulator, number) {
//     return number > accumulator ? number : accumulator;
// },numbers[0]) // можем не указывать так как по дефолту numbers[0]
// console.log(maxNumbers)
//
//
// const minNumbers = numbers.reduce(function (accumulator, number) {
//     return number < accumulator ? number : accumulator;
// },numbers[0]) // можем не указывать так как по дефолту numbers[0]
// console.log(minNumbers)

// 4

// const people = [
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 30},
//     {name: 'Charlie', age: 22}
// ] // {names: [...], totalAges: 0}
//
// const result = people.reduce(
//     function (acc, user) {
//         acc.names.push(user.name)
//         acc.totalAges += user.age
//         return acc
//     }, {names: [], totalAges: 0})
//
// console.log('result: ', result)

// 5

// const people = [
//     {name: 'Vika', age: 25, budget: 4500},
//     {name: 'Nikita', age: 45, budget: 35000},
//     {name: 'Igor', age: 55, budget: 340},
//     {name: 'Insaf', age: 65, budget: 50000},
//     {name: 'Alyona', age: 75, budget: 20}
// ] // budget count
//
// const BudgetPeople = people.reduce(function (acc, many) {
//     return acc + many.budget
// }, 0)
// console.log("BudgetPeople: ", BudgetPeople)

// 6

// const people = [
//     {name: 'Vika', age: 25, budget: 4500},
//     {name: 'Nikita', age: 45, budget: 35000},
//     {name: 'Igor', age: 55, budget: 340},
//     {name: 'Insaf', age: 65, budget: 50000},
//     {name: 'Alyona', age: 75, budget: 20}
// ] // {totalBudget: [], names:[]}
//
// const result = people.reduce((acc, person) => {
//     acc.totalBudget.push(person.budget)
//     acc.names.push(person.name)
//     return acc
// }, {totalBudget: [], names: []})
//
// console.log('result: ', result)

// 7

// const words = ['Hello', ' ', 'world', '!'] // Hello world!
// const string = words.reduce(function (acc, str) {
//     return acc + str
// }, '')
// console.log(string)
// console.log(typeof string)

// 8

// const arr = [9, 20, 30, 60, 7, 12]
//
// const minNumber = arr.reduce(function (acc, num) {
//     return num < acc ? num : acc
// }, arr[0])
// console.log(minNumber)