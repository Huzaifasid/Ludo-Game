const ludoGame = () => {
  const player1 = Math.floor(Math.random() * 6) + 1;

  const p1Dice = `images/dice${player1}.png`;

  document.getElementById("dice1").setAttribute("src", p1Dice);
  const player2 = Math.floor(Math.random() * 6) + 1;

  const p2Dice = `images/dice${player2}.png`;

  document.getElementById("dice2").setAttribute("src", p2Dice);

  if (player1 > player2) {
    document.querySelector("h1").innerHTML = `Player 1 Won`;
  } else if (player2 > player1) {
    document.querySelector("h1").innerHTML = `Player 2 Won`;
  } else {
    document.querySelector("h1").innerHTML = `Draw`;
  }
};
