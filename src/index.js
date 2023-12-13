const h1 = document.querySelector('h1');

//console.log(h1);

function changeColor() {
    h1.style.color = "#B2AC88";
}
// function changeColorBack(){
//     h1.style.color = "black";
// } can write this new function, or can use arrow function

// h1.addEventListener('mouseover', changeColor())
// this immediately calls the function, causing it to
// change the color on loading the page. We need to invoke
// the function instead

h1.addEventListener('mouseover', changeColor);
h1.addEventListener('mouseout', () => h1.style.color = "black");

const firstButton = document.querySelector('#button1');
//console.log(firstButton);

function buttonOneText(){
    firstButton.textContent = "Clicked!"
}

firstButton.addEventListener('click', buttonOneText);

const secondButton = document.querySelector('#button2');
//console.log(secondButton);
const bg =document.querySelector('body');

secondButton.addEventListener('click', () => bg.style.backgroundColor = "#DCAE96");

const form = document.querySelector('form');
//const input = document.querySelector('#name');
const greeting = document.querySelector('p');
//console.log(greeting);

form.addEventListener('submit', (e) => handleSubmit(e));

function handleSubmit(e){
    e.preventDefault();
    const name = e.target.name.value;
    //const name = input.value;
    greeting.textContent = `Welcome, ${name}!`;
}