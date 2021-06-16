let a = 5;
let b = 7;
// console.log(`before swap: a = ${a} and b = ${b}`);
// before swap: a = 5 and b = 7

let temp = a;
a = b;
b = temp;

// console.log(`After swap: a = ${a} and b = ${b}`);
// After swap: a = 7 and b = 5

// smart way to do this

let x = 20;
let y = 40;

console.log(`x = ${x}, y = ${y}`);

x = x + y;
y = x - y;
x = x - y;

console.log(`x = ${x}, y = ${y}`);
