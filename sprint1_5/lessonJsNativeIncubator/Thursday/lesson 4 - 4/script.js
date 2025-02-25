// __proto__, prototype

// class Car {
//     constructor(brand, color) {
//         this.brand = brand
//         this.color = color
//     }
//
//     startEngine() {
//         console.log(`${this.brand} is started`)
//     }
//
//     stopEngine = ()=> {
//         console.log(`${this.brand} is stop`)
//     }
// }
//
// const car1 = new Car('bmw', 'black')
// const car2 = new Car('bmw', 'black')
//
// // console.log(car1)
// //
// // console.log(car1 === car2) // false
// // console.log(car1.brand === car2.brand) // true
// // console.log(car1.startEngine === car2.startEngine) // true
// // console.log(car1.stopEngine === car2.stopEngine) // false
// //
// // car1.startEngine()
//
//
// console.log(car1.__proto__ === Car.prototype) //true
//
// const str1 = '123'
// const str2 = '123'
//
// console.log(str1 === str2) //true
// console.log(str1.__proto__ === String.prototype) //true
//
// // const s// __proto__, prototype
//
// class Car {
//     constructor(brand, color) {
//         this.brand = brand
//         this.color = color
//     }
//
//     startEngine() {
//         console.log(`${this.brand} is started`)
//     }
//
//     stopEngine = ()=> {
//         console.log(`${this.brand} is stop`)
//     }
// }

// console.log(car1)
//
// console.log(car1 === car2) // false
// console.log(car1.brand === car2.brand) // true
// console.log(car1.startEngine === car2.startEngine) // true
// console.log(car1.stopEngine === car2.stopEngine) // false
//
// car1.startEngine()


// console.log(car1.__proto__ === Car.prototype) //true
//
// const str1 = '123'
// const str2 = '123'
//
// console.log(str1 === str2) //true
// console.log(str1.__proto__ === String.prototype) //true
//
// const str3 = String('123')
//
// console.log(str3.__proto__ === String.protostype)
//
//
// const a = 5
// const b = new Number(5)
//
// //свойство prototype есть только у функиции конструктора или класа
// //свойство __proto__ есть у каждого объекта
// console.log(a.__proto__ === Number.prototype)
// console.log(b.__proto__ === Number.prototype)
//
//
// console.log(a.__proto__ === b.__proto__) //true

// const obj = {
//     name: 'Artem'
// }
//
// console.log(obj.__proto__ === Object.prototype) //true
// console.log(car1.__proto__ === Car.prototype) //true
// console.log(Car.prototype.__proto__ === Object.prototype ) //true
//
//
// console.log(car1.__proto__.__proto__ === Object.prototype) //true
//
//
// const arr = []
// const arr2 = new Array()
//
// console.log(arr.__proto__ === Array.prototype) //true

// const foo = () => {}
// function a() {}
//
// const b = function (){}
//
// console.log(foo.__proto__ === Function.prototype) //true
// console.log(a.__proto__ === Function.prototype) //true
// console.log(b.__proto__ === Function.prototype) //true
//
// console.log(foo.__proto__ === a.__proto__) //true
//
// console.log(Function.prototype.__proto__ === Object.prototype) //true
//
//
// console.log(Car.__proto__ === Function.prototype )//true
// console.log(String.__proto__ === Function.prototype) //true
// console.log(Number.__proto__ === Function.prototype) //true
// console.log(Array.__proto__ === Function.prototype) //true
// console.log(Object.__proto__=== Function.prototype)
//
// console.log(Function.__proto__ ===  Function.prototype) //true
//
// console.log(Car.__proto__ !== Car.prototype)
//
// console.log(Car.__proto__  === Function.prototype)
// console.log(Car.prototype.__proto__  === Object.prototype)
// console.log(Function.prototype.__proto__  === Object.prototype)



//
// const car1 = new Car("bmw", 200);
// const car2 = new Car("bmw", 200);
//
// console.log(car1.__proto__ ===  Car.prototype);
// console.log(car1.__proto__.__proto__ === Object.prototype);
// console.log(car1.__proto__.__proto__.__proto__ === null);


// class Car {
//     constructor(brand, color, speed) {
//         this.brand = brand;
//     }
//     startEngine() {
//         console.log(`${this.brand} is started`);
//     }
//     static compareCars(car1, car2) {
//         car1.speed > car2.speed
//             ? console.log(`${car1.brand} is faster`)
//             : console.log(`${car2.brand} is faster`);
//     }
// }
//
// class SuperCar extends Car {
//     constructor(brand, canFly) {
//         super(brand); // {}
//         this.canFly = canFly;
//     }
//     fly() {
//         console.log(`${this.brandForSuperCar} is flying`);
//     }
// }
//
// const superCar1 = new SuperCar("superBmw", 300);
//
// console.log(superCar1.__proto__ ===  SuperCar.prototype); //true
// console.log(superCar1.__proto__.__proto__ === Car.prototype); //true
// console.log(superCar1.__proto__.__proto__.__proto__ === Object.prototype); //true
// console.log(superCar1.__proto__.__proto__.__proto__.__proto__ === null); //true



function CarCreator(brand,speed) {
    this.brand = brand
    this.speed = speed
}

CarCreator.prototype.startEngine = function (){
        console.log(`${this.brand} is started`);
    }
    CarCreator.compareCars =  function (car1, car2) {
        car1.speed > car2.speed
            ? console.log(`${car1.brand} is faster`)
            : console.log(`${car2.brand} is faster`);
    }


// const car1 = new CarCreator('bmw', 'red')

function SuperCarCreator(brand, speed, isFly) {
    CarCreator.call(this, brand, speed)
    this.isFly = isFly
}

SuperCarCreator.prototype.fly = function (){
    console.log(`${this.brand} is flying`);
}

const superCar1 = new SuperCarCreator('super_bmw', 200, true)
const superCar2 = new SuperCarCreator('super_bmw2', 300, true)
//
// console.log(superCar1.__proto__ === SuperCarCreator.prototype) //true
// console.log(SuperCarCreator.prototype.__proto__  === Object.prototype) //true
//
// SuperCarCreator.prototype.__proto__ = CarCreator.prototype
Object.setPrototypeOf(SuperCarCreator.prototype, CarCreator.prototype)
//
// console.log(SuperCarCreator.prototype.__proto__  === Object.prototype) //false
//
superCar1.startEngine()
//
// console.log(SuperCarCreator.__proto__  === Function.prototype) //true

// SuperCarCreator.__proto__ = CarCreator
Object.setPrototypeOf(SuperCarCreator, CarCreator)
SuperCarCreator.compareCars(superCar1, superCar2)



