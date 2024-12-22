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

const car = {
    speed: 200,
    showMaxSpeed(a, b) {
        console.log(this.speed)
    }
}

const scooter = {
    speed: 60
}

// // call
// car.showMaxSpeed.call(scooter, 10, 20)
//
// // apply
// car.showMaxSpeed.apply(scooter, [20, 10])
//
// // bind 
// car.showMaxSpeed.bind(scooter, 20, 10)()
// const foo = car.showMaxSpeed.bind(scooter, 20, 10)
// foo()

setTimeout(()=>car.showMaxSpeed(),2000)










