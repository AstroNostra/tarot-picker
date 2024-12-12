const cards = [
    { name: "The Magician", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Magician.jpg.jpg" },
    { name: "The High Priestess", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_High_Priestess.jpg.jpg" },
    { name: "The Empress", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Empress.jpg.jpg" },
    { name: "The Emperor", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Emperor.jpg.jpg" },
    { name: "The Hierophant", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hierophant.jpg.jpg" },
    { name: "The Lovers", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Lovers.jpg.jpg" },
    { name: "The Chariot", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Chariot.jpg.jpg" },
    { name: "Strength", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Strength.jpg.jpg" },
    { name: "The Hermit", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hermit.jpg.jpg" },
    { name: "Wheel of Fortune", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Wheel_of_Fortune.jpg.jpg" },
    { name: "Justice", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Justice.jpg.jpg" },
    { name: "The Hanged Man", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hanged_Man.jpg.jpg" },
    { name: "Death", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Death.jpg.jpg" },
    { name: "Temperance", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Temperance.jpg.jpg" },
    { name: "The Devil", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Devil.jpg.jpg" },
    { name: "The Tower", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Tower.jpg.jpg" },
    { name: "The Star", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Star.jpg.jpg" },
    { name: "The Moon", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Moon.jpg.jpg" },
    { name: "The Sun", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Sun.jpg.jpg" },
    { name: "Judgement", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Judgement.jpg.jpg" },
    { name: "The World", image: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_World.jpg.jpg" }
];

function getRandomCards(numCards) {
    let selectedCards = [];
    let tempCards = [...cards];  // Create a copy of the original array

    for (let i = 0; i < numCards; i++) {
        const randomIndex = Math.floor(Math.random() * tempCards.length);
        selectedCards.push(tempCards[randomIndex]);
        tempCards.splice(randomIndex, 1); // Remove the picked card to avoid duplicates
    }

    return selectedCards;
}

function displayCards(selectedCards) {
    const cardNamesDiv = document.getElementById("cardNames");
    cardNamesDiv.innerHTML = "";  // Clear previous results

    selectedCards.forEach(card => {
        const img = document.createElement("img");
        img.src = card.image;
        img.alt = card.name;
        const p = document.createElement("p");
        p.innerText = card.name;

        cardNamesDiv.appendChild(img);
        cardNamesDiv.appendChild(p);
    });
}

function pickCards(num) {
    const selectedCards = getRandomCards(num);
    displayCards(selectedCards);
}

function pickLoveSpread() {
    const selectedCards = getRandomCards(5);
    const loveSpread = [
        { name: "You", card: selectedCards[0] },
        { name: "Your Partner", card: selectedCards[1] },
        { name: "Problemetique", card: selectedCards[2] },
        { name: "Solution", card: selectedCards[3] },
        { name: "Outcome", card: selectedCards[4] }
    ];

    displaySpread(loveSpread);
}

function pickProfessionalSpread() {
    const selectedCards = getRandomCards(4);
    const professionalSpread = [
        { name: "You", card: selectedCards[0] },
        { name: "Current Path", card: selectedCards[1] },
        { name: "Options", card: selectedCards[2] },
        { name: "Outcome", card: selectedCards[3] }
    ];

    displaySpread(professionalSpread);
}

function displaySpread(spread) {
    const cardNamesDiv = document.getElementById("cardNames");
    cardNamesDiv.innerHTML = "";  // Clear previous results

    spread.forEach(spreadCard => {
        const img = document.createElement("img");
        img.src = spreadCard.card.image;
        img.alt = spreadCard.card.name;
        const p = document.createElement("p");
        p.innerText = `${spreadCard.name}: ${spreadCard.card.name}`;

        cardNamesDiv.appendChild(img);
        cardNamesDiv.appendChild(p);
    });
}
