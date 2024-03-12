const data = {
    lotr: ["Fellowship", "Quest", "Ring", "Darkness", "Journey", "Adventure", "Magic", "War", "Friendship", "Wizard", "Sacrifice", "Hope", "Destiny", "Elves", "Epic", "Fantasy", "Triumph", "Alliance", "Legacy", "Dwarves"],
    got: ["Bloodline", "Politics", "Revenge", "Snow", "Spies", "Wedding", "Mountain", "Wolf", "Winter", "Ravens", "Wall", "Little Finger", "Wine", "Steel Sword", "Fire", "Honor", "Ice", "Schemes", "Books", "Slaves"],
    bbt: ["Apartment", "Roommates", "Experiments", "Neighbours", "Cheesecake", "Lullaby", "International Space Station", "Toilet", "Grasshopper", "Dungeons and Dragons", "Comic Books", "Trains", "Engineer", "Rock Paper Scissors", "Space Explosion"],
    mj: ["Moon", "Performance", "Icon", "Gloves", "Thriller", "Robot", "Extraterrestrial", "Boxer", "King", "Wax Statue", "Death", "Chimpanzee"],
    cn: ["Dreams", "Penguin", "Cinema", "Perception", "Big Ben", "Memory Loss", "Award", "Space", "Tesla", "Magicians", "World War", "Sleeplessness", "Time", "Bat", "Nonlinear"],
    galileo: ["Pisa", "Genius", "Stars", "Gravity", "House Arrest", "Pope", "Pendulum", "Renaissance", "Moon", "Orbits", "Compass", "Jupiter"],
    sam: ["Silicon Valley", "PowerPoint", "Teams", "Lawsuit", "Tesla", "Intelligence", "Stanford", "Prompt"],
    marie: ["Award", "Decay", "Cancer", "Power Couple", "Eiffel Tower", "Doctorate", "Radiation", "Vodka"],
    cleopatra: ["Monarch", "Dynasty", "Power", "Politics", "Netflix", "Caesar Salad", "River", "Civilization", "Giza", "Lovers", "Venom", "Throne", "Gladiators", "August", "Dictator"],
    silkroute: ["Trade", "Pizza", "Cocoons", "The Great Wall", "Mongols", "Turkey", "Merchants", "Cinnamon", "Gold", "Caravan"]
};

const topicButtonsDiv = document.getElementById("topicButtons");
const wordButtonsDiv = document.getElementById("wordButtons");

let currentTopic = null; // Keep track of the current topic
let currentWordIndex = 0; // Keep track of the current word index

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Create buttons for each topic
Object.keys(data).forEach(topic => {
    if (data[topic].length === 0) {
        // Skip this topic if it has no words
        return;
    }

    const button = document.createElement("button");
    button.textContent = "Topic " + (Object.keys(data).indexOf(topic) + 1);
    button.addEventListener("click", () => {
        currentTopic = topic; // Set the current topic
        currentWordIndex = 0; // Reset the current word index
        shuffleArray(data[currentTopic]); // Shuffle the words array
        showWord();
    });
    topicButtonsDiv.appendChild(button);
});

function showWord() {
    // Hide topic selection and show word selection
    document.getElementById('topicSelection').style.display = 'none';
    document.getElementById('wordSelection').style.display = 'block';

    wordButtonsDiv.innerHTML = ""; // Clear existing word

    if (currentWordIndex >= data[currentTopic].length) {
        // If there are no more words, go back to the topic selection
        document.getElementById('wordSelection').style.display = 'none';
        document.getElementById('topicSelection').style.display = 'block';
        alert("All words in this topic have been used. Please select a new topic.");
        return;
    }

    // Create a new element with the word and append it to the body
    const newElement = document.createElement("p");
    newElement.textContent = data[currentTopic][currentWordIndex];
    wordButtonsDiv.appendChild(newElement);

    // Create a "Done" button
    const button = document.createElement("button");
    button.textContent = "Done";
    button.addEventListener("click", () => {
        currentWordIndex++; // Move to the next word
        showWord();
    });
    wordButtonsDiv.appendChild(button);
}


document.getElementById('backButton').addEventListener('click', function () {
    // Hide word selection and show topic selection
    document.getElementById('wordSelection').style.display = 'none';
    document.getElementById('topicSelection').style.display = 'block';
});