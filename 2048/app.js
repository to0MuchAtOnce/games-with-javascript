document.addEventListener('DOMContentLoaded', () => {
  const gridDisplay = document.querySelector('.grid');
  const scoreDisplay = document.querySelector('#score');
  const resultDisplay = document.querySelector('result');
  const width = 4;
  squares = [];

  // CREATE A BOARD
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      square = document.createElement('div');
      square.innerHTML = 0;
      gridDisplay.appendChild(square);
      squares.push(square);
    }
    generate();
    generate();
  }
  createBoard();

  // GENERATE RANDOM NUMBER
  function generate() {
    let = randomNumber = Math.floor(Math.random() * squares.length);
    if (squares[randomNumber].innerHTML == 0) {
      squares[randomNumber].innerHTML = 2;
    } else generate();
  }

  // SWIPE RIGHT
  function moveRight() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;
        let row = [
          parseInt(totalOne),
          parseInt(totalTwo),
          parseInt(totalThree),
          parseInt(totalFour),
        ];

        console.log(row);
      }
    }
  }

  moveRight();
});
