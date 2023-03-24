#!/usr/bin/env node

// eslint-disable-next-line import/named
import { showGreeting, calcGame } from '../src/calc.js';

console.log('Welcome to the Brain Games!');

showGreeting();

console.log('What is the result of the expression?');

calcGame();
