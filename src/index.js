import readlineSync from 'readline-sync';
import calc from './calc.js';

const showGreeting = () => {
  const userName = readlineSync.question('May I have your name?');
  const greeting = 'Hello';
  console.log(`${greeting}, ${userName}!`);
  return userName;
};

const basisOfGames = () => {
  for (let i = 0; i < 3; i += 1) {
    const pairOfQuestionAndResult = calc();

    console.log('Question: ', pairOfQuestionAndResult[0]);

    const answerUser = readlineSync.question('Your answer: ');

    const rightAnswer = pairOfQuestionAndResult[1];

    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again!`);

      return;
    }
  }

  console.log('Congratulations!');
};

export default { showGreeting, basisOfGames };

let result = 0;
    switch (sign) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        result = null;
    }
    return [task, result];
