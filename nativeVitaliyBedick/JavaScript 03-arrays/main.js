//1. Массивы, как проверить что это массив, способы создания массивов

//const arr = [100, 200, 300, 400]
// const array = new Array(5)


// const arr1 = {
//     0:100,
//     1:200,
//     2:300,
//     3:400,
// }

//2. Способы достучаться до элементов в массиве

// console.log(arr[0])
// console.log(arr[2])
// console.log(typeof arr)
// console.log(Array.isArray(arr))


//3. Свойство length

// console.log(arr.length)
// console.log(arr.length =2)
// console.log(arr[123])


// получи последний элемент массива с помощью length?
//console.log(arr[(arr.length - 1)])

// какой есть более современный метод для этого?
//console.log(arr.at(-1))

//4. ДП массивов, spread, rest
// что сидит в rest в объекте и в массиве?

// const a = [...arr]
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])

// const [num1,num2,num3,num4]=arr
// console.log(num1)

// const [,, ...rest] = arr
// console.log(...rest)

// Сравнение массивов

// const newArr = arr
// newArr[0]=100200
// console.log(newArr)


//5. Базовые операции с массивами (добавление, удаление)
// arr.push(500)
// console.log(arr)


//6. Итерация по массивам
// const developer1 = {
//     name: 'Max',
//     salary: 2000
// }
//
// const developer2 = {
//     name: 'Larisa',
//     salary: 4000
// }
// const allDevelopers = [{...developer1}, {...developer2}]
// console.log(allDevelopers)


const names = ['Max', 'Larisa', 'Andrey', 'Bogdan']
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i] + ' $1000')
// }

// for off -> для массивов
// for (let name of names) {
//     console.log(name)
// }

// const copyDeveloper1={}
// console.log(copyDeveloper1)
// for (const key in developer1) {
//  copyDeveloper1[key]=developer1[key]
// }
// console.log(copyDeveloper1)

//7. Методы массивов
/*
Вопросы которыми нужно задаваться при работе с методами массивов:
1. Для чего нужен метод?
2. Сколько параметром принимает и какие?
3. Что возвращает метод?
4. Изменяет ли данный метод исходный массив?
 */
// forEach, map, filter

// names.forEach((value, index, array) => {
//     console.log('value:', value)
//     console.log('index:', index)
//     console.log('array:', array)
//     console.log('-------------')
// })

// const upperFirstName = names.map((el) => {
//     return el[0].toUpperCase() + el.slice(1)
// })
// console.log(upperFirstName)


// const filteredNames = names.filter((el) => {
//     return el[0] === 'M'
// })
// console.log(filteredNames)



// reduce
// const resReduce = numbers.reduce(()=>{}, нач значение) - это что она принимает, а коллбек принимает 4 параметра
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.reduce((acc,value,index,array) => {
//     console.log('acc:',acc)
//     console.log('value:',value)
//     console.log('index:',index)
//     console.log('array:',array)
//     return acc + value
//     console.log('-------------')
// },0)
// console.log(res)

//8. Методы изменяющие исходный массив (мутирующие)
// push pop shift unshift reverse fill splice sort

// ---------------------- Задачи --------------------------- //


const characters = [
    {
        id: 1,
        name: 'Frodo Baggins',
        race: 'Hobbit',
        age: 51,
        home: 'Bag End',
        weapons: ['Sting', 'Mithril coat'],
        friends: [4, 5, 6],
    },
    {
        id: 2,
        name: 'Samwise Gamgee',
        race: 'Hobbit',
        age: 38,
        home: 'Hobbiton',
        weapons: ['Elven rope', 'Cooking skills'],
        friends: [1, 4, 5],
    },
    {
        id: 3,
        name: 'Gandalf',
        race: 'Maia',
        age: 'Unknown',
        home: 'Valinor',
        weapons: ['Staff', 'Sword Glamdring'],
        friends: [7, 8],
    },
    {
        id: 4,
        name: 'Merry Brandybuck',
        race: 'Hobbit',
        age: 37,
        home: 'Buckland',
        weapons: ['Barrow-blades'],
        friends: [1, 2, 5, 6],
    },
    {
        id: 5,
        name: 'Pippin Took',
        race: 'Hobbit',
        age: 29,
        home: 'Tookland',
        weapons: ['Barrow-blades'],
        friends: [1, 2, 4, 6],
    },
    {
        id: 6,
        name: 'Legolas',
        race: 'Elf',
        age: 2931,
        home: 'Woodland Realm',
        weapons: ['Bow and arrows', 'Elven knives'],
        friends: [1, 4, 5, 7, 8],
    },
    {
        id: 7,
        name: 'Gimli',
        race: 'Dwarf',
        age: 139,
        home: 'Lonely Mountain',
        weapons: ['Axe'],
        friends: [3, 6, 8],
    },
    {
        id: 8,
        name: 'Aragorn',
        race: 'Man',
        age: 87,
        home: 'Gondor',
        weapons: ['Sword Andúril', 'Bow and arrows'],
        friends: [3, 6, 7],
    },
    {
        id: 9,
        name: 'Gollum',
        race: 'Hobbit',
        age: 589,
        home: 'Caves beneath the Misty Mountains',
        weapons: ['Dagger'],
        friends: [],
    },
    {
        id: 10,
        name: 'Sauron',
        race: 'Maia',
        age: 'Unknown',
        home: 'Barad-dûr, Mordor',
        weapons: ['The One Ring', 'Mace'],
        friends: [],
    },
];

const saruman = {
    id: 11,
    name: 'Saruman',
    race: 'Maia',
    age: 'Unknown',
    home: 'Isengard',
    weapons: ['Staff'],
    friends: [4],
};

/*
1. Напишите функцию, которая принимает массив персонажей и выводит список имен персонажей.
 */
// const showCharacterName = characters.map(el=> {
//     return el.name
// })
// console.log(showCharacterName)



/*
2. Напишите функцию, которая принимает массив персонажей и выводит их всех в консоль.
Если возраст персонажа равен "Unknown", то вместо него выведите строку "Возраст неизвестен".
 */
// const checkCharacterAge = characters => {
//     characters.forEach(character => {
//         const age = character.age === 'Unknown' ? 'Возраст неизвестен' : character.age;
//         console.log(`Имя: ${character.name}, Возраст: ${age}, Раса: ${character.race}, Дом: ${character.home}`);
//     });
// }
//console.log(checkCharacterAge(characters))

/*
3.  Напишите функцию, которая будет добавлять нового персонажа в конец массива "characters" и возвращать обновленный массив.
Добавить нужно объект saruman
 */


// const addCharacter = (characters, newCharacter) => {
//     characters.push(newCharacter);
//     return characters;
// };
//
// console.log(addCharacter(characters, saruman));

/*
4. Напишите функцию, которая принимает массив персонажей и выводит в консоль имена персонажей, у которых нет друзей.
 */
// const checkCharacterFriends = characters => {
//     characters.forEach(character => {
//         if (character.friends.length === 0) {
//             console.log(character.name);
//         }
//     });
// };
//
// checkCharacterFriends(characters);



/*
5. Напишите функцию, которая принимает массив персонажей и выводит в консоль имена всех персонажей, которые не являются хоббитами.
 */
// const checkCharacterIsHobbit = characters => {
//     characters.forEach(characters=>{
//         if(characters.race !=='Hobbit'){
//             console.log(characters.name)
//         }
//     })
// }
// (checkCharacterIsHobbit(characters))

/*
6. Напишите функцию, которая принимает массив персонажей и выводит в консоль имена всех четных персонажей (id).
 */
// const checkCharacterIdIsEven = characters => {
//     characters.forEach(characters=>{
//         if(characters.id%2===0){
//             console.log(characters.name)
//         }
//     })
// };
// (checkCharacterIdIsEven(characters));

/*
7. Напишите функцию, которая принимает массив персонажей и проверяет, является ли он магом (имеет ли он в оружии "Staff").
Если да, выведите сообщение "Этот персонаж является магом". Если нет, выведите сообщение "Этот персонаж не является магом".
*/
// const checkCharacterIsWizard = characters => {
//     characters.forEach(character => {
//         if(character.weapons.includes('Staff')){
//             console.log("Этот персонаж является магом")
//         }else {
//             console.log("Этот персонаж не является магом" ) 
//         }
//     })
//    
// };
//  (checkCharacterIsWizard(characters))

/*
!*8!. Напишите функцию, которая принимает массив персонажей и меняет возраст персонажа "Sauron" на 100200 лет.
*/
// const changeSauronAge = characters => {
//     characters.forEach(character => {
//        if (character.name === 'Sauron'){
//             character.age = 100200
//        }
//     })
// };
// (changeSauronAge(characters))
// console.log(characters)

/*
!**9!. Напишите функцию, которая принимает массив персонажей и находит персонажа с наибольшим количеством друзей.
*/
const checkMaxFriends = characters => {
    characters.forEach(character => {
        if(character.friends){

        }
    })
};
(checkMaxFriends(characters))
console.log(characters)