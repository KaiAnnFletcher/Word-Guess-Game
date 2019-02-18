//My failed attempts at code have been commented out
//1) Create an array of composers and other variables
//necessary for the game
//2)Define the functions and decide when they will be run
var composerArray = ["bach",
               "mozart",
               "beethoven",
               "wagner",
               "haydn",
               "brahms",
               "janacek",
               "schumann",
               "schubert",
               "handel",
               "tchaikovsky",
               "bartholdy",
               "dvorak",
               "liszt",
               "chopin",
               "stravinsky",
               "mahler",
               "shostakovich",
               "strauss",
               "debussy"];

var lettersInRandomWord = [];
var remainingGuesses = [];
var charGuessed = "";
var incorrectGuesses = [];
var spaces = 0;
var mixedSpaces = [];
var randomWord = "";
var wins = 0;
var losses = 0;
var totalGuesses = 8;

/*//audio function
function playSonata(){
var audioElement = document.createElement("audio");
audioElement.setAttribute("src","./assets/moonlight_sonata.mp3"); //get mp3 file instead
document.getElementbyId("#moonlight").play();
}*/

function startOfGame(event) {
//variable settings for startOfGame function - this sets it so the player can begin
randomWord = composerArray[Math.floor(Math.random()*composerArray.length)];

totalGuesses=8;

lettersInRandomWord=randomWord.split("");
spaces=lettersInRandomWord.length;

console.log(randomWord);
//incorrect:var newDiv=document.getElementById("Current");
//incorrect:var content = document.createTextNode(lettersInRandomWord);
//incorrect:newDiv.appendChild(lettersInRandomWord);

mixedSpaces = [];
incorrectGuesses = [];

for (var i=0; i < spaces; i++); {
  mixedSpaces.push("_");
}
console.log(mixedSpaces);

document.getElementById("Current").innerHTML=mixedSpaces.join(" ");
document.getElementById("Remaining").innerHTML=totalGuesses;
document.getElementById("Guessed").innerHTML=incorrectGuesses.join(" ");
}

function comparisons(letter) {
// set false and set true by defining what makes the variable guess true
var guess = false;
//loop through for a true letter
for (var i=0; i < spaces; i++) {
  if (randomWord[i] === letter) {
    guess = true;
  }
}
// on check, if a letter in the random is a match, fill it in
if (guess) {
    for (var f = 0; f < spaces; f++) {
      if(randomWord[f] === letter) {
      mixedSpaces[f] = letter;
      }
    }
console.log(mixedSpaces);
}
// otherwise push a letter to the incorrect guesses

else {
  incorrectGuesses.push(letter);
  totalGuesses--;
}
}

// ensures updates to the HTML divs as the game progresses
function pushUpdate() {
  document.getElementById("Remaining").innerHTML = totalGuesses;
  document.getElementById("Current").innerHTML = mixedSpaces.join(" ");
  document.getElementById("Guessed").innerHTML = incorrectGuesses.join(" ");

if (lettersInRandomWord.toString() === mixedSpaces.toString()) {
  wins++;
  alert("Winner");

  document.getElementById("Wins").innerHTML = wins;

  // Reset after wins updated
  startOfGame();
}

else if (totalGuesses === 0) {
  losses++;
  alert("Loser");
  document.getElementById("Losses").innerHTML = losses;

  startOfGame();
}
}

//Now we run the functions sequentially

startOfGame();

document.onkeydown = function(event) {

  charGuessed = String.fromCharCode(event.which).toLowerCase();
  
  comparisons(charGuessed);

pushUpdate();
}
