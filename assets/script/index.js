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
const equalsBtn = document.querySelector('#equals');

const inpBtns = document.querySelectorAll("input[type='button']")

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

inpBtns.forEach(inpBtns => inpBtns.addEventListener('click', function() {
    numInp.value += inpBtns.value;
}))