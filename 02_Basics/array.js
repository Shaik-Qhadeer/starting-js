const Arr1 = [0,1,2,3,4]
// console.log(Arr1);

const Arr2 = new Array(0,1,2,3,4,5)
// console.log(Arr2);


//Array methods

Arr1.push(5) // push value at the end of array
// console.log(Arr1);

Arr1.pop()  //pop the last value in the array
// console.log(Arr1);

Arr1.unshift(6) //insert the element at the start
// console.log(Arr1);

Arr1.shift()  // remove the element from the start
// console.log(Arr1);

// console.log(Arr1.includes(7));
// console.log(Arr1.includes(2));
// console.log(Arr1.indexOf(3));
// console.log(Arr1.indexOf(9));

// const newArr = Arr1.join()
// console.log(newArr);
//  console.log(Arr1);



// splice and slice
// console.log("A ",Arr1);

const myn1 =Arr1.slice(1,3)  //range will not be included only 1,2 will include and 3 will be excluded
// console.log(myn1);
// console.log("B ",Arr1);

const myn2 = Arr1.splice(1,3)  // range all also included that means 1,2,3 all are included
// console.log(myn2);
// console.log("C ",Arr1);

//the main difference between slice and splice is not only about range but also about(slice me array change nai hota but splice me agar array[0,1,2,3,4] hai aur mai splice operation perfoem kara to Arr1.splice(1,3) to fir 1,2,3 remove hojate original array me se aur sirf [0,4] rahta bas)

// Array part 2

const da_seekers = ["qhadeer","zayeem","sultan"]
const da_bugslayrs =["asim","zaheer","kashfur"]
// da_seekers.push(da_bugslayrs)  //push kare to new varible ki zarurat nai hai value hold karne ke lie
// console.log(da_seekers);

const all_members= da_seekers.concat(da_bugslayrs)  //lekin jab bhi conacat use karte new variable me output store hota
// console.log(all_members);

//we can merge two arrays by using "spread operator"

const all_team_members = [...da_seekers, ...da_bugslayrs]
console.log(all_team_members);
























