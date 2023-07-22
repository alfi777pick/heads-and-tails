let start_button = document.querySelector('.start__button');
let start_result = document.querySelector('.start');
start_button.addEventListener('click', start_game);

function start_game() {
  
  return math_random() < 50 ? start_result.innerHTML = "<h1>Heads</h1>" : start_result.innerHTML = "<h1>Tails</h1>";
}

function math_random() {
  return Math.floor(Math.random() * 100);
}