import readlineSync from 'readline-sync';

const showName = () => {
  console.log('Welcome to the Brain Games! ');
  const userName = readlineSync.question('May I have your name?');
  const greeting = 'Hello';
  console.log(`${greeting}, ${userName}!`);
  return userName;
};

export default showName;
