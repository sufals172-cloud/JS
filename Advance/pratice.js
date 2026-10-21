new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(error){
            resolve({name:'Sufal',age:20})
        }
        else{
            reject("Error: Something went wrong")
        }
    })
}).then((user)=>{
    console.log(user)
    return user.name
}).then(function(username){
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).then(()=>{
    console.log("executed")
})