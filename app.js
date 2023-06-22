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

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', id)
    }
}