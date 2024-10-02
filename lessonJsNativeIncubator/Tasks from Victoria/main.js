// ----------------------------------------------------------------------------------------------- push() --------------------------------------------------------------------------

// Добавьте один или несколько элементов в конец массива

// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('lemon')
// console.log(fruits)

// ----------------------------------------------------------------------------------------------- pop() -------------------------------------------------------------------------------

// Удалите последний элемент в массиве и верните этот элемент

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const lastElement = users.pop()
// console.log(users)
// // [
// // { id: 1, name: 'Bob', isStudent: true },
// //     { id: 2, name: 'Alex', isStudent: true },
// //     { id: 3, name: 'Ann', isStudent: true }
// // ]
//
//
// console.log(lastElement)  //  { id: 4, name: 'Donald', isStudent: false }


// ---------------------------------------------------------------------------------------------- shift() -------------------------------------------------------------------------------

// Удалите первого юзера и верните его

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const firstIndex = users.shift()
// console.log(users)
//
//     // [
//     // { id: 2, name: 'Alex', isStudent: true },
//     //     { id: 3, name: 'Ann', isStudent: true },
//     //     { id: 4, name: 'Donald', isStudent: false }
//     // ]
//
// console.log(firstIndex)  //  { id: 1, name: 'Bob', isStudent: true }


// ------------------------------------------------------------------------------------------------ unshift() -------------------------------------------------------------------------

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const person = {
//     id: 0,
//     name: 'Max',
//     isStudent: true,
// }
//
// users.unshift(person)
// console.log(users)

// ---------------------------------------------------------------------------------------- reverse(), join(), split(): -------------------------------------------------------------

// Сделать reverse слова

// const str = 'JavaScript is awesome'
// const test = str.split('').reverse().join('')
// console.log(test)

// ----------------------------------------------------------------------------------------- concat () --------------------------------------------------------------------------------

// function mergeArrays(arr1, arr2) {
//     let testArray = [];
//     return testArray.concat(arr1, arr2)
// }
//
// console.log(mergeArrays([1,2,3],[4,5,6]))  // [ 1, 2, 3, 4, 5, 6 ]

// --------------------------------------------------------------------------------------- flat() ----------------------------------------------------------------------------------------

// function testFlatArray(arr) {
//     return arr.flat(2)
// }
// console.log(testFlatArray([1, 2, [3, [4, 5]], 6]));

// --------------------------------------------------------------------------------------- find() -----------------------------------------------------------------------------------

// function findArray(arr) {
//     return arr.find(num => num > 25)
// }
//
// console.log(findArray([10, 20, 30, 40, 50]))  // 30


// function findFruits(arr) {
//     return arr.find(fr => fr.toLowerCase().startsWith('о'));
// }
//
// console.log(findFruits(["яблоко", "банан", "апельсин", "киви"]));  // Вывод: "апельсин"

// function findFirstElement(arr) {
//     return arr.find(function (num) {
//         return num > 39
//     })
// }
//
// console.log(findFirstElement([10, 20, 30, 40, 50]))


// ------------------------------------------------------------------------------------- includes() ------------------------------------------------------------------------------------

// function includesArray(arr) {
//     return arr.includes(3)
// }
//
// console.log(includesArray([1, 2, 3, 4, 5]))

// function includesArray(arr) {
//     return arr.includes('виноград')
// }
//
// console.log(includesArray(["яблоко", "банан", "апельсин", "киви"]))

// function checkElement(arr, element) {
//     return arr.includes(element, 1);
// }
//
// console.log(checkElement(["яблоко", "банан", "апельсин", "киви"],"банан"))

// ------------------------------------------------------------------------------------- filter() ------------------------------------------------------------------------------------

// function filterArray(arr) {
//     return arr.filter(item => item > 25)
// }
// console.log(filterArray([10, 20, 30, 40, 50]))


// function filterArray(arr) {
//     return arr.filter(el => el > 20)
// }
// console.log(filterArray([5, 15, 25, 35, 45]))


// function filterGreaterThan(arr, check) {
//     return arr.filter(el => {
//         return el > check
//     })
// }
//
// console.log(filterGreaterThan([5, 15, 25, 35, 45], 20))


// -------------------------------------------------------------------------------- sort() -----------------------------------------------------------------------------------------

// let people = [
//     {name: 'John', age: 30},
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 35},
// ];
//
// function sortAlphabeticallyByProperty(arr) {
//     return arr.sort((a, b) => a.name.localeCompare(b.name));
// }
//
// console.log(sortAlphabeticallyByProperty(people))


// function sortDescending(arr) {
//     return arr.sort((a, b) => a - b);
// }
// console.log(sortDescending([5, 2, 8, 1, 4]))

// ------------------------------------------------------------------------------- map() --------------------------------------------------------------------------------------------

// let data = [
//     { value: 1, name: 'Option 1' },
//     { value: 2, name: 'Option 2' },
//     { value: 3, name: 'Option 3' },
// ];
//
// const formattedData=  data.map(item =>item)
// console.log(formattedData)


// let products = [
//     {id: 1, name: 'Apple', price: 1.99},
//     {id: 2, name: 'Banana', price: 0.99},
//     {id: 3, name: 'Orange', price: 2.49},
// ];
//
// const productsWithDiscount = products.map(el => ({
//     ...el,
//     discountedPrice: el.price * 0.9
// }))
// console.log(productsWithDiscount)


// ------------------------------------------------ Additional task -----------------------------------

// function isPalindrome(str) {
//     str = str.replace(/\s/g, '').toLowerCase();
//     // Разворачиваем строку и сравниваем с исходной
//     return str === str.split('').reverse().join('');
// }
//
// console.log(isPalindrome('hello'))



// let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];
//
// const doubleNumber = arr.filter((el,index)=>{
//     return arr.indexOf(el) !== index
// })
//
// console.log(doubleNumber)


























































