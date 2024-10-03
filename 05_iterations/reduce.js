const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc :${acc} and currval : ${currval}`);
//     return acc + currval
// },0)
// console.log(myTotal);
//👆in this we have created an array then used reduce on that array and stored it in 'myTotal' variable and simply wrote function and added accumulator + current value
// we have also mentioned 0 that means we are inilializing accumulator with 0 .then it will perfomerm acc+ val =0+1 then after that from next it will store the result of previous acc+curval in new acc

const myTotal = myNums.reduce( (acc,currval)=> acc + currval,0)
console.log(myTotal);
//in this we simply used arrow function and got the same result


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 1999
    },
    {
        itemName : "web dev course",
        price : 1999
    },
    {
        itemName : "mobile app course",
        price : 5999
    },
]
 const itemPrice = shoppingCart.reduce( (acc,item) => acc + item.price,0)
 console.log(itemPrice);
 //in this we have taken [{}] object in the array then used reduced method on that array and calculated the course price..!😊
 



