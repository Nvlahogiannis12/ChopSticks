let playerHandValue;
let opponentHandValue;
let swappingHand = false;
let newPlayerLeft;
let newPlayerRight;
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
  if (swappingHand === true){
  document.getElementById('playerLeft').innerText = newPlayerLeft;
  document.getElementById('playerRight').innerText = newPlayerRight;
  } else {
  document.getElementById('playerLeft').innerText = playerHand.Left;
  document.getElementById('playerRight').innerText = playerHand.Right;
  document.getElementById('oppLeft').innerText = oppHand.Left;
  document.getElementById('oppRight').innerText = oppHand.Right;
  }
}
//when Tap is clicked adds event listener to the player hand for onclick
function playerTapping(){
  document.getElementById('playerActions').classList.add('d-none')
  document.getElementById('playerTappingActions').classList.remove('d-none')

 document.getElementById("playLButton").onclick = () => {
    if (playerHand.Left){calcPlayerHand("playLButton")};
  };

  document.getElementById("playRButton").onclick = () => {
    if (playerHand.Right){calcPlayerHand("playRButton")};
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
    if (oppHand.Left){calcOpponentHand("opLButton")};
  };

  document.getElementById("opRButton").onclick = () => {
    if (oppHand.Right){calcOpponentHand("opRButton")};
  };
}
//Cancel tapping action
function cancelTapp(){
  document.getElementById('playerActions').classList.remove('d-none')
  document.getElementById('playerTappingActions').classList.add('d-none')
  //Removes all things with selectedPH class 
  document.querySelectorAll('.selectedPH').forEach((el) => {
    el.classList.remove('selectedPH');
  });
  document.getElementById("playLButton").onclick = null;
  document.getElementById("playRButton").onclick = null;
  document.getElementById("opLButton").onclick = null;
  document.getElementById("opRButton").onclick = null;
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
  //Calculates the new total. % 5 keeps it between a range of 0 - 4 so when hits 5 it'll be 0
  const total = (opponentHandValue + playerHandValue) % 5;
  oppHand[selectedOpponentHandKey] = total;
  alert(total);
  UpdateHands();
  document.getElementById('playerActions').classList.remove('d-none')
  document.getElementById('playerTappingActions').classList.add('d-none')
  //Removes all things with selectedPH class 
  document.querySelectorAll('.selectedPH').forEach((el) => {
    el.classList.remove('selectedPH');
  });
turnSwitch('opponent')
}

/* SPLIT CODE */
function playerSplitting(direction) {
  document.getElementById('playerActions').classList.add('d-none')
  document.getElementById('playerSwapActions').classList.remove('d-none')
  document.getElementById('playerSwaps').classList.remove('d-none')

  if (!swappingHand) {
    swappingHand = true;
    newPlayerLeft = playerHand.Left;
    newPlayerRight = playerHand.Right;
  }

  if (direction === "leftPMove") {
    if (newPlayerRight - 1 >= 0 && newPlayerLeft + 1 < 5) {
      newPlayerLeft++;
      newPlayerRight--;
      UpdateHands();
    }
    return;
  }

  if (direction === "rightPMove") {
    if (newPlayerLeft - 1 >= 0 && newPlayerRight + 1 < 5) {
      newPlayerLeft--;
      newPlayerRight++;
      UpdateHands();
    }
    return;
  }

  if (direction === "confirm") {
    const sameAsBefore = 
    (newPlayerLeft === playerHand.Left && newPlayerRight === playerHand.Right);

    if (sameAsBefore) {
      alert("Invalid split");
      return;
    }
    // Apply split
    playerHand.Left = newPlayerLeft;
    playerHand.Right = newPlayerRight;
    swappingHand = false;

  document.getElementById('playerActions').classList.remove('d-none')
  document.getElementById('playerSwapActions').classList.add('d-none')
  document.getElementById('playerSwaps').classList.add('d-none')
    UpdateHands();
    turnSwitch('opponent')
    return;
  }
  if (direction === "cancel") {
    swappingHand = false;
  document.getElementById('playerActions').classList.remove('d-none')
  document.getElementById('playerSwapActions').classList.add('d-none')
  document.getElementById('playerSwaps').classList.add('d-none')
    UpdateHands();
    return;
  }
}

/*
VS COMPUTER STRAT TO CODE
if Hand >= 5 after attack go for that hand
If not attack smallest number unless it can kill you
if 1 hand 2 more than the other than swap hands
if any of the player hands can kill then swap
*/

/*TURN SWITCH*/
function turnSwitch(turn){
  if (turn == 'opponent'){
    document.getElementById('playerActions').classList.add('d-none')
    opponentComputing()
  } else if (turn == 'player'){
    document.getElementById('playerActions').classList.remove('d-none')
  }
}

function opponentComputing(){
  if(oppHand.Left + playerHand.Left >= 5 || oppHand.Left + playerHand.Right >= 5 || oppHand.Right + playerHand.Left >= 5 || oppHand.Right + playerHand.Right >= 5){}
}