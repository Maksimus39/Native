// //примитивы
// //string, number, boolean, null, undefined, symbol, BigInt
//
// //ссылочные типы данных
// //object, array, function  /class,  map, set
//
// const user = {} //литерал объекта
//
// // let person = new Object();
// // person.name = 'John';
// // person.age = 30
// // console.log("person age:", person)
//
// const user1 = { // в переменной у нас хранится ссылка на объект
//     name: "Bob",
//     age: 32,
//     isStudent: false
// }
// console.log(user1)
//
// const user2=user1
// user2.name = 'Alex'
// console.log(user1.name)
// console.log(user1)
// console.log(user1 === user2)
//
//
// const user1Copy = {
//     name: user1.name,
//     age:user1.age,
//     isStudent: user1.isStudent
// }
//
// console.log(user1 === user1Copy)
//
// const user2Copy = {...user1}
// user2Copy.name = 'Alex'
// console.log(user1 === user2Copy)

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
//         isStudent: true,
//     },
// ]
// console.log(users)
// users.pop()
// console.log(users)

// const newArr = [...users]
// console.log(newArr)
// const usersCopy = [...users].pop()
// console.log(usersCopy)


const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232',
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
    },
}

const user1Copy = { ...superUser }
user1Copy.address.city = 'London'
console.log('userCopy', user1Copy.address.city) //London
console.log('superUser', superUser.address.city) //London
















