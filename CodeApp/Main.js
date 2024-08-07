const { question } = require("readline-sync");

const command = question("Enter Your Command: ");

class Main {
  constructor(name) {
    this.name = name;
    // this.age = age;
  }

  GetWelcomeMessage() {
    console.log("Welcome " + this.name);
  }
}

if (command.length == 0) {
  console.log("You Entered Nothing: ");
  return;
} else {
  const Name = question("Enter Name: ");
  const m = new Main(Name);
  m.GetWelcomeMessage();
}
