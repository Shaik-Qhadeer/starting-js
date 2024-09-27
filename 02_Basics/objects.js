//singleton
//agar constructor se bana to singleton bolte
//object.create


//object literals
//  syntax: const js user = {

//  }

const mySmb = Symbol ("key1")
 const JsUser = {
    name: " qhadeer",           //bydefault name ku"name" aisa treat karta
    "full name": "shaik qhadeer",
    [mySmb]: "mykey1",
    age: 21,
    location: "hyderabad",
    email: "shaikqhadeer@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

//object ku access karne ke 2 tarikhe hai 
// 1)Jsuser/ya jo bhi name hai wo type kar ke . use karna   ex:JsUser.email
//2)["email"]-- agar key bhi already string me represented hai tab double quotes me key in sqaure braces use kar sakte

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySmb]);

JsUser.email = "shaikqhadeer@microsoft.com"  //google.com se microsoft .com me change hojati value
// Object.freeze(JsUser)  // yahan pe value freeze hojati ab yahan se kuch bhi change karo error to nai aata but change bhi nai hoti value
JsUser.email = "yaba@gpt.com"
// console.log(JsUser);

JsUser.greetings= function(){
    console.log("hello Js User");
}
// console.log(JsUser.greetings());


JsUser.greetingsTwo= function(){
    console.log(`hello js user,${this["full name"]}`);  //isme string interpolition use kare aur this keyword bhi use kare which means particular object me se konsi value access karna hai wo bol sakte
}
// console.log(JsUser.greetingsTwo());

//objects hamesha .(dot) lagake use karte but in some cases [] square braces bhi use karte



//**********************************    Objects part2   ******************************************************** */

//singleton object : const tinderUser = new Object()
//constructor: const tinderUser = {}
 

const tinderUser = new Object()
tinderUser.id ="123abc"
tinderUser.name="shaik"
tinderUser.age=21
// console.log(tinderUser);

const regularUser = {
    email:"shaik@yahoo.com",
    fullname:{
        userfullname:{
            firstname:"shaik",
            lastname:"qhadeer"
        }

    }
}
// console.log(regularUser.fullname.userfullname.lastname);


//we have different methods to join objects
//1)const obj3 = {obj1,obj2}
//2)const obj3 = object.assign({},obj1,obj2)--------isme {}means target iski madad se value show kar sakre,,obj1,obj2 ye sources hai
//3)spread use kar sakte--obj3={...obj1,...obj2}

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3 = {obj1,obj2}
// console.log(obj3);

 const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const user =[
//     {
//         id:1,
//         email:"sk@google.com"
//     }
// ]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //keys access kar sakte
// console.log(Object.values(tinderUser));  //values access kar sakte
// console.log(Object.entries(tinderUser));      //object entries ki help se key-value pairs ku arrays me convert karta

// console.log(tinderUser.hasOwnProperty('isLoggedin'));  //konse properties hai nai hai malum hota



//***********************************   objects destructing and json Api       ********************************************************** */

const course = {
    coursename: "javascript",
    price:"999",
    courseInstructor:"hiteshsir"
}
// console.log(course.courseInstructor);
const {courseInstructor:instructor}= course
console.log(instructor);
// {
//     "name":"shaik",
//     "coursename":"js in hindi",
//     "price":"free"
// } -------------------------------------isku json format bolte,same object ke jaisa rahta but name nai rahta iska..aur key-value dono bhi string me rahte(json-javascript object notation )








