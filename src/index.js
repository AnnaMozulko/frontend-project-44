/* eslint-disable import/no-extraneous-dependencies */
import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundToWin = 3;

const entryUserName = (sign) => {
  const userName = readlineSync.question(sign);
  const greeting = 'Hello';
  console.log(`${greeting}, ${userName}!`);
  return userName;
};

export default (description, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = entryUserName('May I have your name?');
  const iter = (numWin) => {
    if (numWin === roundToWin) {
      return `Congratulations, ${userName}!`;
    }
    const pair = gameFunc();
    const question = car(pair);
    const rightAnswer = cdr(pair);
    const userAnswer = readlineSync.question(`Question: ${question}\n Your answer: `);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      return iter(numWin + 1);
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
  };
  console.log(iter(0));
};
