import { cons } from '@hexlet/pairs';
import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const operation = () => {
const signs = ['+', '-', '*'];
const sign = signs[getRandomInt(signs.length)]; 
return sign;
};

const findCalcPair = () => {
      const numOne = generateRandomNum(3, 10);
      const numTwo = generateRandomNum(1, 2);
      const sign = operation();
      let rightAnswer;
      let question;
      switch (sign) {
        case '0':
          question = `${numOne} + ${numTwo}`;
          rightAnswer = numOne + numTwo;
          break;
        case '1':
          question = `${numOne} - ${numTwo}`;
          rightAnswer = numOne - numTwo;
          break;
        default:
          question = `${numOne} * ${numTwo}`;
          rightAnswer = numOne * numTwo;
      }
      return cons(question, String(rightAnswer));
    };

export default () => startGame(description, findCalcPair);
