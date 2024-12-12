const cards = [
    { name: "The_Magician", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Magician.jpg.jpg" },
    { name: "The_Empress", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Empress.jpg.jpg" },
    { name: "Death", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Death.jpg.jpg" },
    { name: "The_Fool", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Fool.jpg.jpg" },
    { name: "The_Hanged_Man", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hanged_Man.jpg.jpg" },
    { name: "The_Lovers", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Lovers.jpg.jpg" },
    { name: "The_Star", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Star.jpg.jpg" },
    { name: "The_Tower", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Tower.jpg.jpg" },
    { name: "The_Wheel_of_Fortune", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Wheel_of_Fortune.jpg.jpg" },
    { name: "Strength", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Strength.jpg.jpg" },
    { name: "The_Chariot", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Chariot.jpg.jpg" },
    { name: "Justice", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Justice.jpg.jpg" },
    { name: "The_Hermit", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hermit.jpg.jpg" },
    { name: "The_High_Priestess", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_High_Priestess.jpg.jpg" },
    { name: "The_Emperor", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Emperor.jpg.jpg" },
    { name: "The_Sun", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Sun.jpg.jpg" },
    { name: "The_Moon", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Moon.jpg.jpg" },
    { name: "Temperance", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Temperance.jpg.jpg" },
    { name: "The_World", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_World.jpg.jpg" },
    { name: "Judgement", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Judgement.jpg.jpg" },
    { name: "The_Devil", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Devil.jpg.jpg" },
    { name: "The_Pope", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Pope.jpg.jpg" }
];

function pickCards(num) {
    const pickedCards = [];
    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        pickedCards.push(cards[randomIndex]);
    }

    displayCards(pickedCards);
}

function displayCards(cardsToDisplay) {
    const pickedCardsContainer = document.getElementById("picked-cards");
    pickedCardsContainer.innerHTML = ""; // Clear any previously picked cards

    cardsToDisplay.forEach(card => {
        const imgElement = document.createElement("img");
        imgElement.src = card.img;
        imgElement.alt = card.name;
        imgElement.classList.add("card");
        pickedCardsContainer.appendChild(imgElement);
    });
}
