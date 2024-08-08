import { question } from "readline-sync";
import { isEmpty } from "./isEmpty.js";

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

for (let i = 0; i < 1; i++) {
  if (command.length == 0) {
    console.log("You Entered Nothing: ");
  } else {
    const Name = question("Enter Name: ");

    if (isEmpty(Name)) {
      console.log("Empty..");
    } else {
      const m = new Main(Name[i]);
      m.GetWelcomeMessage();

      if (Name.length > 1) {
        const option = question("Enter Type of Option: ");
        if (option[i] == "/") {
          console.log("Home Page");
        }
      }
    }
  }
}
