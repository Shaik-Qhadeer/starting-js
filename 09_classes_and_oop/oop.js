 //object literal
// const user = {
//     username : "shaik",
//     loginCount : 8,
//     signedIn : true,
//     getUserDetails : function(){
//         // console.log("got User Details");
//         // console.log(`Username : ${this.username}`);
//         console.log(this);
        
        
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());


//Construcor function 
//new keyword use karke har baar naya  instance banate,isku ich constructor bolte

//step1 : empty {} --means new object create hota
//step2 : constructor funtion call hota new keyword ki wajah se
//step3: this keyword ke andar jo bhi cheezan hai wo object me inject hojate
//step4 : output miljata

// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn
 

     
//     return this

// }
// const userOne =  new User("Shaik",4,true)
// const userTwo = new User ("qhadeer", 8 ,false)
// console.log(userOne);
// console.log(userTwo);
// console.log(this.greeting);    
// 👆we have created a function then this.username = username(variable ke andar username store karre),return this bolke sab cheezan return karre.User ke andar data paas kardere aur usku userOne ke andar and usku print kara DecompressionStream.apply.hamesha new keyword use karre values override nai hona bolke




// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn


//     this.greeting = function(){
//         console.log(`Welcome ${this.username}`);
        
    
//     }
     
//     return this

// }
// const userOne =  new User("Shaik",4,true)
// const userTwo = new User ("qhadeer", 8 ,false)
// console.log(userOne);
// console.log(userTwo);

//👆isme bhi same code likhe and  method(function) bhi likhe 







