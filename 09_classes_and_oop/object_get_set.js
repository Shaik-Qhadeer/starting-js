const User = {
    _email : 's@shaik.com',  // _underscore bolta ki private property hai har kisi ku iska access nai milta
    _password :"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

