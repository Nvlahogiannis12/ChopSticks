
//Objects For Player Hands
let playerHand = {
Left:1,
Right:1,
};

let oppHand = {
    Left: 1,
    Right: 1,
};

function tapping(){
document.getElementById("opLButton").addEventListener("click", () => {
  calcHand(left)
});
document.getElementById("opRButton").addEventListener("click", () => {
  calcHand(right)
});
}