/* eslint-disable no-console */
'use strict';

function jediName(firstName, lastName) {
  return lastName.slice(0,2) + firstName.slice(0,1);
}

function beyond(num) {
  if(num === Infinity) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  }
}

function decode(sentence) {
  let encodedWord = sentence.split(' ');
  let decoded = '';
  for(let i = 0; i < encodedWord.length; i++) {
    if(encodedWord[i][0] === 'a') {
      decoded += encodedWord[i][1];
    } else if (encodedWord[i].substr(0,1) === 'b') {
      decoded += encodedWord[i][2];
    } else if (encodedWord[i].slice(0,1) === 'c') {
      decoded += encodedWord[i][3];
    } else if (encodedWord[i].substring(0,1) === 'd') {
      decoded += encodedWord[i][4];
    } else {
      decoded += ' ';
    }
  }
  return decoded;
}

decode('craft block argon meter bells brown croon droop');

function daysInMonth(month, leapYear) {
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days`;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return `${month} has 30 days`;
    break;
  case 'February':
    if(leapYear === true) {
      return `${month} has 29 days`;
    } else {
      return `${month} has 28 days`;
    }
    break;
  default:
    throw new Error('Must provide a valid month.');
    break;
  }
}

function rockPaperScissors(num) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if (num < 1 || num > 3) {
    throw new Error('Number must be 1, 2, or 3');
  } else if (num === randomNo) {
    return 'Tie!';
  } else if (num === 1) {
    if (randomNo === 2) {
      return 'Computer wins!';
    } else if (randomNo === 3) {
      return 'Player wins!';
    }
  } else if (num === 2) {
    if (randomNo === 1) {
      return 'Player wins!';
    } else if (randomNo === 3) {
      return 'Computer wins!';
    } 
  } else {
    if (randomNo === 1) {
      return 'Computer wins!';
    } else if (randomNo === 2) {
      return 'Player wins!';
    }
  }
}