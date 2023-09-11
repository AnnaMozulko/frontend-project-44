import readlineSync from 'readline-sync';

const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  const greeting = 'Hello';
  console.log(`${greeting}, ${userName}!`);
};
export default showGreeting;
