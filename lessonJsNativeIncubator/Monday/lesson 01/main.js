// примитивы
//


// ссылочные
// object, array, function

// Особенности ссылочных типов данных

// Более сложная структура
// Имеют свойства и методы
// Ссылочный тип

// const users1 = {
//     // 123456
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
// }
// // прямое копирование
// users2a = users1
// console.log(users1 === users2a)
//
// // так делали раньше
// const users2 = {
//     id: users1.id,
//     name: users1.name,
//     isStudent: users1.isStudent,
// }
//
// console.log(users1 === users2)  // true

// const a = []
// const b = a
// console.log(a === b)

// spread operator
// const users1 = {
//     // 123456
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
// }
// const users2 = {...users1}  // #444
// console.log('users2 :', users2)
// console.log(users2 === users1) // false это разные объекты

// const users = [
//     {
//         id: 1,
//         name: "Johan",
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: "Anna",
//         isStudent: false,
//     },
//     {
//         id: 3,
//         name: "Peter",
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: "Maria",
//         isStudent: false,
//     }
// ];

// const result1 = [...users].pop()
// console.log('users: ', users)

// const superUser = {
//     id: 1,
//     name: "Admin",
//     role: "superuser",
//     permissions: {
//         canEdit: true,
//         canDelete: true,
//         canCreate: true,
//     },
//     profile: {
//         email: "admin@example.com",
//         phone: "+1234567890",
//         address: {
//             street: "123 Admin St",
//             city: "Admin City",
//             country: "Adminland",
//         },
//     },
//     settings: {
//         theme: "dark",
//         notifications: {
//             email: true,
//             sms: false,
//         },
//     },
// };

// const superUserCopy = {...superUser}
// superUserCopy.profile.address.city = 'Moscow'
// console.log(superUser.profile.address.city)
// console.log(superUserCopy.profile.address.city)
// console.log(superUser.profile.address.city === superUserCopy.profile.address.city)
//
// // правильная копия глубокая
// const superUserCopy2 = {
//     ...superUser,
//     profile: {...superUser.profile, address: {...superUser.profile.address, city: 'Minsk'}}
// }
// console.log(superUserCopy2.profile.address.city) // город изменён
// console.log(superUser.profile.address.city)      // город исходный


// const superUser = {
//     id: 1,
//     name: "Admin",
//     role: "superuser",
//     permissions: {
//         canEdit: true,
//         canDelete: true,
//         canCreate: true,
//     },
//     profile: {
//         email: "admin@example.com",
//         phone: "+1234567890",
//         address: {
//             street: "123 Admin St",
//             city: "Admin City",
//             country: "Adminland",
//         },
//     },
//     settings: {
//         theme: "dark",
//         notifications: {
//             email: true,
//             sms: false,
//         },
//     },
// };

// const structuredCloneCopy = structuredClone(superUser)
// structuredCloneCopy.profile.address.country = 'Lipetck'
// console.log(superUser)
// console.log(structuredCloneCopy)
// console.log(superUser === structuredCloneCopy)


// деструктуризация
const employee = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    middleName: 'Ivanovich'
}
