const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map( (num) => num +1)  //yahan pe map use kare uske andar call back function use karre 
const newNum = myNumbers
                        .map( (num) => num * 10)   //ye actual array me operation perform karta
                        .map((num) => num+2)    //ye jo iske previous wale ke ouput me operation perform karta
                        .filter( (num) => num > 50) //ye iske previous ke basis pe operation karta
                        //yahan pe map,filter kuch bhi aur kitne bhi methods use kar sakte(it is called as chaining)

console.log(newNum);


