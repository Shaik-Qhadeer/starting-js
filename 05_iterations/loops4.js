//  const coding = ["js","python","html","css"]

//coding.forEach( function name(params) {}) //normally function aisa likhte but isme thoda different hai
// coding.forEach( function (item){          //(function call back hai isme)yahan pe function ku name nai diye aur paranthesis me item,value,a,b aisa kuch bhi name dede sakte fir curly braces jo ki body hai usme print statement likh dena
//     console.log(item);
    
// })

// coding.forEach( (val) => {
//     console.log(val);
    

// })
// const coding = ["js","python","html","css"]
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)   //printMe()---->aisa dene ki zarurat nai hai ye method hojata ...printMe --> sirf aisa reference dena bakhi une sambhal leta



// coding.forEach( (items, index , arr)=>{   //yahan pe coding.foreach () ke andar ek arrow function use kare..we can also use items,index and array~
//  console.log(items, index, arr);
 
// })


// [{},{},{}]  array ke andar multiple objects ku access kar sakte ..jab bhi database se data lete objects me rahta to usku access karna bhi important hai

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    
]
myCoding.forEach( (items) => {
    console.log(items.languageFileName);  //simple items.  ye use kar ke kuch bhi access kar sakte object ke andar se
    

})

