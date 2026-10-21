const score = 400
// console.log(typeof score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
//  console.log(balance.toFixed(2));// how many decimal places you want to show

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));// how many total number i want to show

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

//console.log(Math);
// console.log(Math.abs(-4));
 //console.log(Math.round(4.6));//what is the nearest integer
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));// 
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); // h

const min = 10
const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min)
