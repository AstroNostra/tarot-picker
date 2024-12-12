const tarotCards = [
  { name: "The Fool", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Fool.jpg.jpg" },
  { name: "The Magician", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Magician.jpg.jpg" },
  { name: "The High Priestess", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_High_Priestess.jpg.jpg" },
  { name: "The Empress", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Empress.jpg.jpg" },
  { name: "The Emperor", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Emperor.jpg.jpg" },
  { name: "The Hierophant", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hierophant.jpg.jpg" },
  { name: "The Lovers", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Lovers.jpg.jpg" },
  { name: "The Chariot", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Chariot.jpg.jpg" },
  { name: "Strength", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Strength.jpg.jpg" },
  { name: "The Hermit", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hermit.jpg.jpg" },
  { name: "Wheel of Fortune", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Wheel_of_Fortune.jpg.jpg" },
  { name: "Justice", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Justice.jpg.jpg" },
  { name: "The Hanged Man", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Hanged_Man.jpg.jpg" },
  { name: "Death", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Death.jpg.jpg" },
  { name: "Temperance", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Temperance.jpg.jpg" },
  { name: "The Devil", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Devil.jpg.jpg" },
  { name: "The Tower", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Tower.jpg.jpg" },
  { name: "The Star", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Star.jpg.jpg" },
  { name: "The Moon", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Moon.jpg.jpg" },
  { name: "The Sun", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_Sun.jpg.jpg" },
  { name: "Judgement", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/Judgement.jpg.jpg" },
  { name: "The World", img: "https://raw.githubusercontent.com/astronostra/tarot-picker/main/images/The_World.jpg.jpg" }
];

// Function to display the selected cards
function displayCards(selectedCards) {
  const resultDiv = document.getElementById('pickedCards');
  resultDiv.innerHTML = ''; // Clear the previous results

  selectedCards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const cardImg = document.createElement('img');
    cardImg.src = card.img;
    cardImg.alt = card.name;
    cardDiv.appendChild(cardImg);
    const cardName = document.createElement('p');
    cardName.textContent = card.name;
    cardDiv.appendChild(cardName);
    resultDiv.appendChild(cardDiv);
  });

  // Display the message to save the card names
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.textContent = "Please save the cards' names for future readings.";
  resultDiv.appendChild(messageDiv);
}

// Function to pick 1 card randomly for a spread
function pickCards(numCards) {
  const selectedCards = [];
  for (let i = 0; i < numCards; i++) {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    selectedCards.push(tarotCards[randomIndex]);
  }
  displayCards(selectedCards);
}

// Function for the Love Spread (5 cards)
function pickLoveSpread() {
  const loveSpreadExplanation = 'The Love Spread focuses on your relationship: Card 1: You, Card 2: Your Partner, Card 3: The Problematic, Card 4: The Solution, Card 5: The Outcome.';
  document.getElementById('spreadExplanation').textContent = loveSpreadExplanation;

  const loveSpreadCards = [
    tarotCards[Math.floor(Math.random() * tarotCards.length)],  // Card 1: You
    tarotCards[Math.floor(Math.random() * tarotCards.length)],  // Card 2: Your Partner
    tarotCards[Math.floor(Math.random() * tarotCards.length)],  // Card 3: The Problematic
    tarotCards[Math.floor(Math.random() * tarotCards.length)],  // Card 4: The Solution
    tarotCards[Math.floor(Math.random() * tarotCards.length)]   // Card 5: The Outcome
  ];

  displayCards(loveSpreadCards);
}

// Function for the Professional Spread (4 cards)
function pickProfessionalSpread() {
  const professionalSpreadExplanation = 'The Professional Spread focuses on your career path: Card 1: You, Card 2: Current Path, Card 3: Options, Card 4: Outcome.';
  document.getElementById('spreadExplanation').textContent = professionalSpreadExplanation;

  const professionalSpreadCards = [
    tarotCards[Math.floor(Math.random() * tarotCards.length)],  // Card 1: You
    tarotCards[Math.floor(Math.random() * tarotCards.length)],  // Card 2: Current Path
    tarotCards[Math.floor(Math.random() * tarotCards.length)],  // Card 3: Options
    tarotCards[Math.floor(Math.random() * tarotCards.length)]   // Card 4: Outcome
  ];

  displayCards(professionalSpreadCards);
}
