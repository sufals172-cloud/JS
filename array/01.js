const myArr=[0,1,2,3,4,true,"hello"];
console.log(myArr)
const myArr2= new Array(0,1,2,3)
console.log(myArr2)
//using unshift we push element at the first
console.log()
const newArr =myArr.join()//convert in string
console.log(myArr)
console.log(typeof newArr)
//also we can use slice
console.log();
const myn1=myArr2.splice(0,2);//sytax [starting value,delete count]
console.log(myArr2);
console.log(myn1)


