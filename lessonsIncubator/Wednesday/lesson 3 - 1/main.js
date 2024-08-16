// globalLE

// const globalLE = {
// 	environmentRecords: {car: 'bmw'},
// 	outer: null
// }

// ---------------------------

// // globalLE {} --> null

// let car = "bmw"; // globalLE {car: 'bmw'} --> null

// function startEngine() {
// 	// startEngineLE {} --> globalLE
// 	// const car = 'toyota'
// 	const foo = () => {
// 		// {} --> startEngineLE
// 		console.log(`Start ${car}`);
// 	}
// 	foo()
//   console.log(`Start ${car}`);
// } // globalLE {car: 'bmw'; startEngine: func} --> null

// // car = "audi"; // globalLE {car: 'audi'; startEngine: func} --> null

// startEngine(); //

//------------------------------

// globalLE {startEngine: func, car2: undefined} --> null

// startEngine(); //

// let car1 = "bmw";
// var car2 = "kia";

// function startEngine() {
// 	// startEngineLE {}
//   console.log(`Start ${car2}`);
// 	var foo
// }

// // for() {
// // 	var bar
// // }

// const stopEngine = () => {};
// stopEngine()

// ---------------------------

// globalLE {startEngine: func, car2: undefiner} --> null

// startEngine();

// let car1 = "bmw"; // globalLE {startEngine: func, car2: undefiner, car1: 'bmw' } --> null
// // startEngine();
// var car2 = "kia"; // globalLE {startEngine: func, car2: 'kia', car1: 'bmw' } --> null

// // stopEngine()

// function startEngine() {
//   // startEngineLE{} --> globalLE
//   // const car = 'toyota'
//   console.log(`Start ${car1}`);
// } // globalLE {car: 'bmw'; startEngine: func} --> null

// const stopEngine = function () {}; // globalLE {startEngine: func, car2: 'kia', car1: 'bmw', stopEngine: func } --> null

// car1 = "audi"; // globalLE {startEngine: func, car2: 'kia', car1: 'audi', stopEngine: func } --> null

// startEngine(); //
// startEngine(); //
// stopEngine();

// ---------------------------

// globalLE {} --> null
// let count = 0;
// const couterCreator = () => {
//   // couterCreatorLE1 {} --> globalLE
//   // couterCreatorLE2 {} --> globalLE
//   // let count = 0;

//   return () => {
//     // {count: 1} --> couterCreatorLE1
//     // {count: 1} --> couterCreatorLE1
//     // {} --> couterCreatorLE1

//     // {} --> couterCreatorLE2
//     // {} --> couterCreatorLE2
//     // {} --> couterCreatorLE2
// 		// let count = 0;
//     console.log(++count);
//   };
// };

// const counter1 = couterCreator(); // globalLE {counter: func} --> null
// const counter2 = couterCreator(); // globalLE {counter: func} --> null

// counter1();
// counter1();
// counter1();

// counter2();
// counter2();
// counter2();

// ---------------------------

// // 2(4) --> 2 * 2(3) --> 2 * 2 * 2(2) --> 2 * 2 * 2 * 2(1)

// // globalLE {pow: func}

// const pow = (x, n) => {
// 	// powLE{x: 2, n: 3} --> globalLE
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// };

// console.log(pow(2, 3)); // 8

// // const a = () => {}

// // const b = () => {
// // 	a()
// // }

// // const c = () => {
// // 	b()
// // }

// // c()

// ---------------------------

// 5(!) --> 5 * 4(!) --> 5 * 4 * 3(!) --> 5 * 4 * 3 * 2(!) --> 5 * 4 * 3 * 2 * 1(!)

// const f = (n) => {
//   if (n === 1) {
//     return n;
//   } else {
//     return n * f(n - 1);
//   }
// };

// console.log(f(6));

// ---------------------------

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// function sumTo(n) { /*... ваш код ... */ }
// console.log( sumTo(100) );

// function sumTo(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }

// console.log(sumTo(100));

// ------------------------------

// 1791 / 10 = 17.9 (9) --> 17 / 10 = 1.7 (7) --> 1

function sumOfNumbers(x) {
    if (x < 10) {
        return x;
    } else {
        return (x % 10) + sumOfNumbers(Math.floor(x / 10));
    }
}

console.log(sumOfNumbers(1793));
