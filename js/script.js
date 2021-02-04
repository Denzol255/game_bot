"use strict";

let isNumber = function (n) {
  return !isNaN(parseInt(n)) && isFinite(n) && n >= 1 && n <= 100;
};

function guessNumber() {
  let ourNumber = Math.floor(100 * Math.random()) + 1;
  console.log(ourNumber);
  let userNumber = prompt("Угадай число от 1 до 100");
  const checkNumber = function () {
    if (userNumber === null) {
      alert("Игра окончена!");
    } else if (!isNumber(userNumber)) {
      userNumber = prompt("Введите число от 1 до 100!");
      return checkNumber();
    } else if (userNumber == ourNumber) {
      alert("Поздравляю, вы угадали!");
    } else if (userNumber < ourNumber) {
      let increaseNumber = function () {
        userNumber = prompt("Загаданное число больше");
        return checkNumber();
      };
      increaseNumber();
    } else if (userNumber > ourNumber) {
      let reduceNumber = function () {
        userNumber = prompt("Загаданное число меньше");
        return checkNumber();
      };
      reduceNumber();
    }
  };
  checkNumber();
}

guessNumber();
