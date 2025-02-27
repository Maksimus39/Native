// test object

const man = {
    name: 'Max',
    age: 41,
    location: {
        city: 'Dirt',
        home: 14,
        apartment: 14
    }
}

console.log(man.location.apartment)
console.log(man['location']['city'])
console.log(man['location']['home'])

// test object_2

let arrayAss = {
    '0': 'Max',
    '1': 'Larisa',
    '2': 'Andrey',
    '3': 'Bogdan'
}

console.log(arrayAss['3'])
console.log(arrayAss['4'] = 'Dog')
console.log(arrayAss)

console.log(arrayAss['privet cac dela'] = 'Хорошо!')
console.log(arrayAss)

console.log(Object.keys(arrayAss))
console.log(Object.values(arrayAss))


// test object_3

const testObj_3 = {
    '1': {id: '1', name: 'Max'},
    '2': {id: '2', name: 'Larisa'},
    '3': {id: '3', name: 'Andrey'},
    '4': {id: '4', name: 'Bogdan'},
}

console.log(testObj_3['1'])
console.log(testObj_3['3'].name)
console.log(testObj_3['5'] = {id: '5', name: 'Dog Red'})
console.log(testObj_3)


const useR = {id: '6', name: 'cat Cis_Cis'}
console.log(testObj_3[useR.id] = useR)
console.log(testObj_3)

