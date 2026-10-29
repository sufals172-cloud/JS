const login={
    user:"sufal",
    loginCount:10,
    signId:true,
    getter:function(){
        console.log("Hello!")
        console.log(this)
    }
}
// console.log(login.getter())

function user(username,loginCount,isloggedin){
    this.username=username
    this.loginCount=loginCount
    this.isloggedin=isloggedin
    //  return {name:"Soumitra"} The new keyword creates a new object, binds this to that object, executes the constructor, and automatically returns the object unless the constructor explicitly returns another object.

}
const userOne= new user("sufal",1,true)
const usertwo=new  user("sudip",2,false)
console.log(userOne)




