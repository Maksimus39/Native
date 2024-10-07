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


// --------------------------------------------------------- lesson 1 --------------------------------------------------------

// 1

// const a = {};
// const b = {};
// const c = a;
// const d = c;
//
// console.log(a === b);  // false
// console.log(a === c);  // true
// console.log(c === d);  // true
// console.log(a === c);  // true


// 2

// const a = {};
// const b = a;
// b['test'] = 'test value';
//
// console.log(b === a);  // true
// console.log(a);        // ['test'] = 'test value';
// // смутриурет ли объект a?


// 3

// const user = {
//     name: 'John',
//     address: {
//         city: 'New York',
//         country: 'USA',
//     },
// };
//
// const updatedUser = {
//    ...user,
//     address: {
//        ...user.address,city: 'Toronto'
//     }
// };
//
// console.log(updatedUser);


// 4

// const originalArray = [1, 2, 3, 4, 5];
//
// function addElementToArray(arr, element) {
//     return [...arr,element]
// }
//
// const newArray = addElementToArray(originalArray, 6);
//
// console.log(newArray);
// // Ожидаемый вывод: [1, 2, 3, 4, 5, 6]


// 5 Задачи для отработки деструктуризации

// const user = {name: 'John', age: 25, city: 'New York'};
// const name = user.name
// const age = user.age
// const city = user.city
//
//
// console.log(name);  // 'John'
// console.log(age);   // 25
// console.log(city);  // 'New York'


// 6

// const fruits = ['apple', 'banana', 'orange'];
//
// const secondFruit = fruits[1]
// const thirdFruit = fruits[2]
//
// console.log(secondFruit);  // 'banana'
// console.log(thirdFruit);   // 'orange'


// 7 Использовать деструктуризацию в параметрах функции

// const person = { name: 'Alice', age: 30 };
//
// // Деструктуризация в параметрах функции
// function printPersonDetails({name, age}) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }
//
// printPersonDetails(person);  // Вывод: Name: Alice, Age: 30


// 8 Установите значение по умолчанию для свойства year которого нет в объекте car

// const car = {brand: 'Toyota', model: 'Camry'};
//
// const brand = car.brand;
// const model = car.model;
// const year = car.year = 2022;
//
// console.log(brand);  // 'Toyota'
// console.log(model);  // 'Camry'
// console.log(year);   // 2022 (значение по умолчанию)

// 9 Извлечь значения из массива объектов

// const students = [
//     { name: 'Alex', grade: 'A' },
//     { name: 'Emma', grade: 'B' },
//     { name: 'Chris', grade: 'C' },
// ];
// const student1 = students[0].name
// const student3 = students[2].name
//
// console.log(student1);  // 'Alex'
// console.log(student3);  // 'Chris'

// 10 Установите значение по умолчанию для свойства age которого нет в объекте person
//  и переименовать переменные, чтобы достать значение с свойства firstName

const person = {firstName: 'Max', lastName: 'Johnson'};

// const firstName = 'first Name: Nina';
// const lastName = 'last Name: Ivanov';
//
// const { firstName: nameVariable, lastName: lastNameVariable, age = 25 } = person;
//
// console.log(nameVariable); // 'Max'
// console.log(lastNameVariable); // 'Johnson'
// console.log(age); // 25 (значение по умолчанию)


// --------------------------------------------------------- lesson 3 -------------------------------------------------------


// 1 Напишите функцию, которая получает подстроку из строки, начиная с определенного индекса

// function getSubStr(str, startIndex) {
//  return str.slice(startIndex)
// }
//
// console.log(getSubStr('Hello, world', 7))


// 2 Напишите функцию, которая возвращает последние n элементов массива


// function getLastElements(start, endIndex) {
//     return start.slice(-endIndex)
// }
//
// console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]


//3 Создайте функцию, которая извлекает часть пути URL-адреса, начиная с указанного индекса.

// function extractPath(url, startIndex) {
//     return url.slice(startIndex)
// }
//
// console.log(extractPath('https://example.com/blog/article', 19)); // Выведет: "/blog/article"


// 4  Напишите функцию, которая принимает массив и индекс элемента для удаления, а затем удаляет этот элемент из массива, модифицируя его

// function removeElement(arr, index) {
//     arr.splice(index, 1)
//     return arr
// }
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(removeElement(numbers, 2)); // Выведет: [1, 2, 4, 5]


// 5 Создайте функцию, которая принимает массив, индекс и новый элемент, а затем вставляет новый элемент в указанную позицию массива

// let numbers = [1, 2, 4, 5];
//
// function insertElement(arr, oldEl, newEl) {
//     arr.splice(oldEl, 0, newEl);
//     return arr;
// }
//
// console.log(insertElement(numbers, 2, 3)); // Выведет: [1, 2, 3, 4, 5]


// 6 Задачи на reduce: 1)	Напишите функцию, которая принимает массив чисел и использует метод reduce, чтобы вернуть сумму всех элементов в массиве

// let numbers = [1, 2, 3, 4, 5];
//
// function sumArray(arr) {
//     return arr.reduce((acc, cur) => {
//         return acc + cur;
//     }, 0)
// }
//
// console.log(sumArray(numbers)); // Выведет: 15


// 7 Создайте функцию, которая принимает массив строк и возвращает сумму их длин, используя метод reduce


// function sumStringLengths(strLength) {
//     return strLength.reduce((acc, curr) => acc + curr.length, 0);
// }
//
// console.log(sumStringLengths(['apple', 'banana', 'cherry'])); // Выведет: 17


// 8 Напишите функцию, которая принимает массив, содержащий вложенные массивы чисел, и возвращает сумму всех чисел в этих массивах

// function sumNestedArrays(arrNumbers) {
// return arrNumbers.reduce((acc, cur)=>{
//     // Выравниваем вложенные массивы в один массив
//     const flatArray = arrNumbers.flat();
//     // Суммируем все элементы массива
//     return flatArray.reduce((acc, cur) => acc + cur, 0);
// },0);
// }
//
// console.log(
//     sumNestedArrays([
//         [1, 2],
//         [3, 4, 5],
//         [6, 7, 8, 9],
//     ])
// ); // Выведет: 45


// 9 4)	Создайте функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы, используя метод reduce.


// const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
//
// function removeDuplicates(arr) {
//     return arr.reduce((acc, cur) => {
//         if (!acc.includes(cur)) {
//             acc.push(cur);
//         }
//         return acc;
//     }, []);
// }
//
// console.log(removeDuplicates(numbers)); // Выведет: [1, 2, 3, 4, 5, 6]


// 10 Найдите дубликаты в массиве с помощью метода reduce и верните массив дублированных элементов

// const array = [1, 2, 3, 2, 4, 5, 4, 5];
//
// function findDuplicates(arr) {
//     const counts = arr.reduce((acc, cur) => {
//         acc[cur] = (acc[cur] || 0) + 1;
//         return acc;
//     }, {});
//
//     return Object.keys(counts).filter(key => counts[key] > 1).map(Number);
// }
//
// const duplicatesArray = findDuplicates(array);
// console.log(duplicatesArray); // Output: [2, 4, 5]


// 11 Создайте функцию, которая принимает массив объектов и возвращает массив значений определенного свойства объектов

const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 22},
];

function getPropertyValues(arr, prop) {
    return arr.reduce((acc, obj) => {
        acc.push(obj[prop]);
        return acc;
    }, []);
}

const names = getPropertyValues(people, 'name');
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']






























































