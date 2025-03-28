// getter and setter: as password ko aacess na krne dena


class User{
  constructor(email, password){
    this.email = email; 
    this.password = password
  }

  // get password(){
  //   return this.password.toUpperCase()  
  // }

  // set password(value){
  //   this.password = value;    //Maximum call stack size exceeded
  // }
  get password(){
    // return this._password.toUpperCase() 
    return `${this._password}hitesh` 
  } 

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
    this._email= value;
  }

  set password(value){
    this._password = value;          
  }
}

const hitesh = new User("shikha@", "abc")
console.log(hitesh.password);
console.log(hitesh.email);
