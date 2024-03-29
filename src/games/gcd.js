import { cons } from '@hexlet/pairs';
import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (numOne, numTwo) => {
  const min = (numOne < numTwo) ? numOne : numTwo;
  for (let i = min; i > 1; i -= 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      return i;
    }
  }
  return 1;
};

const findGCDPair = () => {
  const numOne = generateRandomNum(1, 100);
  const numTwo = generateRandomNum(1, 100);
  const question = `${numOne} ${numTwo}`;
  const rightAnswer = findGCD(numOne, numTwo);
  return cons(question, String(rightAnswer));
};

export default () => startGame(description, findGCDPair);
