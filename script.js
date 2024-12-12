// List of card images
const cards = [
    "The_Magician.jpg.jpg", "The_High_Priestess.jpg.jpg", "The_Empress.jpg.jpg", "The_Emperor.jpg.jpg",
    "The_Hierophant.jpg.jpg", "The_Lovers.jpg.jpg", "The_Chariot.jpg.jpg", "Strength.jpg.jpg",
    "The_Hermit.jpg.jpg", "Wheel_of_Fortune.jpg.jpg", "Justice.jpg.jpg", "The_Hanged_Man.jpg.jpg",
    "Death.jpg.jpg", "Temperance.jpg.jpg", "The_Devil.jpg.jpg", "The_Tower.jpg.jpg", "The_Star.jpg.jpg",
    "The_Moon.jpg.jpg", "The_Sun.jpg.jpg", "Judgement.jpg.jpg", "The_World.jpg.jpg"
];

// Function to pick random cards
function pickRandomCards(number) {
    let shuffled = cards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, number);
}

// Function to display the picked cards
function displayCards(cardArray) {
    for (let i = 0; i < 3; i++) {
        let cardElement = document.getElementById('card' + (i + 1));
        if (i < cardArray.length) {
            cardElement.style.backgroundImage = `url(images/${cardArray[i]})`;
        } else {
            cardElement.style.backgroundImage = '';
        }
    }
}

// Event listeners for buttons
document.getElementById("pick-one").addEventListener("click", () => {
    const pickedCards = pickRandomCards(1);
    displayCards(pickedCards);
});

document.getElementById("pick-two").addEventListener("click", () => {
    const pickedCards = pickRandomCards(2);
    displayCards(pickedCards);
});

document.getElementById("pick-three").addEventListener("click", () => {
    const pickedCards = pickRandomCards(3);
    displayCards(pickedCards);
});
