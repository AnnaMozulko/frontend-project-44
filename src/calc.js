import readlineSync from 'readline-sync';

const showGreeting = () => {
  const userName = readlineSync.question('May I have your name?');
  const greeting = 'Hello';
  console.log(`${greeting}, ${userName}!`);
  return userName;
};
const calcGame = () => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(10);
    const number2 = getRandomInt(10);
    const signs = ['+', '-', '*'];
    const sign = signs[getRandomInt(3)];
    const task = `${number1} ${sign} ${number2}`;
    console.log('Question:', task);
    const answerUser = readlineSync.question('Your answer:');

    let rightAnswer = 0;
    switch (sign) {
      case '+':
        rightAnswer = number1 + number2;
        break;
      case '-':
        rightAnswer = number1 - number2;
        break;
      case '*':
        rightAnswer = number1 * number2;
        break;
      default:
        rightAnswer = null;
    }
    if (answerUser === String(rightAnswer)) {
      console.log('Correct!');
    } if (answerUser !== String(rightAnswer)) {
      return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again!`);
    }
  }
  return console.log('Congratulations!');
};

export { showGreeting, calcGame };
