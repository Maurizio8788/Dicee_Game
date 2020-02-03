var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;


const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const title = document.querySelector('h1');


function diceeGame(n1, n2){

  img1.setAttribute('src', './images/dice' + n1 + '.png');

  img2.setAttribute('src', './images/dice' + n2 + '.png');

  if(n1 === n2){
    title.innerHTML = 'Draw'
  } else if (n1 > n2) {
    title.innerHTML = 'Player 1 Wins!🍾 🏆🍾';
  } else{
    title.innerHTML = 'Player 2 Wins! 🍾🏆🍾';
  }

}

diceeGame(randomNumber1, randomNumber2);
