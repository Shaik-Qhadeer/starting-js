class User {
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`USERNAME is : ${this.username}`);
        
    }
    
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)  //super keyword ki help se apan upar jate username ki value access kare bts this bhi use karleta aur username ki value lake dedeta apne ku
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}
const chai = new Teacher("chai","chai@google.com","123")
// chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);  //instanceof ki help se malum hota kon kiska instance hai

