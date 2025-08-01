# Mastermind Game

This is a web-based implementation of the classic code-breaking game, Mastermind.

---

## How to Play

1.  The computer generates a secret code of 5 distinct colors. You have 15 attempts to guess it.
2.  Select five colors from the palette. Once a row is full, click "Submit".
3.  Feedback is given after each guess:
    * **Red dot:** Correct color in the correct position.
    * **White dot:** Correct color in the wrong position.
4.  Use the "Delete" button to remove the last color placed.
5.  Guess the secret code within 15 tries to win. Otherwise, you lose, and the code is revealed.

---

## Features

* Interactive game board with 15 rows for guesses.
* A palette of 8 colors to choose from.
* Feedback system with red and white pegs.
* "Submit" and "Delete" buttons for easy gameplay.
* Win/loss conditions and alerts.
* The secret code is revealed at the end of the game.

---

## Files

* `index.html`: The main HTML file that structures the game's layout.
* `master.js`: The JavaScript file containing the game's logic.
* `code.css`: The CSS file for styling the game.

---

## Hack

Feeling stuck? Open the developer console in your browser and type `code` to reveal the secret code array.

---

## Credits

This Mastermind game was created by **0hruv**.
