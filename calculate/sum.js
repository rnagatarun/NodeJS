console.log("Executing Sum...");
const calculateSum = (a,b) => {
    console.log("The sum of a and b is:", a+b);
}
x="Hello World";//Non-strictmode: works without var, let or const

module.exports = {x,calculateSum};

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;
