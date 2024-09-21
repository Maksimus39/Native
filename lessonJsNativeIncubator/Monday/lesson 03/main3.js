// ----------------------------------------------------------------------- slice - immutable -----------------------------------------------------------------------------

// arr.slice(откуда отрезать, [докуда отрезать]

// 1

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// let subArr = arr.slice(0, 2)                    // [ 'a', 'b' ]
// console.log(arr)
// console.log(subArr)

// 2

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// let subArr = arr.slice(1, 4)                    // [ 'b', 'c', 'd' ]
// console.log(arr)
// console.log(subArr)


// 3

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// let subArr = arr.slice(2)                       // [ 'c', 'd', 'e', 'f' ]
// console.log(arr)
// console.log(subArr)


// ---------------------------------------------------------------------- splice - mutability --------------------------------------------------------------------------------
//  массив,splice (откуда удаляем, сколько удаляем, вставить, вставить)

// 1

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let subArr = arr.splice(1,3)
// console.log(arr)      // [ 'a', 'e', 'f' ]
// console.log(subArr)  //  [ 'b', 'c', 'd' ]


// 2

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let subArr = arr.splice(0,0,'testValue1', 'testValue2');
// console.log(arr);  //  [ 'testValue1', 'testValue2', 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(subArr);  // []


// 3

// let arr = [1,2,3];
// let arrayLength = arr.length;
// arr.splice(0,1,4)
// console.log('arr: ', arr)

// ----------------------------------------------------------------------- toSpliced() - передаются точно так же как и в splice ---------------------------------------------

// 1

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];                        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// let testArr = arr.toSpliced(0,2)                 // [ 'c', 'd', 'e', 'f' ]
// console.log(arr)
// console.log(testArr)

// ------------------------------------------------------------------------ reduce() -----------------------------------------------------------------------------------

// 1

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const nevString = arr.reduce()




