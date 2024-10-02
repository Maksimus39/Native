// Статическое свойство

// let obj = {
//     name: 'Bob',      //  это статическое свойство
//     age: 55          // это статическое свойство
// }
//
// console.log('obj', obj)  //   obj { name: 'Bob', age: 55 }

// ------------------------------------------------------------------------------

// function createObj(key, value) {
//     let newObj = {}
//     newObj[key] = value;
//     return newObj;
// }
//
// console.log(createObj('car', 'BMW'))    // { car: 'BMW' }


// function createObj2(key,value) {
//     return{
//         [key]:value
//     }
// }
//
// console.log(createObj2('car','Audi'))  //  { car: 'Audi' }  ВЫЧИСЛЯЕМОЕ ДИНАМИЧЕСКИ


// {
//     [вычисляемое свойство]:значение
// }


// 1

// let propertyName = '_status'
//
// const obj1={
//     name:'John',                // Статическое свойство
//     [propertyName]:'checked'    // Динамическое свойство
// }
//
// console.log('obj1 ',obj1)

// 2

// let prefix = 'status_'
// const obj2 = {
//     age: 25,                                     // Статическое свойство
//     [prefix + 'id']: 'new member'                // Динамическое свойство
// }
//
// console.log(obj2)   // { age: 25, status_id: 'new member' }

// 3

// let index = 2
// let obj = {
//     [index + 2]:4
// }
// console.log(obj) // { '4': 4 }

// 4
// let index = 2
// let testProperty = 'test'
//
// let obj = {
//     [index + 2]:4,
//     [testProperty.toUpperCase()]:'test key in upper case'
// }
// console.log(obj) // { '4': 4, TEST: 'test key in upper case' }


// ------------------------------------ Практическое применение ------------------------------

// const STATUS_BUSY = 'busy';
// const STATUS_READY = 'ready';
//
// const STATUS_LABELS = {
//     [STATUS_BUSY]: 'ожидает',
//     [STATUS_READY]: 'готово'
// }
//
// const drivers = [
//     {name: 'Pavel', status: 'busy'},
//     {name: 'Anna', status: 'ready'},
//     {name: 'Kiryll', status: 'busy'}
// ]
//
// const driversStatuses = drivers.map(driver => {
//     const {status} = driver;
//     return STATUS_LABELS[status]
// })
//
// console.log(driversStatuses) // [ 'ожидает', 'готово', 'ожидает' ]


// object.keys() - возвращает массив ключей  ------------------------------------------

// const drivers =  {name: 'Pavel', status: 'busy'}
//
// const result = Object.keys(drivers)
// console.log(result) //  [ 'name', 'status' ]

// !!!!!

// const drivers = {name: 'Pavel', status: 'busy', coutry: {id: 1}}
//
// const result1 = Object.keys(drivers)
// console.log(result1)


// Object values() - возвращает массив значений -----------------------------------------

// const drivers =  {name: 'Pavel', status: 'busy'}
//
// const result = Object.values(drivers)
// console.log(result)  // [ 'Pavel', 'busy' ]

// !!!!

// const drivers = {name: 'Pavel', status: 'busy', coutry: {id: 1}}
//
// const result = Object.values(drivers)
// console.log(result)  // [ 'Pavel', 'busy', { id: 1 } ]


//Object.entries() - возвращает массив пар [ключ , значение ] -----------------------------------

// const drivers =  {name: 'Pavel', status: 'busy'}
//
// const result = Object.entries(drivers)
// console.log(result)  // [ [ 'name', 'Pavel' ], [ 'status''busy' ] ]

// !!!!!!!!

// const drivers = {name: 'Pavel', status: 'busy', coutry: {id: 1}}
//
//  const result = Object.entries(drivers)
//
// console.log(result) // [ [ 'name', 'Pavel' ], [ 'status', 'busy' ], [ 'coutry', { id: 1 } ] ]

// --------------------------------------------------------------------------------------------------
// new Map, new set

// new Map () - это коллекция ключ/значение

//let map = new Map();

// console.log('map : ',map)  // map :  Map(0) {}

// map.set('1', 'first value number')
// map.set(1, 'number')
// map.set(true, 'boolean value')
// map.set([], 'array')
// map.set({}, 'object')

// console.log(map)

// Map(5) {
//     '1' => 'first value number',
//         1 => 'number',
//         true => 'boolean value',
//         [] => 'array',
//         {} => 'object'
// }


// --------------------------------------------------------------------------------------------------------

// let map = new Map();
//
// map.set('1', 'first value number')
// map.set(1, 'number')
// map.set(true, 'boolean value')
// map.set([], 'array')
// map.set({}, 'object')
//
// console.log(map.get('1'))    // first value number
// console.log(map.get(true))  // boolean value
//
// map.clear()
// //console.log(map)  // Map(0) {}
//
//
// map.set('1','one')
// map.set('2','two')
//
// map.delete('2')
//
// console.log(map)           // Map(1) { '1' => 'one' }
// console.log(map.size)      // 1


// --------------------------------------------------------------------------------------------------------

// new Set() - особый вид коллекции ( множество без ключей). Все значения уникальные

// let set = new Set();
//
// console.log(set)            // Set(0) {}
//
// set.add('value1')
// set.add('value2')
// set.add('value1')
//
// //console.log('set :', set)   // set : Set(2) { 'value1', 'value2' }
//
// set.delete('value1')
// console.log('set after deleting:', set)      // set after deleting: Set(1) { 'value2' }
//
//
// set.has('value1')
// console.log('is it here?:', set.has('value1'))   // is it here?: false
// console.log('is it here?:', set.has('value2'))   // is it here?: true
//
//
// set.clear()
// console.log('set:',set)                               // set: Set(0) {}


// ---------------------------------------------------------------------------------------------------

// let set = new Set(['value1', 'value2', 3, 4]);
// console.log(set)   // Set(4) { 'value1', 'value2', 3, 4 }
//
// // ------------------------------------

let numbers = [1, 1, 1, 3, 4, 5, 6, 76, 7, 8, 9, 0, 6]

// let uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers)  // Set(10) { 1, 3, 4, 5, 6, 76, 7, 8, 9, 0 }

// let newArr = [...uniqueNumbers]
// console.log(newArr)         // [1, 3, 4, 5, 6, 76, 7, 8, 9, 0]

// or
let result = [...new Set(numbers)]
console.log(result)    // // [1, 3, 4, 5, 6, 76, 7, 8, 9, 0]













