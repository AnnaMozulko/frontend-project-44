import readlineSync from 'readline-sync';

const showGreeting = () => {
  const userName = readlineSync.question('May I have your name?');
  const greeting = 'Hello';
  console.log(`${greeting}, ${userName}!`);
  return userName;
};

const evenGame = () => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1000);
    console.log('Question:', number);
    const answerUser = readlineSync.question('Your answer:');

    const validation1 = (number % 2 === 0) && (answerUser === 'yes');
    const validation2 = (number % 2 !== 0) && (answerUser === 'no');

    if (validation1 === true || validation2 === true) {
      console.log('Correct!');
    } else {
      const error = (answerUser === 'yes' ? 'no' : 'yes');
      const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${error}'.\nLet's try again!`;
      return console.log(errorMessage);
    }
  }
  return console.log('Congratulations!');
};

export { showGreeting, evenGame };
