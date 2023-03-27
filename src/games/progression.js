import readlineSync from 'readline-sync';
import showName from '../index.js';

const userName = showName();
const length = 10;
const getRandomInt = (max) => Math.floor(Math.random() * max);

const progression = (questionIndex, start, diff) => {
  let question = '';
  let rightAnswer = '';
  for (let i = 0; i < length; i += 1) {
    const nextElem = (i === questionIndex) ? '..' : start + (diff * i);
    question += ` ${nextElem}`;
  }
  rightAnswer = start + questionIndex * diff;
  return [question, rightAnswer];
};

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const questionIndex = getRandomInt(length - 1);
    const start = getRandomInt(10);
    const diff = getRandomInt(5);
    const values = progression(questionIndex, start, diff);
    console.log('Question:', values[0]);
    const answerUser = readlineSync.question('Your answer:');
    const rightAnswer = values[1];
    if (answerUser === String(rightAnswer)) {
      console.log('Correct!');
    } if (answerUser !== String(rightAnswer)) {
      return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default progressionGame;
