// 1

const arr = ['Maksim', 'Larisa', 'Andrey', 'Bogdan']

const [a, b, c, d] = arr

console.log(a)
console.log(b)
console.log(c)
console.log(d)


// 2

const ugdt = ['tem9', 'tgm6d']

const tz1 = ugdt[0]
const tz2 = ugdt[1]

console.log("tz1", tz1)
console.log("tz2", tz2)

// 3

const family = {
    dad: 'Maksim',
    mom: 'Larisa',
    eldestSon: 'Andrey',
    youngestSon: 'Bogdan',
}

const {dad, mom, eldestSon, youngestSon} = family

console.log("dad:", dad)
console.log("mom:", mom)
console.log("eldestSon:", eldestSon)
console.log("youngestSon:", youngestSon)

const ugdt2 = {
    TEM: "ТЭМ-9",
    TGM: "ТГМ-6Д",
    TGM2: "ТГМ-:6А"
}

const {TEM, ...restObj} = ugdt2

console.log("TEM:", TEM)
console.log(restObj.TGM)
console.log(restObj.TGM2)

// Задача

let user = {
    name: "John",
    years: 30
};

const {name, years, isAdmin = false} = user;

console.log(name)
console.log(years)
console.log(isAdmin)




