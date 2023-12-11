const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verifyNumber = (secretNumber, expectedNumber) => {
  if (expectedNumber === secretNumber) {
    console.log("Adivinaste el numero!");
    console.log("-FIN DEL JUEGO-");
  } else if (expectedNumber > secretNumber) {
    console.log("El numero secreto es menor, intenta de nuevo.");
  } else {
    console.log("El numero secreto es mayor, intena de nuevo.");
  }
};

module.exports = {
  generateRandomNumber,
  verifyNumber,
};
