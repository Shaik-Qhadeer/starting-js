//syntax:
//function functionName(){code}

// function sayMyName(){
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("I");
// console.log("K");

// }

// sayMyName()               
//sayMyName--------->it is a reference(matlab ki ye sirf batata ki wahan rahta but access nai karsakte)
//sayMyName()---------->if we want to execute we have to add paranthesis

function name(params) {
    
}//jab bhi function ki definition banate tab parameters likhte aur jab usku call karna rahta tab arguments likhte

// function addTwoNumbers(num1,num2) {
//     console.log(num1 + num2);
    
// }
//addTwoNumbers(2,4)           //--------------->iske andar jo likhe usku arguments bolte
//addTwoNumbers(2,"a")           //output:2a
//addTwoNumbers(2,null)


// function addTwoNumbers(num1,num2) {
// console.log(num1 + num2);
    
// }
// console.log("Result :", result);

function addTwoNumbers(num1, num2) {
  
    let result= num1 + num2
   // console.log("this is my first day of learning functions");
    return result
    console.log("ok bye");
    //we can also write
    //retun num1 + num2
    
}
const result = addTwoNumbers(2,3)
//console.log("Result : ",result);
//whenever we write console it just prints the things on console but not return any value ..if we want to return value then we can simply store result in variable and call
//one thing to remember ,whenever we write return (keyword ) everthing after that will not print only the code before return will run

// function userLoggin(username){
//     return `${username} just logged in `
    

// }
// console.log(userLoggin());  //arguments nai diye to undefined print hota...

// function userLoggedIn(username="yaba"){
//     if(username === undefined){
//         console.log(`i don't know what to print`);
//         return;
//      }
//     else{
//         return `${username} just logged in `
        

//     }
// }
// console.log(userLoggedIn());
//if,(if statement is true then it prints the first block) otherwise it prints the else part //we can also write(!username)
//we can also give default value while defining parameters so that by default that value will print


function calculatedCartPrice(val1, val2, ...num1){
    return num1

}
// console.log(calculatedCartPrice(200,400,500,1000));

//  ... these 3 dots also known as spread and rest operator,iska simple matalb ye hai ki agar aap kisi cheez ku bundle kar k output me array ke form me dedere
//val1,val2 liye to first ke two values usme chaale jate aur bakhi ke values group hoke array ke form me aajate output me


//objects in functions:

//  const user = {
//     username :"shaik",
//     price: 199
//  }
//  function handlingObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    

//  }
// handlingObject(user)
//first we are declaring object then writing function to access that object,one thing to keep in mind that whatever object you are using should be available in the same format you want otherwise it creates an error
// handlingObject({
//     username : "yaba",
//     price : 399
// })
 //ye jo  second wala hai direct bhi  pass kar sakte object ku zaroori nai hai ki pehle ich define karna bol k



//using array in functions:

const myArray = [200,400,500,1000]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,500,300,250]));

//we can simply declare one array and using that in functions or we can directly use while printing the output








