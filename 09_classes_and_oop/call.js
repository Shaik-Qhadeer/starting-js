function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log('called');    
    
}
function creteUser(username,email,password){
    SetUsername.call(this,username)  //call ki help se hold karke rakhre aur upar jo username hai usku access karre ..and upar wale ka 'this' access karre to upar wala raho ya nai apna statement print hojata  
    this.email = email
    this.password = password

}
const yaba = new creteUser("shaik" , 'sk@yahoo.com', 123)
console.log(yaba);

