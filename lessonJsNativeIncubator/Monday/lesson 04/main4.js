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

const STATUS_BUSY = 'busy';
const STATUS_READY = 'ready';

const STATUS_LABELS = {
    [STATUS_BUSY]: 'ожидает',
    [STATUS_READY]: 'готово'
}

const drivers = [
    {name: 'Pavel', status: 'busy'},
    {name: 'Anna', status: 'ready'},
    {name: 'Kiryll', status: 'busy'}
]

const driversStatuses = drivers.map(driver => {
    const {status} = driver;
    return STATUS_LABELS[status]
})

console.log(driversStatuses) // [ 'ожидает', 'готово', 'ожидает' ]









