import readlineSync from 'readline-sync';

const showGreeting = () => {
  const userName = readlineSync.question('May I have your name?');
  const greeting = 'Hello';
  console.log(`${greeting}, ${userName}!`);
  return userName;
};

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
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(20);
    const number2 = getRandomInt(20);
    const task = `${number1}  ${number2}`;
    console.log('Question:', task);
    const answerUser = readlineSync.question('Your answer:');
    const rightAnswer = gcd(number1, number2);

    if (answerUser === String(rightAnswer)) {
      console.log('Correct!');
    } if (answerUser !== String(rightAnswer)) {
      return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again!`);
    }
  }
  return console.log('Congratulations!');
};
export { showGreeting, gcdGame };
