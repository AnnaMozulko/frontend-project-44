#!/usr/bin/env node

// eslint-disable-next-line import/named
import { showGreeting, progressionGame } from '../src/progression.js';

console.log('Welcome to the Brain Games!');

showGreeting();

console.log('What number is missing in the progression?');

progressionGame();
