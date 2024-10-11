//ES6

// class User {   //jaise hi class se ek object initialize hota constructor apne aap call hota
//     constructor(username,email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//    encryptPassword(){
//     return `${this.password}abc`  //jo bhi password aara usme abc add karke encrypt kardere
//    } 
//    changeUserName(){
//     return `${this.username.toUpperCase()}`  //iski help se jo bhi previous username tha usku caps me convert kare
//    }
// }
// const yaba = new User("shaik", 'sk@gmail.com',"123")
// console.log(yaba.encryptPassword())
// console.log(yaba.changeUserName())
//👆 pehle ek class create karliye constructor me kya kya hona likh liye then yaba name ke variable me values pass kardiye


//behind the scene(we can do same thing with the help of functions)

function User (username,email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`  //jo bhi password aara usme abc add karke encrypt kardere
}
 
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`  //iski help se jo bhi previous username tha usku caps me convert kare
}
const baba = new User("baba", 'sk@gmail.com',"123")
console.log(baba.encryptPassword())
console.log(baba.changeUserName())
//👆we did same thing with the help of functions,here we used functions ,and .prototype to use different methods