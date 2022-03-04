const readlineSync = require("readline-sync");

// let name = readlineSync.question("What is your name? ");

let answer = "";
while(answer !== "STOP"){

    answer = readlineSync.question("What is your name? ");
    
    console.log("Hello " + answer);
}
