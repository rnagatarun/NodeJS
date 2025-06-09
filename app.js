// require("./xyz.js")

var name = "Hellooo Naga Tarun !!";
var a=10;
var b=20;
console.log(name);
 
//Import calculateSum method from module.exports from Sum.js
// const { calculateSum } = require("./sum.js")
import { calculateSum } from "./sum.js";
calculateSum(a,b);
// console.log(a+b);
console.log("Is globalThis === global: ",globalThis === global )

console.log(global);