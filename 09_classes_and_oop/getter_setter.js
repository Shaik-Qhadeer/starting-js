//getters and setters(imagine ek company ka confidential password hai jiska access aap sab ku nai dena chahre to aap ye getters use kar sakte ,jiski help se set to original password karte but get karte waqt usme changes kar dete)
class User {
    constructor(email, password){
        this.email = email;
        this.password = password;

    }
    get email(){  //email name ka varible use kare to same name ka method () bhi banana padta
        return this._email.toUpperCase()

    }
    set email(value){
        this._email = value

    }

    get password(){    //bahar se koi value leke aana hai ya get karna hai to getters use karte     
        // return this._password.toUpperCase()  //._ isliye likhe ki apne ku malum hona yahan se get karre bolke
        return `${this._password}shaik`  //iski help se original passwd ke andar shaik add kardiye,to jo bhi access karra usku malum ich nai ki og passwd kya hai😂
    }
    set password(value){   //values set karna hai to setters use karte
        this._password= value   //._ isliye likhe ki apne ku malum hona yahan pe set karre bolke,kyuni constructor bhi values set karta agar ye ._ nai use kare to setter aur constructor ke beech me race lag jati jiske result me stack size exceed hojata
    }
}
const shaik = new User("s@shaik.com","abc")
console.log(shaik.password); //yahan pe ._ use nai karna kyunki upar wo value private type ki thi usku yahan access nai kar sakte
