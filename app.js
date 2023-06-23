const cardArray = [
    {
        name :'jolteon',
        img : 'images/jolteon.png',
    },
    {
        name :'lapras',
        img : 'images/lapras.png',
    },
    {
        name :'pikachu',
        img : 'images/pikachu.png',
    },
    {
        name :'poliwrath',
        img : 'images/poliwrath.png',
    },
    {
        name :'snorlax',
        img : 'images/snorlax.png',
    },
    {
        name :'wartortle',
        img : 'images/wartortle.png',
    },
    {
        name :'jolteon',
        img : 'images/jolteon.png',
    },
    {
        name :'lapras',
        img : 'images/lapras.png',
    },
    {
        name :'pikachu',
        img : 'images/pikachu.png',
    },
    {
        name :'poliwrath',
        img : 'images/poliwrath.png',
    },
    {
        name :'snorlax',
        img : 'images/snorlax.png',
    },
    {
        name :'wartortle',
        img : 'images/wartortle.png',
    },
    
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = []; 

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
};

createBoard();

function checkMatch() {
   const cards = document.querySelectorAll('img')
   const optionOneId = cardsChosenIds[0];
   const optionTwoId = cardsChosenIds[1];

   if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have cliked the same image!')
   }

    console.log('check for match!')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You have a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you caught all the mons!'
    }
}

function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500)
    }
};