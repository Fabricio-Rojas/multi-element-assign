'use strict';

/*
    JavaScript Basics

    Assignment 6
*/

// ---------------------- Declaring Document Elements ----------------------

// Display Elements
const pastInp = document.querySelector('.past-inp');
const numInp = document.querySelector('.num-inp');

// Buttons
const clearBtn = document.querySelector('.g-span-3');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const dotBtn = document.querySelector('#dot');
const divisBtn = document.querySelector('#divis');
const timesBtn = document.querySelector('#times');
const subBtn = document.querySelector('#sub');
const addBtn = document.querySelector('#add');
const equalsBtn = document.querySelector('#equals');

// ---------------------- Calculator Functions ----------------------

// All Alphabetic Characters
const nonValidChars = /[a-zA-Z]/;

// Validate Function
function notLetter(inp) {
    if (inp.length > 0 && !nonValidChars.test(inp)) {
        return true;
    }
    return false;
};

// Calculate Function
equalsBtn.addEventListener('click', function() {
    let a = numInp.value.trim();

    // I googled this, decided to add it because i didn't want
    // to leave errors when the input ends in an operator
    try {
        eval(a);
    } catch {
        numInp.value = 'Error: Weird Equation';
        pastInp.innerText = a;
    }

    // Apperently eval() isn't supposed to be used, but I found it's 
    // the easiest solution
    if (notLetter(a)) {
        numInp.value = eval(a);
        pastInp.innerText = a;
    } else {
        numInp.value = 'Please enter numbers!';
    };
})

// ---------------------- Button Functions ----------------------

// Just add their values to the input, just seing the line count makes me think
// there is probably a better answer, but i'll just leave it at this

clearBtn.addEventListener('click', function() {
    pastInp.innerText = '';
})

oneBtn.addEventListener('click', function() {
    numInp.value += '1';
});

twoBtn.addEventListener('click', function() {
    numInp.value += '2';
});

threeBtn.addEventListener('click', function() {
    numInp.value += '3';
});

fourBtn.addEventListener('click', function() {
    numInp.value += '4';
});

fiveBtn.addEventListener('click', function() {
    numInp.value += '5';
});

sixBtn.addEventListener('click', function() {
    numInp.value += '6';
});

sevenBtn.addEventListener('click', function() {
    numInp.value += '7';
});

eightBtn.addEventListener('click', function() {
    numInp.value += '8';
});

nineBtn.addEventListener('click', function() {
    numInp.value += '9';
});

zeroBtn.addEventListener('click', function() {
    numInp.value += '0';
});

dotBtn.addEventListener('click', function() {
    numInp.value += '.';
});

divisBtn.addEventListener('click', function() {
    numInp.value += ' / ';
});

timesBtn.addEventListener('click', function() {
    numInp.value += ' * ';
});

subBtn.addEventListener('click', function() {
    numInp.value += ' - ';
});

addBtn.addEventListener('click', function() {
    numInp.value += ' + ';
});