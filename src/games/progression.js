import { cons } from '@hexlet/pairs';
import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';
const length = 10;

const findProgressionPair = () => {
  const questionIndex = generateRandomNum(1, length - 1);
  const start = generateRandomNum(1, 10);
  const diff = generateRandomNum(1, 5);

  let question = '';
  for (let i = 0; i < length; i += 1) {
    const nextElem = (i === questionIndex) ? '..' : start + (diff * i);
    question += `${nextElem} `;
  }
  const rightAnswer = start + questionIndex * diff;
  return cons(question, String(rightAnswer));
};

export default () => startGame(description, findProgressionPair);
