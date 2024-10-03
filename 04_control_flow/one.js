//whenever we write we don't want everything to be be executed .it will be problem for example: if i want to save a reel ,the only code which is used to save the reel should work ..if download reel code also works then it will be a problem
//to overcome from this problem we use control flow

//if-else
//syntax:
// if (condition) {  //if condition becomes true then only it will go to if block ,otherwise it will execute code of else block and check default code and execute it.!
    
// }

// let age = 8
// if (age >  18) {
    
//     console.log("you are eligible to vote");
    

    
// }else{
//     console.log("you are a child");
// }
// console.log("Executed");


//conditional operators:
//  < , > , <= ,=(to assign value(a=10)) , ==(to check/compare two values),!=(2!=3(answer:true)//condition true hona compare kisku bhi karo)


// if (2 == "2") {   //it will execute becoz strict type check nai hai isme ,sirf values ku check karta not datatypes
//     console.log("hello shaik");
    
    
// }
// if (2 === "2") { //strict type check ,value ke sath sath datatype ku bhi check karta 
//     console.log("hello shaik");
    
// }


//if there is nesting or multiple conditions to execute then we use if,else if ,else

// const balance = 200
// if (balance < 500) {
//     console.log("less than 500");
    
// }else if (balance < 750){
//     console.log("less than 750");
    
// }else{
//     console.log("less than 1200");
    
// }



//&&(logical AND) ||(logical OR)  

// const isUserLoggedIn = true
// const debitCard = true

// if (isUserLoggedIn && debitCard ) {
//     console.log("Allow to buy course");
    
// }
// else{
//     console.log("Access denied");
    
// }

// const isUserLoggedIn = true
// const debitCard = true

// if (isUserLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
    
// }
// else{
//     console.log("Access denied");
    
// }                // this code will not run as 2==3 is not true..in this && all the conditions should be true

// const userLoggedInFromGoogle = true
// const userLoggedInFromEmail = false

// if (userLoggedInFromGoogle || userLoggedInFromEmail) {
//     console.log("user logged in successfully");
    
  
// }               //isme sirf ek condition true hori fir bhi statement execute hora


const balance = 1000
if(balance > 500) console.log("test"), console.log("test2");  //agar single line me kuch bhi print kara re to simply comma se separate kar sakte

