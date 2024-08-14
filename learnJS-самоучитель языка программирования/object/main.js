let userAge = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
};

console.log(userAge.name)
console.log(userAge.age)
userAge.isAdmin = true;
console.log(userAge)
console.log(userAge.isAdmin)
delete userAge.name
console.log(userAge)
userAge['likes birds'] = true
console.log(userAge)

const user = {
    name: "John",
}
user.name = "Max"
console.log(user)

const us = {}
us['likes birds'] = true
console.log(us)