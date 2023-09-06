import { cons } from '@hexlet/pairs';
import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const findEvenPair = () => {
  const question = generateRandomNum(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => startGame(description, findEvenPair);
