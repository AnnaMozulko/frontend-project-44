import readlineSync from 'readline-sync';
import showName from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const userName = showName();

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1000);
    console.log('Question:', number);
    const answerUser = readlineSync.question('Your answer:');

    const validation1 = (number % 2 === 0) && (answerUser === 'yes');
    const validation2 = (number % 2 !== 0) && (answerUser === 'no');

    if (validation1 === true || validation2 === true) {
      console.log('Correct!');
    } else {
      const error = (answerUser === 'yes' ? 'no' : 'yes');
      const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${error}'.\nLet's try again, ${userName}!`;
      return console.log(errorMessage);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
