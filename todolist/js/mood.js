const moodButtons = document.querySelectorAll("#mood .mood-button");
const background = document.querySelector("#footer img");
const quote = document.querySelector("#quote span");

const blueImages = ["blue1.png", "blue2.png", "blue3.png"];
const greenImages = ["green1.png", "green2.png"];
const redImages = ["red1.png", "red2.png"];
const yellowImages = ["yellow1.png", "yellow2.png", "yellow3.png"];

const blueQuotes = [
    "It's okay to feel sad sometimes.",
    "Tears heal the soul.",
    "Sadness will pass.",
    "Pain helps us grow."
];

const redQuotes = [
    "Anger fades with time.",
    "Stay calm in the storm.",
    "Let go of anger.",
    "Pause before reacting."
];

const greenQuotes = [
    "Peace comes from within.",
    "Calmness is power.",
    "Breathe, relax, and be still.",
    "Find peace in the present."
];

const yellowQuotes = [
    "Live in the moment.",
    "Embrace happiness every day.",
    "Joy makes life brighter.",
    "Celebrate every little victory."
];



let chosenImage = ""; 
let chosenQuote = "";

function handleBgMoodButton(event){
    const buttonId = event.currentTarget.id;
    switch (buttonId) {
        case "blueButton":
            chosenImage = blueImages[Math.floor(Math.random() * blueImages.length)];
            break;

        case "greenButton":
            chosenImage = greenImages[Math.floor(Math.random() * greenImages.length)];
            break;

        case "redButton":
            chosenImage = redImages[Math.floor(Math.random() * redImages.length)];
            break;

        case "yellowButton":
            chosenImage = yellowImages[Math.floor(Math.random() * yellowImages.length)];
            break;
    }

    background.src = `img/background/${chosenImage}`;
}

function handleQuoteMoodButton(event){
    const buttonId = event.currentTarget.id;
    switch (buttonId) {
        case "blueButton":
            chosenQuote = blueQuotes[Math.floor(Math.random() * blueQuotes.length)];
            break;

        case "greenButton":
            chosenQuote = redQuotes[Math.floor(Math.random() * redQuotes.length)];
            break;

        case "redButton":
            chosenQuote = greenQuotes[Math.floor(Math.random() * greenQuotes.length)];
            break;

        case "yellowButton":
            chosenQuote = yellowQuotes[Math.floor(Math.random() * yellowQuotes.length)];
            break;
    }

    quote.innerHTML = chosenQuote;
}

moodButtons.forEach((ele) => {
    ele.addEventListener("click", handleBgMoodButton);
    ele.addEventListener("click", handleQuoteMoodButton);
})