const max = prompt("Enter a maximum number");
let num = Math.floor(Math.random()*max) + 1;

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("You quit!");
        break;
    } else if(guess != num) {
        if(guess > num) {
            guess = prompt("guess is larger than the number !try again");
        } else {
            guess = prompt("guess is smaller than the number !try again");
        }
        
    } else if(guess == num) {
        console.log("Correct");
        break;
    } else {
        console.log("Wrong input");
    }
}

//random game