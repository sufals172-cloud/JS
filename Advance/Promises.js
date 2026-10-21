//  const PromiseOne=new Promise(function(resolve,reject){
//      setTimeout(function(){
//          console.log("Aysc Task 1");
// },1000)
//  })
//  PromiseOne.then(function(){
//      console.log("Promise Consumed")
//  })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Aysc Task 2")
//         resolve("Sufal")
//     },1000)
// }).then(function(a){
//     console.log("Promise Consumed 1")
//     console.log(a)
// })





// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Aysc task 3")
//         resolve("hello")
//     },1000)
// }).then(function(user){
//     console.log(user)
// })



// then() and catch() chaining

const PromiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({name:"sufal",age:20})
        }
        else reject("Error: Something went wrong")
    },1000)
})
PromiseTwo.then(function(user){
    console.log(user)
    return user.name
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){ console.log("Promise is either resolved or rejected")}) 



// Anothr way to handleing promises using ASYNS await



const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({name:"Sudip",age:23})
        }
        else reject("Something went wrong")
    },1000)
})


async function consumePromise(){
    try{
    const result=await PromiseThree
    console.log(result)

}catch(error1){
   console.log(error1)
}
}

consumePromise()
/*
 FETCH API USING ASYNC FUNCTION 

*/
// async function run(){
//     try{
//        const res= await fetch("https://jsonplaceholder.typicode.com/users")
//        const d1=await res.json();
//        console.log(d1)
//     }
//     catch(error2){
//         console.log('Error:',error2)
//     }
// }

// run()


fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(d2){
  return d2.json()
}).then(function(d3){
    console.log(d3)
}).catch(() =>{
    console.log("Error")
})

// Fetch execute first because its take special memory space








