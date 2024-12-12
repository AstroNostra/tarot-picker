const allCards = [
    { name: 'The Fool', image: 'https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Fool.jpg.jpg' },
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

let pickedCards = [];

function pickCards(numCards) {
    pickedCards = [];
    let availableCards = [...allCards];
    for (let i = 0; i < numCards; i++) {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        pickedCards.push(availableCards[randomIndex]);
        availableCards.splice(randomIndex, 1);
    }
    displayCards();
}

function pickLoveSpread() {
    pickedCards = [];
    let availableCards = [...allCards];
    const loveSpreadCards = [
        'You', 'Your Partner', 'Problematic', 'Solution', 'Outcome'
    ];

    loveSpreadCards.forEach((label, index) => {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        pickedCards.push({ label, ...availableCards[randomIndex] });
        availableCards.splice(randomIndex, 1);
    });
    displayCards('Love Spread');
}

function pickProfessionalSpread() {
    pickedCards = [];
    let availableCards = [...allCards];
    const professionalSpreadCards = [
        'You', 'Current Path', 'Options', 'Outcome'
    ];

    professionalSpreadCards.forEach((label, index) => {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        pickedCards.push({ label, ...availableCards[randomIndex] });
        availableCards.splice(randomIndex, 1);
    });
    displayCards('Professional Spread');
}

function displayCards(spreadType) {
    let cardHtml = '';
    pickedCards.forEach(card => {
        cardHtml += `
            <div class="card">
                <img src="${card.image}" alt="${card.name}">
                <p>${card.label ? `${card.label}: ${card.name}` : card.name}</p>
            </div>
        `;
    });
    
    document.getElementById("pickedCards").innerHTML = cardHtml;
    document.getElementById("drawnCardsMessage").innerHTML = "Please save the card names for your reading.";

    if (spreadType === 'Love Spread') {
        document.getElementById("spreadExplanation").innerHTML = `
            <h3>Love Spread Explanation</h3>
            <ul>
                <li>Card 1: You - Represents you, your energy, and current state in the relationship.</li>
                <li>Card 2: Your Partner - Represents your partner's energy or attitude in the relationship.</li>
                <li>Card 3: Problematic - Identifies the core issue or challenge in your relationship.</li>
                <li>Card 4: Solution - Suggests a solution or action to resolve the issue.</li>
                <li>Card 5: Outcome - Represents the outcome or future of the relationship based on current energies.</li>
            </ul>
        `;
    } else if (spreadType === 'Professional Spread') {
        document.getElementById("spreadExplanation").innerHTML = `
            <h3>Professional Spread Explanation</h3>
            <ul>
                <li>Card 1: You - Represents you and your current career state.</li>
                <li>Card 2: Current Path - Shows your current path and what it holds for your future.</li>
                <li>Card 3: Options - Provides insights into the options or decisions ahead.</li>
                <li>Card 4: Outcome - Predicts the outcome of your professional path based on your current choices.</li>
            </ul>
        `;
    } else {
        document.getElementById("spreadExplanation").innerHTML = "";
    }
}
