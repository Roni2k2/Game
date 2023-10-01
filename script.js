// Define the range
let low = 1;
let high = 10;
let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
let chances = 3;

while (chances > 0) {
   
    let userGuess = parseInt(prompt(`Guess the number between ${low} and ${high} (${chances} chances left):`));

    if (userGuess === correct_ans) {
        alert("Congratulations! You Win!");
        break; 
    } else if (userGuess < correct_ans) {
        alert("Correct answer is greater!");
    } else {
        alert("Correct answer is smaller!");
    }

    chances--;
}

if (chances === 0) {
    alert(`You lose! The correct answer was ${correct_ans}`);
}
