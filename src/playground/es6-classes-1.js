class Person {
  constructor(name = "Anonymous", age = "0") {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return this.name + " is " + this.age + " years old.";
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += "Their major is:" + this.major;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getDescription();
    if (this.homeLocation) {
      greeting =
        "hi, my name is " + this.name + " and I am from " + this.homeLocation;
    } else {
      greeting = "hi, my name is " + this.name;
    }
    return greeting;
  }
}
const me = new Traveler("Mohammadjavad", 30, "Tehran");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
