import { cons } from '@hexlet/pairs';
import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const findCalcPair = () => {
  for (let i = 0; i < 3; i += 1) {
    const numOne = generateRandomNum(3, 10);
    const numTwo = generateRandomNum(1, 2);
    const signs = ['+', '-', '*'];
    const sign = signs[getRandomInt(signs.length)];

    const verity = () => {
      let rightAnswer = 0;
      switch (sign) {
        case '+':
          rightAnswer = numOne + numTwo;
          break;
        case '-':
          rightAnswer = numOne - numTwo;
          break;
        case '*':
          rightAnswer = numOne * numTwo;
          break;
        default:
          rightAnswer = null;
      }
      return rightAnswer;
    };

    const question = `${numOne} ${sign} ${numTwo}`;
    const rightAnswer = verity();
      return cons(question, String(rightAnswer));
  }
};

export default () => startGame(description, findCalcPair);
