#!/usr/bin/env node

// eslint-disable-next-line import/named
import { showGreeting, primeGame } from '../src/prime.js';

console.log('Welcome to the Brain Games!');

showGreeting();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

primeGame();
