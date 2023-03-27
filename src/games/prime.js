/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import showName from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const userName = showName();

const isNatural = (task) => {
  for (let i = 2; i <= task / 2; i += 1) {
    if (task % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const task = getRandomInt(1, 20);
    console.log('Question:', task);
    const answerUser = readlineSync.question('Your answer:');
    const rightAnswer = isNatural(task) ? 'yes' : 'no';

    if (answerUser === String(rightAnswer)) {
      console.log('Correct!');
    } if (answerUser !== String(rightAnswer)) {
      return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default primeGame;
