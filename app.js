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
const cardsChosen = [];
const cardsChosenIds = [];

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

    console.log('check for match!')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You have a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
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