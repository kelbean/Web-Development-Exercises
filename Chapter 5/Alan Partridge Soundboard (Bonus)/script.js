// playSound function
// When called, whatever ID that is passed within the function will play their own specific sound.

function playSound(soundId) {
    document.getElementById(soundId).play();
}

// speak function for Text-to-Speech

function speak() {
    const text = document.getElementById('textInput').value; // Getting the user's input from <textarea> and assigning it to text.
    const utterance = new SpeechSynthesisUtterance(text); // Text input is passed and is stored into a new speech object.
    window.speechSynthesis.speak(utterance); // This will use the browser's built in speech syntesis API and speak the speech object.
}