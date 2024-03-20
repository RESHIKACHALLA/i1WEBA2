function countCharacters() {
    let userInput = document.getElementById('userInput').value;
    let vowelsCount = 0;
    let consonantsCount = 0;
    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < userInput.length; i++) {
        if (vowels.indexOf(userInput[i]) !== -1) {
            vowelsCount++;
        } else if (userInput[i].toLowerCase() !== userInput[i].toUpperCase()) {
            // This checks if it is a letter, ignoring cases like numbers or symbols
            consonantsCount++;
        }
    }

    document.getElementById('result').innerHTML = `Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`;
}