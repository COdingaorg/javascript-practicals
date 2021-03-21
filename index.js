let name="John",
    admin=name;
    //Interaction.
let age=prompt('How old are you?',['years']);
alert( `you are ${age} years old`);
let prof=prompt('What is your proffession?',['work']);
alert(`Your proffession is ${prof}. Keep it up!`);
let isAdmin=confirm('Are you the Admin?');

document.getElementById("details").innerHTML= `Your Name is ${admin}. Aged ${age} Years. Your proffession is ${prof}. Keep it up!`;
//