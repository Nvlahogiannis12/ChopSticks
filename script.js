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

function calcOpponentHand(selectedOpHand){
  document.getElementById(selectedOpHand).classList.add('selectedPH')
  document.getElementById("opLButton").onclick = null;
  document.getElementById("opRButton").onclick = null;

  const handKey = selectedOpHand === "opLButton" ? "Left" : "Right";
  opponentHandValue = oppHand[handKey];

  alert(opponentHandValue)
  calc()
}
function calc(){
  alert(opponentHandValue + playerHandValue)
}