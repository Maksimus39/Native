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

// 1
// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich'
// }

// const firstName = employee.firstName
// console.log(firstName)

// const {firstName, lastName} = employee

// 2

// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich'
// }
//
// const firstName = 'Nina'
// const {firstName: name, lastName} = employee
//
// console.log(firstName)
// console.log(name)

// 3

// const user = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     //role: 'admin'
// }
//
// const {middleName,role = 'welcome user'} = user
// console.log('role ', role)

// const user = {
//     firstName: undefined,
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     role: 'admin'
// }

// const {middleName,role = 'welcome user'} = user
// console.log('role ', role)
// const {firstName = 'Max'} = user
// console.log(user.firstName)
// console.log('firstName:', firstName)


// 4

// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello World',
//     permission: {
//         canEdit: true,
//         canDelete: false,
//         role: 'user'
//     }
// }
// const {firstName, permission: {canDelete, canEdit}} = employee
// console.log('canDelete :', canDelete)
// console.log('canEdit :', canEdit)


// 5 array

// const colors = ['red', 'blue', 'green', 'white', 'black'];
//
// // const firsName = colors[0]
// // console.log(firsName)
//
// const [firstElement, secondElement, greenColor] = colors // работает по индексам
// console.log(firstElement)  // red
// console.log(secondElement) // blue
// console.log(greenColor)  // green

// const colors = ['red', 'blue', 'green', 'white', 'black'];
//
// const [firstValue,secondValue, ,whiteValue] = colors // знаком запятая ( , ) мы пропускаем индекс массива
// console.log(secondValue)
// console.log(whiteValue)

// 6

// const colors = ['red', ['first value', 'second value'], 'green', 'white', 'black'];
//
// const [firstValue, [nestedValue1, nestedValue2], thirdValue, ,blackValue] = colors
// console.log(firstValue)
// console.log(nestedValue1)
// console.log(nestedValue2)
// console.log(thirdValue)
// console.log(blackValue)


// 7

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//
// function Hello([firstValue, ...rest]) {
//     console.log('firstValue: ', firstValue);
//     console.log('...rest: ', rest)
// }
//
// Hello(arr)


