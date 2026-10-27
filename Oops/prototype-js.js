let a={
    name1:"sufal",
    lang:"js",
    run:()=>{
        alert("self run")
    }
}
console.log(a)


let p={
   run:()=>{
    alert("run")
   }
}
p.__proto__={
    name:"sudip"
}
a.__proto__=p
a.run();
console.log(a.name)