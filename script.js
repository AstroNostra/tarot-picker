// Array of card names (use the names of your images here)
const cards = [
  "The_Fool.jpg", "The_Magician.jpg", "The_High_Priestess.jpg", "The_Empress.jpg",
  "The_Emperor.jpg", "The_Hierophant.jpg", "The_Lovers.jpg", "The_Chariot.jpg",
  "Strength.jpg", "The_Hermit.jpg", "Wheel_of_Fortune.jpg", "Justice.jpg",
  "The_Hanged_Man.jpg", "Death.jpg", "Temperance.jpg", "The_Devil.jpg", 
  "The_Tower.jpg", "The_Star.jpg", "The_Moon.jpg", "The_Sun.jpg", 
  "Judgement.jpg", "The_World.jpg"
];

// Function to pick random cards
function pickCards(number) {
  const cardResult = document.getElementById("card-result");
  cardResult.innerHTML = ""; // Clear previous results

  // Shuffle cards array and pick the first 'number' of cards
  const shuffledCards = [...cards];
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  // Add selected cards to the result div
  for (let i = 0; i < number; i++) {
    const cardImage = document.createElement("img");
    cardImage.src = `images/${shuffledCards[i]}`;
    cardImage.alt = shuffledCards[i];
    cardResult.appendChild(cardImage);
  }
}
