let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}
function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";
}
function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallComputerWord = "comp".fontsize(3).sub();
result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You win!`;
	const userChoice_dev = document.getElementById(userChoice);
	userChoice_dev.classList.add('green-glow');
	setTimeout(() => userChoice_dev.classList.remove('green-glow'), 500);
}
function lose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallComputerWord = "comp".fontsize(3).sub();
result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You lost...`;
	const userChoice_dev = document.getElementById(userChoice);
	userChoice_dev.classList.add('red-glow');
	setTimeout(() => userChoice_dev.classList.remove('red-glow'), 500);
}
function draw(userChoice, computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallComputerWord = "comp".fontsize(3).sub();
result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a DRAW`;
	const userChoice_dev = document.getElementById(userChoice);
	userChoice_dev.classList.add('gray-glow');
	setTimeout(() => userChoice_dev.classList.remove('gray-glow'), 500);
}
function game(userChoice){
	console.log("User choice is: "+userChoice);
	const computerChoice = getComputerChoice();
	console.log("Computer choice is: "+computerChoice);
	
	switch(userChoice+computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;			
	}
}

function main(){
	rock_div.addEventListener('click', () => game("r"))

	paper_div.addEventListener('click', () => game("p"))

	scissors_div.addEventListener('click',() => game("s"))
}

main();