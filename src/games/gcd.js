import readlineSync from 'readline-sync';
import showName from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const userName = showName();

const gcd = (number1, number2) => {
  const min = (number1 < number2) ? number1 : number2;
  for (let i = min; i > 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(20);
    const number2 = getRandomInt(20);
    console.log(`Question: ${number1}  ${number2}`);
    const answerUser = readlineSync.question('Your answer:');
    const rightAnswer = gcd(number1, number2);

    if (answerUser === String(rightAnswer)) {
      console.log('Correct!');
    } if (answerUser !== String(rightAnswer)) {
      return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default gcdGame;
