// const coding = ["js","python","html","css"]

// const values = coding.forEach( (items)=>{
//     console.log(items);
//     return items  //return likhe to bhi nai karta return
// })
// console.log(values); //it will print undefined that means for each will not return any value

// const myNums = [1,2,3,4,5,6,7,8,9,10]
//  myNums.filter( (num)=> num > 4)
//👆yahan pe filter operation use karre aur uske andar call back function use karre
//it is returning value but we are not getting any output because we are not holding it in  any varibles and not printing it
// we wrote the code in one line that too inn paranthesis this is the reason we haven't used return keyword..if we use curly braces{scope}  then we must use return keyword


// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) =>num > 4)
// console.log(newNums);
//we have first created an array then used filter operation and stored it in newNums variable then we print using console

// const newNums = myNums.filter((num) => {
//     return num > 4
    
// })
// console.log(newNums); //we have used curly braces that's why we used 'return' .!

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//  }
// })
// console.log(newNums);
//in this we have created an array then declared 0ne new varible named newNum ,,then applying for each on the array then in that array using if statement and checking condition and using .push to insert in the array and then printing that on the screen.!


const books = [
    {
        title:'Book One', genre :'Fiction',publish :'1981',edition:'2004'
    },
    {
        title:'Book Two', genre :'Non-Fiction',publish :'1992',edition:'2008'
    },
    {
        title:'Book Three', genre :'History',publish :'1999',edition:'2007'
    },
    {
        title:'Book Four', genre :'Non-Fiction',publish :'1989',edition:'2010'
    },
    {
        title:'Book Five', genre :'Science',publish :'2009',edition:'2014'
    },
    {
        title:'Book Six', genre :'Fiction',publish :'1987',edition:'2010'
    },
    {
        title:'Book Seven', genre :'History',publish :'1986',edition:'1996'
    },
    {
        title:'Book Eight', genre :'Science',publish :'2011',edition:'2016'
    }
];

// const userBooks = books.filter( (bk) => bk.genre=== 'History' ) //first we used filter on the data(books.filter) and in that we used call back function and accessing whatever data we want and storing that in userBooks and sisplaying it on console

const userBooks = books.filter( (bk) => bk.genre=== 'History' && bk.publish > 1990 )
console.log(userBooks);





