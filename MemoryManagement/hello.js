// Stack(primitive data type)   Heap(Non primitive data type)
let a=10
let b=a
b=20
console.log(b)
console.log(a)


let useerone={
    email:"Sufalsa172",
    name:"sufal"
}
let usertwo=useerone
console.log(usertwo)
usertwo.email="hello"
console.log(usertwo)
console.log(useerone)