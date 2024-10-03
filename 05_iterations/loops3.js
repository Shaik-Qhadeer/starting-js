const myObj ={
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'

}

// for (const key in myObj) {
//     console.log(key);
    
// }
//only key will print on the screen 


for (const key in myObj) {
    // console.log(`${key} shortcut for ${myObj}`); //aisa kare to sirf object print hota 
    // console.log(`${key} shortcut for ${myObj[key]}`);   //agar aisa print kare to object ke andar ke values bhi print hote
}


//if we want to implement this using Array:
const programming = [1,2,3,4,5]

for (const key in programming) {
    // console.log(key);
    
    
}
//for in loop ka yech drawback hai..jo bhi values rahne do index provide karra ..it's not taking other values like strings



const map = new Map()
map.set('IN', 'India')  //key values set karliye
map.set('US','United State of America')
map.set('Fr', 'France')
map.set('IN', 'India') 
 
for (const key in map) {
    console.log(key);
    
   
}
//kuch bhi print nai hota ..means strings ke upar for in loop work nai karta


