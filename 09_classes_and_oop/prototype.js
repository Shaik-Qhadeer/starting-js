// //prototype:

// //prototype (koi cheez nai mili to upar layer again and agin wo cheez mile tak jata ,haar nai maanta ,jab tak usku null value nai miljati) --- this,new,classes,prototypal inhertance ye sab cheezan prototype ki wajah se milte.



// myHeros = ["thor","spiderman"]
// let heroPower = {
//     thor : "Hammer",
//     spiderman : "sling",

//     getSpiderPower :function(){
//         console.log(`spidy power is ${this.spiderman}`);
        
//     }
// }
// Object.prototype.shaik = function(){
//     console.log(`shaik is present in all objects`);
// }     //yahan pe Object.prototype likh ke .shaik method dediye and function create kardiye,iska matlab agar object me kuch diye to automatic array,string and function sab me ye functionality aajati


// // heroPower.shaik();
// // myHeros.shaik()


// Array.prototype.qhadeer = function(){
//     console.log(`qhadeer says hello`);
    
// } //array me kare to sirf array wala access kar sakta
// myHeros.qhadeer()


// const User = {
//     user "shaik",
//     email :"yaba@fb.com"
// }
// const Teacher = {
//     makeVideo : true
// }
// const TeachingSupport = {
//     isAvailable : false
// }
// const TASupport ={
//     makeAssignment : 'JS Assignment',
//     fullTime : true
// __proto__ : TeachingSupport   //TASupport ke andar teachingSupport ke properties access karre apan
// }
// Teacher.__proto__ == User  // this is known as prototypal inheritance,how you can access properties of others

//modern syntax : 
// Object.setPrototypeOf(TeachingSupport , Teacher)  //Object ku direct access karre setPrototypeOf(Teacher ki properties teachingsupport access karlera)

let anotherUserName = "shaikQhadeer       "    //yahan ek string liye usme spaces bhi add kare

String.prototype.trueLength = function(){  //String.prototype me .truelength property access karre 
    console.log(`${this}`);  //this keyword means current context ki baat karre
    console.log(`True length is ${this.trim().length}`);  //this.trim().length --current jo bhi value hai uske upar trim use karke uski length display karre
    
    

}
anotherUserName.trueLength()  //actual length print hoti
"qhadeer".trueLength()  //ye particular string ki length print hoti

