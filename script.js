// Define the card names as they appear in your GitHub repository
const cardArray = [
    "The_Fool.jpg.jpg", 
    "The_Magician.jpg.jpg", 
    "The_High_Priestess.jpg.jpg", 
    "The_Empress.jpg.jpg", 
    "The_Emperor.jpg.jpg", 
    "The_Hierophant.jpg.jpg", 
    "The_Lovers.jpg.jpg", 
    "The_Chariot.jpg.jpg", 
    "Strength.jpg.jpg", 
    "The_Hermit.jpg.jpg", 
    "Wheel_of_Fortune.jpg.jpg", 
    "Justice.jpg.jpg", 
    "The_Hanged_Man.jpg.jpg", 
    "Death.jpg.jpg", 
    "Temperance.jpg.jpg", 
    "The_Devil.jpg.jpg", 
    "The_Tower.jpg.jpg", 
    "The_Star.jpg.jpg", 
    "The_Moon.jpg.jpg", 
    "The_Sun.jpg.jpg", 
    "Judgement.jpg.jpg", 
    "The_World.jpg.jpg"
];

// Function to pick a number of cards randomly
function pickCards(numberOfCards) {
    const pickedCards = [];
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';  // Clear previous cards

    for (let i = 0; i < numberOfCards; i++) {
        // Randomly select a card
        const randomIndex = Math.floor(Math.random() * cardArray.length);
        const selectedCard = cardArray[randomIndex];

        // Create an image element
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.backgroundImage = `url(https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/${selectedCard})`;
        
        // Add the selected card to the container
        cardsContainer.appendChild(cardElement);
    }
}
