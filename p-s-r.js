let gameOver = false;
let computerChoices = ['rock', 'paper', 'scissors'];
let score = 0;
let compScore = 0;

function randomFrom(array) {
	return array[Math.floor(Math.random() * 3)];
}

function checkInput(input, computerChoices) {
  console.log("input: "+input)
	if (input === 'quit') {
		alert("Final score: you: "+score+" | computer: "+compScore)
		return true;
	}

	let computerChoice = randomFrom(computerChoices); 
	if (computerChoice === 'rock' && input === 'scissors') {
		alert('Computer picked '+computerChoice+'. Computer wins!');
		compScore++;
		return false;
	} else if (computerChoice === 'scissors' && input === 'paper') {
		alert('Computer picked '+computerChoice+'. Computer wins!');
		compScore++;
		return false;
	} else if (computerChoice === 'paper' && input === 'rock') {
		alert('Computer picked '+computerChoice+'. Computer wins!');
		compScore++;
		return false;
  }else if (computerChoice === input){
    alert('Computer also picked '+computerChoice+'. It\'s a draw');
    return false;
  } else {
		score++;
    alert('Computer picked '+computerChoice+'. You win');
    return false;
  }

}

function start(gameOver, computerChoices) {
	while (!gameOver) {
		let playerInput = prompt('Hi! Enter rock/paper/scissors to play, or quit to stop playing.');
        playerInput = playerInput.trim();
		gameOver = checkInput(playerInput, computerChoices);
		//playerInput = 'paper';
	}
}

start(gameOver, computerChoices);