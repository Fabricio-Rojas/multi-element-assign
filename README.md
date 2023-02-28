## How to properly use ```.querySelectorAll()```

Let's say that you want to make a project in which you use lots of the same
repeated element, and you want to add an event listener to all the elements.
What some people might do, as well as what I did originally, was to use 
```.querySelector()``` for each specific button and then add an event listener
to each one individually.

As you might guess, this isn't very efficient and leads to ugly code, as you 
have to fill multiple lines with all the query selector as well as the event
listeners.

A simple, easy method that I just learned might just be of use to you, I'm 
talking about using ```.querySelectorAll()``` and ```.forEach()```.

As you may or may not know, unlike ```.querySelector()``` that only gives you 
the first element that fits, ```.querySelectorAll()``` gives you a *Node list*,
a node list acts similar to an array and that is ideal for what we are going to
do next.

### Implementation

In this repository I added a project I did where I made a calculator, but I made
the mistake of overusing ```.querySelector()```, leading to this kind of code:

```javascript
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

// ---------------------- Button Functions ----------------------
clearBtn.addEventListener('click', function() {
    pastInp.innerText = '';
})

oneBtn.addEventListener('click', function() {
    numInp.value += '1';
});

twoBtn.addEventListener('click', function() {
    numInp.value += '2';
});

// Etc. I repeat this for all buttons.
```

Instead of bloating your code with this kind of practice, you can just try this:

```javascript
// -------------------------- Buttons --------------------------
const clearBtn = document.querySelector('.g-span-3');
const equalsBtn = document.querySelector('#equals');
// these .querySelector() elements have specific purposes

const inpBtns = document.querySelectorAll("input[type='button']")

// ---------------------- Button Functions ----------------------
clearBtn.addEventListener('click', function() {
    pastInp.innerText = '';
});
// This is one such purpose

inpBtns.forEach(inpBtns => inpBtns.addEventListener('click', function() {
    numInp.value += inpBtns.value;
}));
```

Implementing this solution helped me a lot, as it almost halved the amount of 
lines the original code used, from 137 lines to just 68.

### References

As much I would like to take credit and say that I came to this conclusion myself,
but in reality I happened to learn it from some helpful individuals on Stack Overflow:

https://stackoverflow.com/questions/12362256/addeventlistener-on-nodelist