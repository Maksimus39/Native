"use strict";
// 1

// let name = "John"
//
// function saHi() {
//     console.log("HI " + name)
// }
//
// name = "Pete" // что будет показано: "John" или "Pete"
//
// saHi() // Hi Pete


// 2

// function makeWorker() {
//     let name = "Pete"
//
//     return function () {
//         console.log(name)
//     }
// }
//
// let name = "John"
//
// let work = makeWorker()
// work() // "Pete"


// 3

// function maceCounter() {
//     let count = 0
//
//     return function () {
//         return count++;
//     }
// }
//
// let counter = maceCounter();
// let counter2 = maceCounter();
//
// console.log(counter())   // 0
// console.log(counter()) // 1
//
// console.log(counter2())   // ? - 0
// console.log(counter2()) // ? - 1


// 4

// function Counter() {
//     let count = 0;
//
//     this.up = function() {
//         return ++count;
//     }
//     this.down = function() {
//         return --count;
//     }
// }
//
// let counter = new Counter();
//
// console.log(counter.up()); // 1
// console.log(counter.up()); // 2
// console.log(counter.down()); // 1


// 5

// let phrase = "Hello"
//
// if (true) {
//     let user = "John"
// }
//
// function sayHi() {
//     console.log(`${phrase} , $${user}`)
// }
//
// sayHi() // ошибка


// 6

// function sum(a) {
//     return function (b) {
//         return a + b;
//     }
// }
//
// console.log(sum(1)(2))


// 7

// let x = 1
//
// function func() {
//     console.log(x)
//     x = 2
// }
// func()

// 8




