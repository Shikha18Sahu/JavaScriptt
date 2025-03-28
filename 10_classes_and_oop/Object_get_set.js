const User = {
   _email: 's@ss.com',
   _password: "xyz",


   get email(){
    return this._email.toUpperCase()
   },
   
   set email(value){
      this._email= value;;
   }
}


// Factory function

const tea = Object.create(User)
console.log(tea.email);

console.log(tea._email);


//es2022 private properties proposal