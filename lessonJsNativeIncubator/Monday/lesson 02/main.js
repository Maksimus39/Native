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

const telephoneNumber = '123456789'
const res = telephoneNumber.split('').reverse().join(' ')
console.log(res)









