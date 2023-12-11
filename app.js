const readlineSync = require("readline-sync");
const { generateRandomNumber, verifyNumber } = require("./randomNumber");

const getUserNumber = () => {
  return parseInt(readlineSync.question("Ingresa un numero: "));
};

const startGame = () => {
  const secretNumber = generateRandomNumber();
  let expectedNumber = 0;

  console.log("Bienvenido a Adivina el Numero Secreto!");
  console.log("Intenta adivinar el numero del 1 al 100.");

  while (expectedNumber !== secretNumber) {
    expectedNumber = getUserNumber();
    verifyNumber(secretNumber, expectedNumber);
  }
};

startGame();
