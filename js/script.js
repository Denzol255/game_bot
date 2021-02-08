"use strict";

let isNumber = function (n) {
  return !isNaN(parseInt(n)) && isFinite(n) && n >= 1 && n <= 100;
};
function guessNumber() {
  const ourNumber = Math.floor(100 * Math.random()) + 1;
  // console.log(ourNumber) -- Читы
  let userNumber = prompt("Угадай число от 1 до 100");
  let count = 9;
  const checkNumber = function () {
    if (count > 0) {
      if (userNumber === null) {
        alert("Игра окончена!");
      } else if (!isNumber(userNumber)) {
        userNumber = prompt("Введите число от 1 до 100!");
        checkNumber();
      } else if (+userNumber === ourNumber) {
        let choise = confirm("Поздравляю, вы угадали! Хотели бы сыграть еще?");
        if (choise) {
          guessNumber();
        } else {
          alert("Игра окончена!");
        }
      } else if (userNumber < ourNumber) {
        userNumber = prompt(
          `Загаданное число больше, осталось попыток ${count}`
        );
        count--;
        checkNumber();
      } else if (userNumber > ourNumber) {
        userNumber = prompt(
          `Загаданное число меньше, осталось попыток ${count}`
        );
        count--;
        checkNumber();
      }
    } else {
      let choise = confirm("Попытки закончились, хотите сыграть еще?");
      if (choise) {
        guessNumber();
      } else {
        alert("Игра окончена!");
      }
    }
  };
  checkNumber();
}

guessNumber();
