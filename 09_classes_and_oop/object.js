
//importance of new keyword:

function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//..
function createUser(username,price){
    this.username = username;
    this.price = price;
} //here we have created a function,and this.username(variable ku this. se define karre kyunki current context ki baat karre bol k)
createUser.prototype.increment = function(){
    this.price++
}  //yahan apan khud ka function ya method bana sakte ,simply .prototype lagake method name likhdo ex:increment
createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
    
}
const chai = new createUser("chai",25)  //yahan new keyword likhe bolke output aara,nai to error aara tha
const tea = createUser("tea",250)

chai.printMe()  //ye call kardiye printMe ku



//About new keyword :
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/






