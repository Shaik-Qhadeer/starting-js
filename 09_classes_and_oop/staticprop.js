// class User {
//     constructor(username){
//         this.username = username

//     }
//     logMe(){
//         console.log(`username : ${this.username}`);
        
//     }
//      createId(){
//         return `123`
//     }
// }
// const chai = new User("hii",123)
// console.log(chai.createId())
//we have created a class and simply creared an id and used


class User {
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`username : ${this.username}`);
        
    }
     static createId(){  //error aata id access nai kar sakte apan.  //static use karne se wo cheez ku koi bhi access nai kar sakte ,to confidential cheezon ku static use karke safe rakhte ex:password
        return `123`
    }
}
const chai = new User("hii",123)
// console.log(chai.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
   

}
const iphone = new Teacher("iphone", "ip@phone.com")
console.log(iphone.createId());  //error deta ,kyunki id ku access nai kar sakte
