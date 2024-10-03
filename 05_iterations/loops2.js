//for of

//["", "", ""]
//[{},{},{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
    
// } //isme pehle ek array create karliye then for of loop use karre,,,isme simply const ke baad ek variable name dedere aur of ke baad array name then print karadere

// const greetings = "hello world!"
// for (const greet  of greetings) {
//     // console.log(` Each char is ${greet}`);
    
// }

//*****************************************   MAPS     ********************************************** */
//map is a object in js which stores key value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
//uniques values rahte isme 
//maps are iterable
const map = new Map()
map.set('IN', 'India')  //key values set karliye
map.set('US','United State of America')
map.set('Fr', 'France')
map.set('IN', 'India')   //ye fir se repeat hora to isku ignore kardera une

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
    
// }
//👆Agar aisa key likh diye direct to key and values sab print hojare


// for (const [key, value] of map) {
//     console.log(key,':-' ,value);    
    
// }
//👆Aisa kare to key separated with values display hote


const myObj = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
for (const [key, value] of myObj) {
    console.log(key,':-' ,value);    
    
}
//for of loop use nai kar sakre(object is not iterable)
