// Lexical environment, closure, recursion

// let car = "bmw";

// function startEngine() {
//   // const car = "kia";

//   return () => console.log(`Start ${car}`);
// }

// const foo = startEngine();

// car = "audi";

// foo();

// const globalLE = {
// 	environmentRecords: {

// 	},

// 	outer: null
// }

// globalLE {foo: func, a: undefined} -> null

// foo();
// bar();
// baz();

// console.log(a);
// // bar();
// function foo() {
//   console.log("foo");
// }

// const bar = function () {
//   // globalLE {foo: func, bar: func} -> null
//   console.log("bar");
// };

// // bar();

// const baz = () => {
//   console.log("baz");
// };

// // bar();

// var a = "str"; // globalLE {foo: func, a: 'str'} -> null
// let b = 10;
// const c = 20;

// // console.log(a);

// globalLE {} -> null

// let car = 'bmw' // globalLE {car: 'bmw'} -> null

// car = 'kia'// globalLE {car: 'kia'} -> null

// while() {
// 	// whileLE {}

// 	const car = 'audi'
// }

// const arr = []// globalLE {car: 'kia', arr: []} -> null
// const obj = {}// globalLE {car: 'kia', arr: [], obj: {}} -> null

// globalLE {startEngine: func, car: undefined} -> null

// var car = "bmw"; // globalLE {startEngine: func, car: 'bmw'} -> null

// function startEngine() {
//   // startEngineLE {} -> globalLE

//   // const car = "kia";
//   // console.log(`Start ${car}`);

//   return () => console.log(`Start ${car}`);
// }

// const foo = startEngine(); // globalLE {startEngine: func, car: 'bmw', foo: func} -> null

// car = "audi"; // globalLE {startEngine: func, car: 'audi', foo: func} -> null

// foo();

// globalLE {} -> null

// let car = "bmw"; // globalLE {} -> null

// const startEngine = () => {
//   // globalLE {car: 'bmw', startEngine: func} -> null
//   // {} -> globalLE
//   // car = "audi";
//   console.log(`Start ${car}`);
// };

// car = "kia"; // globalLE {car: 'kia', startEngine: func} -> null

// startEngine();

// const App = () => {
// 	const foo = () => {} // appLE {foo: func}
// 	foo(10)
// 	<Button bar={foo} />
// }

// const Button = ({bar}) => {
// 	// buttonLE {bar: func}
// 	bar(20)
// }

// ---------------------------

// globalLE {} -> null
// let count = 0;

// const counterCreator = () => {
//   // counterCreatorLE1 {} -> globalLE
//   // counterCreatorLE2 {} -> globalLE
//   // let count = 0;

//   return () => {
//     // {} -> counterCreatorLE1
//     // -> counterCreatorLE2
//     // let count = 0;
//     console.log(++count);
//   };
// };

// const counter1 = counterCreator(); // globalLE {counter: func} -> null
// const counter2 = counterCreator(); // globalLE {counter: func} -> null

// console.log(counter1 === counter2);

// counter1();
// counter1();
// counter1();

// counter2();
// counter2();
// counter2();

// ---------------------------

// 2(4) --> 2 * 2(3) --> 2 * 2 * 2(2) --> 2 * 2 * 2 * 2(1)

// const pow = (x, n) => {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// };
//
// console.log(pow(2, 8000));

// 5! --> 5 * 4! --> 5 * 4 * 3! --> 5 * 4 * 3 * 2! --> 5 * 4 * 3 * 2 * 1!

// let count = 0;

// const factorial = (n) => {
//   console.log(++count);
//   if (n === 1) {
//     return n;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(8000));



// ------------------------------------------------- Самостоятельно по методичке -------------------------

// Объект лексического окружения можно представить в таком виде:

// const LE = {
//     environmentsRecords: {},
//     outer: LE || null,
// }


// const counterCreator = () => {
//     let count = 0
//
//     return () => {
//         console.log(count++)
//     }
// }
//
// const counter1 = counterCreator()
// // const counter2 = counter();
//
// counter1()
// counter1()
// counter1()


// function createCounter() {
//     let count = 0;  // globalLE -> {}
//
//     return function() {
//         count += 1;
//         return count;
//     };
// }
//
// const counter1 = createCounter();
// const counter2 = createCounter();
//
// console.log(counter1()); // Вывод: ? 1
// console.log(counter1()); // Вывод: ? 2
// console.log(counter2()); // Вывод: ? 1
// console.log(counter2()); // Вывод: ? 2


// function createClosure(x) {
//     return function(y) {
//         return x + y;
//     };
// }
//
// const add5 = createClosure(5);
// const add10 = createClosure(10);
//
// console.log(add5(3));  // Вывод: ? 5 + 3 = 8
// console.log(add10(3)); // Вывод: ? 10 + 3 = 13


// function createMultiplier(multiplier) {
//
//     // multiplier === 2
//     return function(number) {
//
//         // multiplier === 2
//         return number * multiplier;
//     };
// }
//
// const double = createMultiplier(2);
// const triple = createMultiplier(3);
//
// console.log(double(5));  // Вывод: ? 5 * 2 = 10
// console.log(triple(5)); // Вывод: ?  5 *3 = 15


// function createLogger(prefix) {
//     return function(message) {
//         console.log(`${prefix}: ${message}`);
//     };
// }
//
// const infoLogger = createLogger('INFO');
// const errorLogger = createLogger('ERROR');
//
// infoLogger('This is an informational message');  // Вывод: ? INFO: This is an informational message
// errorLogger('This is an error message');         // Вывод: ? ERROR: This is an error message


// function createCounter() {
//     let count = 0;  // le -> {}
//
//     function increment() {
//         count += 1;       // 0 + 1
//         return count;     // 1
//     }
//
//     function decrement() {
//         count -= 1;
//         return count;
//     }
//
//     return {
//         increment,
//         decrement
//     };
// }
//
// const counter = createCounter();
//
// console.log(counter.increment()); // Вывод: ? 1
// console.log(counter.increment()); // Вывод: ? 2
// console.log(counter.decrement()); // Вывод: ? 1
// console.log(counter.decrement()); // Вывод: ? 0


// function createGreeter(greeting) {
//     return function(name) {
//         console.log(`${greeting}, ${name}!`);
//     };
// }
//
// const greetHello = createGreeter('Hello');
// const greetHi = createGreeter('Hi');
//
// greetHello('Alice');  // Вывод: ? Hello, Alice
// greetHi('Bob');       // Вывод: ? Hi, Bob


// function createAdder(base) {
//     return function(number) {
//         return base + number;
//     };
// }
//
// const addToTen = createAdder(10);
// const addToTwenty = createAdder(20);
//
// console.log(addToTen(5));    // Вывод: ? 10 + 5 = 15
// console.log(addToTwenty(5)); // Вывод: ? 20 + 5 = 25

// function createMultiplier(factor) {
//     return function(number) {
//         return number * factor;
//     };
// }
//
// const double = createMultiplier(2);
// const triple = createMultiplier(3);
//
// console.log(double(4));  // Вывод: ? 4 * 2 = 8
// console.log(triple(4)); // Вывод: ?  4 * 3 = 12


// function createCounter(initialValue) {
//     let count = initialValue; // 10
//
//     function increment() {
//         count += 1;          // 10 + 1
//         return count;        // 11
//     }
//
//     function decrement() {
//         count -= 1;
//         return count;
//     }
//
//     function reset() {
//         count = initialValue;
//         return count;
//     }
//
//     return {
//         increment,
//         decrement,
//         reset
//     };
// }
//
// const counter1 = createCounter(10);
// const counter2 = createCounter(20);
//
// console.log(counter1.increment()); // Вывод: ?  11
// console.log(counter1.increment()); // Вывод: ?  12
// console.log(counter2.increment()); // Вывод: ?  21
// console.log(counter2.decrement()); // Вывод: ?  20
// console.log(counter1.reset());     // Вывод: ?  10
// console.log(counter2.reset());     // Вывод: ?  20