//Immediately invoked function Expressions(IIFE)

//global scope ke pollution se problem hoti hai kahin baar ,to global scope ke variables hai ya jo bhi declaration hai uske pollution ku hatane ke liye iife use karte


function chai(){
    //as we are naming the function it is called named iife
    console.log(`DB CONNECTED`);
    
}

chai();  // agar ye semicolon mai nai lagata tha to problem hoti thi aur ek error show karta tha isliye ye add kara kyunki usku malum to hona kahan pe function end hora


//syntax:()() -------->simply pehle paranthesis ke andar function likhna hai

(() => {
    //unnamed iife
    console.log(`DB Connected two`);
    
})();

((name) => { //yahan parameter pass kare isliye parameter iife
    //parameter iife
    console.log(`just practice ${name}`);  //suppose ek ek varible expect karra 'name' to paramater me bhi expect karliye and argument me name kya hona pass kardiye
    
})('shaik')   //yahan pe argument ki place pe konsa name honna pass kardiye //ex:chai('shaik') normal function me aisa likhre tha apan isliye arrow function use kare jab last wale paranthesis ke andar name pass kardiye !