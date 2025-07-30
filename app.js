// const max = prompt("enter max.");
// const  random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("enter ur guess");

// while(true) {
//     if(guess== "quit") {
//         console.log("user quit.");
//         break;
//     }

//     if(guess == random)
//     {
//         console.log("congrats");
//         break;
//     }
//     else if(guess < random) {
//         guess = prompt("guess too small,try again.");
//     }
//     else {
//         guess = prompt("guess too large,try again");
//     }
// }



const max = Number(prompt("Enter max.")); // Convert max to a number
if (isNaN(max) || max <= 0) {
    console.log("Please enter a valid positive number for max.");
} else {
    const random = Math.floor(Math.random() * max) + 1;
    let guess = prompt("Enter your guess");

    while (true) {
        if (guess === "quit") {
            console.log("User quit.");
            break;
        }

        guess = Number(guess); // Ensure guess is a number

        if (guess === random) {
            console.log("Congrats! You guessed correctly.");
            break;
        } else if (guess < random) {
            guess = prompt("Guess too small, try again.");
        } else {
            guess = prompt("Guess too large, try again.");
        }
    }
}
