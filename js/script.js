"use strict";

let isNumber = function (n) {
  return !isNaN(parseInt(n)) && isFinite(n) && n >= 1 && n <= 100;
};

function guessNumber() {
  const ourNumber = Math.floor(100 * Math.random()) + 1;
  // console.log(ourNumber); -- Читы
  let userNumber = prompt("Угадай число от 1 до 100");
  const checkNumber = function () {
    if (userNumber === null) {
      alert("Игра окончена!");
    } else if (!isNumber(userNumber)) {
      userNumber = prompt("Введите число от 1 до 100!");
      checkNumber();
    } else if (+userNumber === ourNumber) {
      alert("Поздравляю, вы угадали!");
    } else if (userNumber < ourNumber) {
      userNumber = alert("Загаданное число больше");
      checkNumber();
    } else if (userNumber > ourNumber) {
      userNumber = alert("Загаданное число меньше");
      checkNumber();
    }
  };
  checkNumber();
}

guessNumber();
