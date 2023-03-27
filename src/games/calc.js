import readlineSync from 'readline-sync';
import showName from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const userName = showName();

const calcGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(10);
    const number2 = getRandomInt(10);
    const signs = ['+', '-', '*'];
    const sign = signs[getRandomInt(3)];
    const task = `${number1} ${sign} ${number2}`;
    console.log('Question:', task);
    const answerUser = readlineSync.question('Your answer:');

    let rightAnswer = 0;
    switch (sign) {
      case '+':
        rightAnswer = number1 + number2;
        break;
      case '-':
        rightAnswer = number1 - number2;
        break;
      case '*':
        rightAnswer = number1 * number2;
        break;
      default:
        rightAnswer = null;
    }
    if (answerUser === String(rightAnswer)) {
      console.log('Correct!');
    } if (answerUser !== String(rightAnswer)) {
      return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
