'use strict'

/* ======================================== */
/*                Variables                 */
/* ======================================== */

let
  $screen = document.querySelector('#screen'),
  $numbers = document.querySelectorAll('.lead');




/* ======================================== */
/*                Constants                 */
/* ======================================== */



/* ======================================== */
/*                Functions                 */
/* ======================================== */

function displayDot(key) {
  let screen = $screen.innerHTML;

  if (screen.indexOf(".") === -1) {
    screen.innerHTML = screen + key;
  };
};

function displayNumber(key) {
  let screen = $screen.innerHTML;

  if (screen === "0") {
    buttonAC.innerHTML = "C";
    $screen.innerHTML = key;
  } else {
    $screen.innerHTML = screen + key;
  };
}

for (let i = 0; i < $numbers.length; i++) {
  $numbers[i].addEventListener("click", () => {

    if ($numbers[i].innerHTML === ".") {
      displayDot($numbers[i].innerHTML);
    } else {
      displayNumber($numbers[i].innerHTML);
    }

  });
};

/* ======================================== */
/*                 Events                   */
/* ======================================== */



