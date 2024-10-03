// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("4 is my birth date");
        
        
//     }
//     console.log(element);
    
    
// }     //pehle inialize karna then condition check karna then if condition is true iterate the value else leave the block


// for (let i = 1; i <=10; i++) {
//     console.log(`Table number : ${i}`);
    
//     for (let j = 1; j <=10 ; j++) {
//         // console.log(`Inner loop value : ${j} and inner loop ${i}`);
//         console.log(i + '*' +  j + '=' + i*j);
        
        
        
//     }
    
// }

// let myArray = ['flash', 'batman','superman']
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }


// *******************************  break and continue   ******************************
 
// for (let index = 1; index <= 10; index++) {
//     if (index == 4) {
//         console.log(`4 is detected`);
//         break
//     }
//     console.log(`value of i is ${index}`);          
    
//  }           //if we use break statement then jahan pe break lagaye wo print wahan se jitne bhi hai kuch bhi print nai hota


// for (let index = 1; index <= 10; index++) {
//     if (index == 4) {
//         console.log(`4 is detected`);
//         continue
//     }
//     console.log(`value of i is ${index}`);
    
//  }   //if we use continue to ek baar maaf kardo bolta 4 detuct hua to usku leave kardiye baakhi ke pure execute hojate




//while loop:
// let index =0
//  while (index <= 10) {
//     console.log(`value of i is ${index}`);
//     index = index + 2
//  }


//  let myArray = ["flash", "batman", "superman"]
 
//  while (arr < myArray) {  //<= nai likh sakte fir undefined aata and problem create hoti
//     console.log(`value  is ${myArray}`);
//     myArray++
// }  //first i wrote this wrong code to understand what errors are possible  in this we havn't declare any variable which stores values


// let myArray = ["flash", "batman" , "superman"] //declaring one array

// let arr = 0   //initialization
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);  //isme myarray ek array hai aur usme se arr ek zero index se values dena start karta
//     arr = arr + 1  //arr name ke varibale me iterated value store karre
    
// }




//do-while loop: condition will check at last ,,that means code will run atleast one time ,whether condition is true or false
// let score = 1
// do {
//     console.log(`score is ${score}`);
//     score ++
    
    
// } while (score <=10); 
//👆isme 1 se start hora normal 10 tak print hojata



// let score = 11
// do {
//     console.log(`score is ${score}`);
//     score ++
    
    
// } while (score <=10); 
//👆isme condition fail hojari fir bhi atleast ek baar score = 11 print hota


