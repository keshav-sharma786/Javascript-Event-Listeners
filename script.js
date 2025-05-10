//debugger
console.log('Namaste Event Listeners');

const h1 = window.document.querySelector('h1');
const card = window.document.querySelector('.card');
const container = document.querySelector('.container');

function sayHi() {
    console.log('hiiii');
}

h1.addEventListener('click', sayHi);
// here below call back function is an anonomous function, because we have not given any name to that anonomous function
h1.addEventListener('click', function sayHi2() {
    console.log('second Hii');
});

// put an event listener on the div card
// card.addEventListener('click', () => {
//     alert('Namaste Javascript');
// });

// Very good Keshav bhai! you yourself completed this task
let i = 1;
card.addEventListener('click', () => {
    // let i = 1;
    if(i <= 100) {
    const cards = document.createElement('div');
    cards.classList.add('card');
    cards.innerText = `${i}`;
    container.appendChild(cards);
    i++;
    } 
});

