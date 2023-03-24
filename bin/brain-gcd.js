#!/usr/bin/env node

// eslint-disable-next-line import/named
import { showGreeting, gcdGame } from '../src/gcd.js';

console.log('Welcome to the Brain Games!');

showGreeting();

console.log('Find the greatest common divisor of given numbers.');

gcdGame();
