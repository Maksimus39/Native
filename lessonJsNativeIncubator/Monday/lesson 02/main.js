//  push(), pop(), shift(), unshift() - это мутирующие методы массива

// push()

// const names = ['Alex', 'Bob','Ivan','Sasha']
// const result = names.push('New name1', 'New name2')
//
// console.log('names', names) // names ['Alex', 'Bob','Ivan','Sasha', 'New name1', 'New name2']
// console.log(result) // result 6


// pop() удаляет последний элемент массива

// const names = ['Alex', 'Bob','Ivan','Sasha']
// const poppedResult = names.pop()
//
// console.log('names: ', names ) //  names: [ 'Alex', 'Bob', 'Ivan' ]
// console.log(poppedResult)      //  poppedResult: Sasha


// shift() - удаляет первый элемент массива

// const names = ['Alex', 'Bob','Ivan','Sasha']
// const shiftedResult = names.shift()
//
// console.log('names: ', names)
// console.log('shiftedResult: ', shiftedResult)


// unshift() - добавляет в начало массива элементы

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const unshiftedResult = names.unshift('New names1', 'New names2')
//
// console.log('names: ', names) // names:  [ 'New names1', 'New names2', 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('unshiftedResult: ', unshiftedResult) // unshiftedResult: 6


// reverse() - мутирующий

// const arr = [1, 2, 3, 4, 5];
// arr.reverse()
// console.log('reverseArr: ', arr)


// split() - метод для работы со строками

// 1

// const str = 'ab-cd-ef'
// const result = str.split('-')
// console.log('result:', result)

// 2

// const str = 'ab-cd-ef'
// const result = str.split('-', 2)
// console.log('result: ', result)

// 3

// const str = 'ab-cd-ef'
// const result = str.split('')
// //const result = str.split('').reverse()
// console.log('result:', result)

//4

// const str = 'ab-cd-ef'
// const res = str.split()
// console.log('res:', res)


// join() метод массива

// 1

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const joinResult = names.join('-')
// console.log('joinResult: ',joinResult)

// 2

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const joinResult = names.join()
// console.log('joinResult: ', joinResult)

// 3

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const joinResult = names.join('')
// console.log('joinResult: ', joinResult)

// 4

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const joinResult = names.join(' ')
// console.log('joinResult: ', joinResult)

// 5

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const joinResult = names.join('\n')
// console.log('joinResult: ', joinResult)

// 6

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const joinResult = names.join(' ,')
// console.log('joinResult: ', joinResult)


// popular task

// const telephoneNumber = '123456789'
// const res = telephoneNumber.split('').reverse().join(' ')
// console.log(res)


// concat - объединение массивов и не мутирует исходник

// 1
// const arr = [1, 2]
// const arr2 = [3, 4]
// const arr3 = [5, 6]
//
// const resArr = arr.concat(arr2,arr3)
//
// console.log('resArr:',resArr) // resArr: [ 1, 2, 3, 4, 5, 6 ]

// 2
// const arr1 = [1, 2]
// const arr2 = [3, 4]
//
// const nestedArr = [
//     [5, 6],
//     [7, 8]
// ]
//
// const result = arr1.concat(arr2,nestedArr)
// console.log('result', result)


// flat() - позволяет убрать вложенности

// const nestedArr = [
//     [5, 6],
//     [7, 8]
// ]
//
// const flatRes = nestedArr.flat() // infinity - уберёт все вложенности
// console.log('flatRes:',flatRes)


// forEach()

// arr.forEach(function( el , index, arr)=>{
//
// )

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function (el) {
//     sum += el // sum = sum + el
//
// })
// console.log('sum:', sum)


// indexOff

// const arr = [1, 2, 3, 4, 5];
// const res = arr.indexOf(3)
// // const res = arr.indexOf(6) // -1
// console.log('res:', res)


// lastIndexOff()

// const arr = [1, 2, 3, 4, 5];
// const res = arr.lastIndexOf(5)
// console.log(res)


// find()

// 1
// const strArr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const res = strArr.find((el)=>{
//     return el.length === 6
// })
// console.log(res)


// 2
// const arr = [1, 2, 3, 4, 5];
// const res = arr.find((el)=>{
//     return el%2 === 1
// })
//
// console.log('res', res)


// 3
// const arr = [1, 2, 3, 4, 5];
// const res = arr.find((el)=>{
//     return el === 6
// })
//
// console.log('res', res)


// includes() - просто ищет элемент

// const num = [1, 2, 3, 4, 5];
// const res = num.includes(3)
// console.log(res)


// filter()

// const strArr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const res = strArr.filter((str)=>{
//    return str.length <= 9
// })
// console.log('res: ',res)

// sort()

// 1 может сортировать без доп параметров unicode

// const names = ['Alex', '!alex', 'alex', 'Виктор', 'Dimych', 'Valera', 'Igor', 'Ignat']
// console.log(names.sort())


// 2 мутирует исходный массив

// const numbers = [1, 4, 7, 3, 9, 0, 22, 65, 36, 73, 890, 345, 578];
// console.log(numbers.sort())

// 3

// по возрастанию

// const numbers = [1, 4, 7, 3, 9, 0, 22, 65, 36, 73, 890, 345, 578];
// console.log(numbers.sort((a, b) => a - b));

// по убыванию

// const numbers = [1, 4, 7, 3, 9, 0, 22, 65, 36, 73, 890, 345, 578];
// console.log(numbers.sort((a, b) => b - a));


// strings
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true
//     },
//     {
//         id: 3,
//         name: 'alex',
//         isStudent: true
//     }
// ]
//
// console.log(users.sort((a, b) => a.name.localeCompare(b.name)));


// toSorted()  -- иммутабельно

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: true
//     }
// ]

// const res = users.map((us)=>us.name)
// console.log('res: ', res)


// polifile

// function newMap(arr, callback) {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result
// }
//
// const result = newMap(users, (user)=>user.name)
// console.log(result)












