#!/usr/bin/env node

import { showGreeting, evenGame } from '../src/even.js';

console.log('Welcome to the Brain Games!');

showGreeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

evenGame();
