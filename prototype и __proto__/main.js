let man1 = {}  // man._proto_

let users1 = [] // users.__proto__

let age1 = 18 // age.__proto__


function ItKamasutra() {
}// ItKamasutra.__proto__

class Max {

}  // Max.__proto__

// всё что объект у них после точки есть __proto__ - у любого объекта есть proto


// -----------------------------------------------------------------------------------------------------------------------------

let man = {}

let man2 = {}

console.log("man vs man2:", man.__proto__ === man2.__proto__)



let users = []

let cars=[]

console.log("users vs cars:", users.__proto__ === cars.__proto__)


let age = 18

let level = 100

console.log("age vs level:", age.__proto__ === level.__proto__)

// ----------------------------------------------------------------------------------------------------------------------------


let promise = new Promise(() => {})



let obj = {}  // new Object(...)

let us=[]   // new Array(...)

let age = 15 // new Number(...)