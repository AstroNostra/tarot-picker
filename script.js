function pickCard(number) {
    const allCards = [
        "The_Magician.jpg", 
        "The_Empress.jpg", 
        "The_Emperor.jpg", 
        "The_Death.jpg", 
        "The_Fool.jpg", 
        "The_Lovers.jpg", 
        "The_Hanged_Man.jpg", 
        "The_Tower.jpg", 
        "The_Wheel_of_Fortune.jpg",
        "The_Sun.jpg",
        "The_Moon.jpg",
        "The_Star.jpg"
    ];
    
    // Shuffle function to randomize the cards
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    shuffleArray(allCards);
    
    // Clear the displayed images
    for (let i = 1; i <= 3; i++) {
        document.getElementById('card' + i).src = "";
    }

    // Display the chosen number of cards
    for (let i = 1; i <= number; i++) {
        document.getElementById('card' + i).src = "images/" + allCards[i - 1];
    }
}
