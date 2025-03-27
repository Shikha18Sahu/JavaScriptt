class User {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`Username: ${this.username}`);
  }

  static createId(){  //static user ko access nai krne deta hai
    return `123`
  }
}

const shikha = new User("shikha")
// console.log(shikha.createId());

class Teacher extends User {
  constructor(username, email){
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone", "i@Phone.com")
iphone.logMe();
console.log(iphone.createId());
