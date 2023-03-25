import readlineSync from 'readline-sync';

const showGreeting = () => {
  const userName = readlineSync.question('May I have your name?');
  const greeting = 'Hello';
  console.log(`${greeting}, ${userName}!`);
  return userName;
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isNatural = (task) => {
  for (let i = 2; i <= task / 2; i += 1) {
    if (task % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const task = getRandomInt(20);
    console.log('Question:', task);
    const answerUser = readlineSync.question('Your answer:');
    const rightAnswer = isNatural(task) ? 'yes' : 'no';

    if (answerUser === String(rightAnswer)) {
      console.log('Correct!');
    } if (answerUser !== String(rightAnswer)) {
      return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again!`);
    }
  }
  return console.log('Congratulations!');
};
export { showGreeting, primeGame };
