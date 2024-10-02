// {} ------------------>this empty curly braces is called scope ,whatever there in the braces are considered as scope
let a=300
if(true){
    let a=10
    const b=20
    //var c=30  //var ku aap kidhar bhi declare karo une print hojata jo ki bhot problem create karta ,this is the reason we don't use var.
    // console.log("INNER :",a); //agar inner block me ka bhi print karana raha to aisa kar sakte
    
    

}
// console.log(a);
// console.log(b);
// console.log(c);

//whatever may be the values in if block that are considered as block scope and remaining ouside that block are called global scope




//scope level
 function one(){
    const username = "shaik"

    function two(){
        const website = "youtube"
        console.log(username);   //this is child node but it can access it's parents node values isliye username jo global scope me declare hua usku ye child jo block scope me hai wo access karra
        
    }
    // console.log(website);
    // two()
    
 }
//   one()

if(true){
    const username ="yaba"
    if(username === "yaba"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++++++++++++           interesting                  ++++++++++++++++++++++++++++++++++++++++++++++


// function addOne(num){
//     return num + 1

// }
// console.log(addOne(5));

//isme pehle ek function create kare ek parameter paas kare 'num' fir return karte jab +1 kare print karate jab argument paas kare 5 to wo 5 + 1 = 6 output me aata

// const addTwo = function addTwo(num){
//     return num + 2
// }
// console.log(addTwo(8));

// console.log(addOne(5));
// function addOne(num){
//     return num + 1
// }
//isme jo hai apan pehle print karre addOne fir + 1 ,fir bhi error nai aara kyunki value hold nai karre apan declare kar ke



// console.log(addTwo(8));
// const addTwo = function addTwo(num){
//     return num + 2
// }
//isme error aata(cannot access addTwo before initialization ) kyunki pehle use kar ke baad me declare  nai kar sakte ,pehle initialize karna then access kar sakte















