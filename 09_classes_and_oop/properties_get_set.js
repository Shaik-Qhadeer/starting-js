//function based syntax for get_set

function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email', {  //3 parameters liye this-upar wala dera le bhai bolke,'email' jo access karre ,{get ,set --values set aur get karre}
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
   
    })
    Object.defineProperty(this, 'password' , {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })

}
const shaik = new User("yaba@fb.com","shaik")
console.log(shaik.password);
