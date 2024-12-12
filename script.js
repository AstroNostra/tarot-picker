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

function getRandomCard(usedCards) {
    let card;
    do {
        card = cards[Math.floor(Math.random() * cards.length)];
    } while (usedCards.includes(card)); // Ensure no duplicate card
    usedCards.push(card); // Mark card as used
    return card;
}

function pickCards(numCards) {
    const pickedCards = [];
    const usedCards = [];
    for (let i = 0; i < numCards; i++) {
        pickedCards.push(getRandomCard(usedCards));
    }
    displayPickedCards(pickedCards);
}

function pickLoveSpread() {
    const pickedCards = [];
    const usedCards = [];
    for (let i = 0; i < 5; i++) {
        pickedCards.push(getRandomCard(usedCards));
    }
    displayPickedCards(pickedCards, 'Love Spread');
    displayLoveSpreadExplanation();
}

function pickProfessionalSpread() {
    const pickedCards = [];
    const usedCards = [];
    for (let i = 0; i < 4; i++) {
        pickedCards.push(getRandomCard(usedCards));
    }
    displayPickedCards(pickedCards, 'Professional Spread');
    displayProfessionalSpreadExplanation();
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

function displayLoveSpreadExplanation() {
    const explanation = `
        <h2>Love Spread Explanation</h2>
        <ul>
            <li><strong>Card 1: You</strong> - Represents you, your energy, and current state in the relationship.</li>
            <li><strong>Card 2: Your Partner</strong> - Represents your partner's energy or attitude in the relationship.</li>
            <li><strong>Card 3: Problematic</strong> - Identifies the core issue or challenge in your relationship.</li>
            <li><strong>Card 4: Solution</strong> - Suggests a solution or action to resolve the issue.</li>
            <li><strong>Card 5: Outcome</strong> - Represents the outcome or future of the relationship based on current energies.</li>
        </ul>
    `;
    document.getElementById('spreadExplanation').innerHTML = explanation;
}

function displayProfessionalSpreadExplanation() {
    const explanation = `
        <h2>Professional Spread Explanation</h2>
        <ul>
            <li><strong>Card 1: You</strong> - Represents your current state or position in your career.</li>
            <li><strong>Card 2: Current Path</strong> - Represents your current career path or job situation.</li>
            <li><strong>Card 3: Options</strong> - Suggests potential opportunities or choices in your career.</li>
            <li><strong>Card 4: Outcome</strong> - Indicates the potential outcome of your current career path or options.</li>
        </ul>
    `;
    document.getElementById('spreadExplanation').innerHTML = explanation;
}
