// this

// Global scope
// Function | arrow func | simple func
// .call  .apply  .bind
// Function constructor


// ------------------------------------
// Global scope

// 'use strict';
//
// console.log(this)
//
// console.log(this === global)


// ------------------------------

// Function | arrow func | simple fun

// 'use strict';
//
// const baz = () => {
//     const foo = () => {
//         console.log(this)
//     }
//     foo()
// }
// baz()


// -------------------------------
// 'use strict';


// function foo() {
//     console.log(this)
// }
// foo()

// function bar() {
//     console.log(this)
// }

// let car = {
//     brand: 'bmw',
//     showBrand() {
//         console.log(this.brand)
//     },
//     stopEngine() {
//         // const bar = () => {
//         //     console.log(this)
//         // }
//         function bar() {
//             console.log(this)
//         }
//         bar()
//     }
// }
//
//
// car.stopEngine()


//
// const newCar = car
// car = null
// newCar.showBrand()  // bmw


// function showBrand() {
//     console.log(this.brand)
// }
//
// const car1 = {
//     brand: 'bmw'
// }
//
// const car2 = {
//     brand: 'kia'
// }
//
// car1.f = showBrand
// car2.f = showBrand
//
// car1.f()
// car2.f()


// --------------------------------
// 3

// const car = {
//     speed: 200,
//     showMaxSpeed(a, b) {
//         console.log(this.speed)
//     }
// }
//
// const scooter = {
//     speed: 60
// }
//
// // // call
// // car.showMaxSpeed.call(scooter, 10, 20)
// //
// // // apply
// // car.showMaxSpeed.apply(scooter, [20, 10])
// //
// // // bind
// // car.showMaxSpeed.bind(scooter, 20, 10)()
// // const foo = car.showMaxSpeed.bind(scooter, 20, 10)
// // foo()
//
// setTimeout(() => car.showMaxSpeed(), 2000)
// setTimeout( car.showMaxSpeed.bind(car), 2000)


// ----------------------------------------------

// const car = {
//     speed: 200,
//     showMaxSpeed(a, b) {
//         console.log(this.speed)
//     }
// }
//
// const scooter = {
//     speed: 60,
// }
//
// const ferrari = {
//     speed: 350
// }
//
// car.showMaxSpeed.bind(scooter)() // 60


//--------------------------------------------------

// function Car(speed, brand) {
//     // {}
//     this.speed = speed  // {speed: 200}
//     this.brand = brand  // {speed: 200, brand: 'bmw'}
//     // return {speed: 200, brand: 'bmw'}
// }
//
// const bmw = new Car(200, 'bmw')
// const kia = new Car(200, 'kia')
//
// console.log(bmw)
// console.log(kia)
//
//
// // ---------------------------
//
// function foo() {}
//
// console.log(new foo())


// -----------------------------------------------

function foo() {
    // this -> window
    const x = 10

    return {
        x: 20,
        bar: () => {
            console.log(this.x)
        },
        baz: function () {
            console.log(this.x)
        }
    }
}


// const obj1 = foo()
// obj1.bar()
// obj1.baz()


const obj2 = foo.call({x: 30})

// obj2.bar()  // 30
// obj2.baz()  // 20

let y = obj2.bar
let z = obj2.baz

y() // 30
z() // undefined


