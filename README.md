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