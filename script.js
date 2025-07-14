let playerHandValue;
let opponentHandValue;
//Objects For Player Hands
let playerHand = {
  Left:1,
  Right:1,
};

let oppHand = {
  Left: 1,
  Right: 1,
};
UpdateHands()
function UpdateHands(){
  document.getElementById('playerLeft').innerText = playerHand.Left;
  document.getElementById('playerRight').innerText = playerHand.Right;
  document.getElementById('oppLeft').innerText = oppHand.Left;
  document.getElementById('oppRight').innerText = oppHand.Right;
}
//when Tap is clicked adds event listener to the player hand for onclick
function tapping(){
 document.getElementById("playLButton").onclick = () => {
    calcPlayerHand("playLButton");
  };

  document.getElementById("playRButton").onclick = () => {
    calcPlayerHand("playRButton");
  };
}
//adds selected class turns off event listener
function calcPlayerHand(selectedHand){
  document.getElementById(selectedHand).classList.add('selectedPH')
  document.getElementById("playLButton").onclick = null;
  document.getElementById("playRButton").onclick = null;

  //if statement to determine if its the left or right hand
  const handKey = selectedHand === "playLButton" ? "Left" : "Right";
  //Goes into the object and takes the hand based on which hand
  playerHandValue = playerHand[handKey];
  alert(playerHandValue);

  document.getElementById("opLButton").onclick = () => {
    calcOpponentHand("opLButton");
  };

  document.getElementById("opRButton").onclick = () => {
    calcOpponentHand("opRButton");
  };
}

let selectedOpponentHandKey;

function calcOpponentHand(selectedOpHand){
  document.getElementById(selectedOpHand).classList.add('selectedPH')
  document.getElementById("opLButton").onclick = null;
  document.getElementById("opRButton").onclick = null;
  selectedOpponentHandKey = selectedOpHand === "opLButton" ? "Left" : "Right";
  opponentHandValue = oppHand[selectedOpponentHandKey];

  alert(opponentHandValue);
  calc();
}

function calc(){
  //Calculates the new total. % 5 keeps it between a range of 0 - 4 so when hits 5 itll be 0
  const total = (opponentHandValue + playerHandValue) % 5;
  oppHand[selectedOpponentHandKey] = total;
  alert(total);
  UpdateHands();
}