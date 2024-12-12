const cards = [
    { name: 'The Magician', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Magician.jpg.jpg' },
    { name: 'The High Priestess', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_High_Priestess.jpg.jpg' },
    { name: 'The Empress', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Empress.jpg.jpg' },
    { name: 'The Emperor', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Emperor.jpg.jpg' },
    { name: 'The Hierophant', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hierophant.jpg.jpg' },
    { name: 'The Lovers', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Lovers.jpg.jpg' },
    { name: 'The Chariot', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Chariot.jpg.jpg' },
    { name: 'Strength', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Strength.jpg.jpg' },
    { name: 'The Hermit', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hermit.jpg.jpg' },
    { name: 'Wheel of Fortune', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Wheel_of_Fortune.jpg.jpg' },
    { name: 'Justice', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Justice.jpg.jpg' },
    { name: 'The Hanged Man', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hanged_Man.jpg.jpg' },
    { name: 'Death', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Death.jpg.jpg' },
    { name: 'Temperance', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Temperance.jpg.jpg' },
    { name: 'The Devil', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Devil.jpg.jpg' },
    { name: 'The Tower', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Tower.jpg.jpg' },
    { name: 'The Star', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Star.jpg.jpg' },
    { name: 'The Moon', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Moon.jpg.jpg' },
    { name: 'The Sun', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Sun.jpg.jpg' },
    { name: 'Judgement', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Judgement.jpg.jpg' },
    { name: 'The World', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_World.jpg.jpg' }
];

function getRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}

function pickCards(numCards) {
    const pickedCards = [];
    for (let i = 0; i < numCards; i++) {
        pickedCards.push(getRandomCard());
    }
    displayPickedCards(pickedCards);
}

function pickLoveSpread() {
    const pickedCards = [
        getRandomCard(),
        getRandomCard(),
        getRandomCard(),
        getRandomCard(),
        getRandomCard()
    ];
    displayPickedCards(pickedCards, 'Love Spread');
}

function pickProfessionalSpread() {
    const pickedCards = [
        getRandomCard(),
        getRandomCard(),
        getRandomCard(),
        getRandomCard()
    ];
    displayPickedCards(pickedCards, 'Professional Spread');
}

function displayPickedCards(pickedCards, spreadType = '') {
    const pickedCardsContainer = document.getElementById('pickedCards');
    pickedCardsContainer.innerHTML = '';

    pickedCards.forEach(card => {
        const cardImage = document.createElement('img');
        cardImage.src = card.image;
        cardImage.alt = card.name;
        pickedCardsContainer.appendChild(cardImage);
    });

    const messageElement = document.getElementById('drawnCardsMessage');
    if (spreadType === 'Love Spread') {
        messageElement.textContent = 'Love Spread: Please save the cards names for future readings.';
    } else if (spreadType === 'Professional Spread') {
        messageElement.textContent = 'Professional Spread: Please save the cards names for future readings.';
    } else {
        messageElement.textContent = 'Please save the cards names for future readings.';
    }
}
