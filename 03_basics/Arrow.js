//  const user = {
//     username : "shaik",
//     price : 399,

//     welcomeMessage :function(){
        
//     console.log(`${this.username}, welcome to youtube`);    //we use 'this' keyword to see current context/object,,agar current object me se values access karna hai to simply this.username bol k access karle sakte
//     console.log(this);  //kyunki ye block scope me print kara re to pura object print hora isme
    
//     }
    

// }
// user.welcomeMessage() //yahan tak same jo bhi mention tha w print hota

// user.username = "sam"  //lekin yahan pe username ki value change kar ke 'sam' kardiye isliye ye updated value print hoti..context chnage hogaya shaik se sam
// user.welcomeMessage()

// console.log(this); //ye jo 'this' keyword hai isku global area me print karre isliye  sirf empty object return karta
//👆ye jo hai wo node environment me jo ki global scope ku refer karra to iske andar context ich nai hai kuch bhi isliye empty object deta


// function chai(){
//     console.log(this);
    
// }
// chai()


// function chai(){
//     let username = "shaik qhadeer"
//     console.log(this.username);
    
// }
// chai()
//👆isme output undefined aata kyunki apan sirf object me use kar sakte 'this' keyword .functions me use nai kar sakte


//Arrow functions:

// const chai = () =>{
//     let username = "shaik qhadeer"
//     console.log(this);
    

// }
// chai() //output me {} aara kyunki arrow function se this keyword access nai kar sakte


// const chai = () =>{
//     let username = "shaik qhadeer"
//     console.log(this.username);
    

// }
// chai() //output me undefined aara


// Arrow function syntax: () => {}
// Arrow function syntax while we are holding it in a variable
// const addTwo = (num1 , num2) => {
//     return num1 + num2
//👆yahan pe curly braces use hue isliye return keyword use karna zaroori hai
//yahan pe return keyword use karre isliye isku explicit return bolte

  
// }
// console.log(addTwo(2,3));
//isme pehle addTwo variable declare kare then parameters pass kare num1 and num2 then return me add karadiye fir arguments pass karadie jo add karna tha


// const addTwo = (num1 , num2) => num1 + num2     //isme return num1 + num2 nai likhe kyunki ye implicit return hai ine maan lera kaiku bolto sirf ek line ka statement hai
// console.log(addTwo(3, 6));



// const addTwo = (num1 , num2) => (num1 + num2 )  //yahan pe paranthesis hai to return keyword use nai karte
// console.log(addTwo(3, 6));
//yahan pe return keyword use nai karre isliye isku implicit return bolre


//Agar object return karna hai to bhi ({}) ye format use karna
const addTwo = (num1 , num2) => ({username :"shaik"})
console.log(addTwo());















