// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
//peviously 'Q' and 'bluebird' libraries use karte tha same kaam ke liye


//how to create promises

//promise 1:

const promiseOne = new Promise(function(resolve,reject){
    //Do an async task //DB calls,cryptography,network ..ye sab bhi aa sakte,aur inlogan time lete output dene
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()    //ye resolve method call kare to ich .then() se connect hota
        
    },1000)
})   //this is how promise is created

//now we have to consume this promise
 //--->ye .then(iske andar call back function likhte) ka direct relation hai resolve se..isku resolve se connect karna padta that means jo bhi upar kaam hua uske values yahan pe return hote.👇

 promiseOne.then(function(){
    console.log('Promise consumed');
    
 }) 

 //promise 2: In this we can directly use promise without holding it in a variable
 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
        
    },1000)
 }).then(function(){
    console.log('Async 2 resolved');
    
 })

 //promise 3 :
 const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "shaik" , email : 'shaik@example.com'}) //resolve me jo bhi data paas kare wo consume me return hota ..ye zyadatar object rahta lekin array waghhaira bhi le sakte
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})  //pehle promise3 name ke variable me new promise create kare,setTimeout use kare and function create kare ,then resolve(iske andar data pass kare jo bhi return karna hai)..uske baad promise3 jo ki declare kare tha wo use karke .then(iske andar user likhe,kuch bhi likh sakte) iski madad se values return kare


//promise 4 :

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : 'Qhadeer', email : 'qha123@ex.com'})
        }else{
            reject("Error: Something went wrong");
            
        }
        
    },1000)
})            //pehle promiseFour variable ke andar ek promise create kare then setTimeout ke andar ek if-else loop use kare ,and error true diye that means else part execute hota

promiseFour.then((user) =>{
    console.log(user);
    
    return user.username

}).then( (username) => {  //iske andar jo value aari usku chaining bolte
    console.log(username);
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("promise is either resolved or rejected"))

//👆yahan pe then,catch and finally -->ye 3 bhi use kare ,pehle then me simple user.username return karre lekin error aara tha ,isliye aur ek then use kare and uske andar value pass kare jo bhi access karna hai isku ich chaining bolre,then catch block me error print kara dere,aur finally use karre ,chahe result kya bhi aane do thode time ke baad boldeta



//promise 5 : In this we use Async and Await to haldle promise

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : 'javascript', email : 'js123@ex.com'})
        }else{
            reject("Error: Js went wrong");
            
        }
        
    },1000)

})
//consume promise👇
async function consumePromiseFive(){
    try {
        const response = await  promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
        
    }
    
}
consumePromiseFive()
// 👆we can also handle promise by using async and await,we use async then function(){try and catch block},uske baad method call kardere consumePromiseFive()


//now we can use fetch :
// 1st : async and await
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/uniqueprogrammer')  
//         const data = await response.json();  // isme response se pehle agar await nai likhe to ine bhi error deta kyuki ine bhi time leta
//         console.log(data);
//     } catch (error) {
//         console.log("E:error");
        
//     }
    
// }
// getAllUsers()

//2nd : then() and catch()

fetch("https://api.github.com/users/uniqueprogrammer")
.then((response) => {
    return response.json()


})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))
.finally("promise is either resolved or rejected")

