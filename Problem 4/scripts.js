// script.js
document.addEventListener('DOMContentLoaded', function() {
    let randomNumber = generateRandomNumber(1, 100);
    let attempts = 0;

    const userGuessInput = document.getElementById('user-guess');
    const submitGuessButton = document.getElementById('submit-guess');
    const feedbackElement = document.getElementById('feedback');
    const attemptCountElement = document.getElementById('attempt-count');
    const restartGameButton = document.getElementById('restart-game');

    submitGuessButton.addEventListener('click', function() {
        const userGuess = parseInt(userGuessInput.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedbackElement.textContent = 'Please enter a valid number between 1 and 100.';
            feedbackElement.style.color = 'red';
        } else {
            attempts++;
            if (userGuess === randomNumber) {
                feedbackElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
                feedbackElement.style.color = 'green';
                submitGuessButton.disabled = true;
                userGuessInput.disabled = true;
            } else {
                feedbackElement.textContent = 'You are wrong. Try again.';
                feedbackElement.style.color = 'red';
                attemptCountElement.textContent = attempts;
                if (userGuess < randomNumber) {
                    feedbackElement.textContent += ' The number is too low!';
                } else {
                    feedbackElement.textContent += ' The number is too high!';
                }
            }
        }
        userGuessInput.value = '';
    });

    restartGameButton.addEventListener('click', function() {
        randomNumber = generateRandomNumber(1, 100);
        attempts = 0;
        attemptCountElement.textContent = attempts;
        feedbackElement.textContent = '';
        userGuessInput.value = '';
        submitGuessButton.disabled = false;
        userGuessInput.disabled = false;
    });

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
