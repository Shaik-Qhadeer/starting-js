//truthy and falsy values are used to assume values

//falsy values:👇👇the below values are known as falsy values except these all the values are truthy values
// false , 0 ,-0 , bigInt 0n , ""(empty string) , null ,undefined , NaN

//truthy values:
// "0",'false' " " ,(everthing in the string will be truthy values) ,[] ,{} , function(){}


// const userEmail = "shaik"

// if (userEmail) {
//     console.log("got user email");
    
    
// }else{
//     console.log("Email not found ");
    
// }           //as we have given string so it executes the if block becoz condition is true

//  const userEmail = null

// if (userEmail) {
//     console.log("got user email");
    
    
// }else{
//      console.log("Email not found ");
    
// }   //null is a falsy value so else block will be executed

//if we want to check whether an Array is empty or not we can do that:👇
 

// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
    
// }  //this is how we can detect whether array is empty or not

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
    
// }   
//object.keys(emptyObj)------->ye ek array bangaya ab is pe length property lagake malu kar sakte object empty hai ya nai  


//nullish coalescing operator(??):   null, undefined
let val1;
// val1 = 5 ?? 10  //first jo value hai woich print hogayi
// val1 = null ?? 15  //zaroori nai hai hamesha first value print hona agar null ya undefined raha to safety check karte aur uske baad ki first value print karate
// val1 = undefined ?? 20
// val1 = undefined ?? 5 ?? 10
console.log(val1);



//Ternary Operator
// condition ? true : false 

const iceTeaPrice = 200
iceTeaPrice <=80 ? console.log("affordable") : console.log("not affordable");

