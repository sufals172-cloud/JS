 function setUsername(username){
    this.username=username
 }


 function user1(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
 }

 const a=new user1("Sufal","sufal414@",1236)
 console.log(a)