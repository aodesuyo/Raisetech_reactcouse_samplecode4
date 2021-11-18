class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`こんにちは!${this.name}です～`);
  }
}

const user = new User("テッくん", 20);
console.log(user.name); //テッくん
user.greet(); //こんにちは!テッくんです～
