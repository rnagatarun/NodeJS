// require("./xyz.js")

var name = "Hellooo Naga Tarun !!";
var a=10;
var b=20;
console.log(name);

const{calculateMultiply, calculateSum} = require("./calculate")
 
// import { calculateSum } from "./sum.js"; // es6 module import
// calculateSum(a,b);
// console.log(a+b);
console.log("Is globalThis === global: ",globalThis === global );

// const calculateMultiply = require("./calculate/multiply.js");
calculateSum(a,b);
calculateMultiply(a,b);

console.log(global);