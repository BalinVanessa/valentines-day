import './emoji.css';
import { useEffect, useState } from "react";

function Moviemoji() {
    const [numGuess, setNumGuess] = useState(1);
    const [guesses, setGuesses] = useState([]);
    const [shownEmojis, setShownEmojis] = useState([]);
    const [gameDone, setGameDone] = useState(false);
    const emojis = ["🐀", "🧀", "📦", "🪖", "🌴", "🐫", "🐔"];

    const answer = "BODA BORG";

    const submitGuess = (guess) => {
        let guessText = guess === "" ? "skipped" : guess;
        setGuesses([guessText, ...guesses]);
        document.getElementById("text-input").value = "";

        if (numGuess >= 7) {
            setGameDone(true);
        } else if (isGuessCorrect(guess)) {
            setGameDone(true);
            setNumGuess(7);
        } else {
            setNumGuess(numGuess + 1);
        }
    }

    const renderEmojis = () => {
        const em = [];
        for (let i = 0; i < numGuess; i++) {
            em.push(
                <h1>{emojis[i]}</h1>
            )
        }

        for (let j = 0; j < 7 - numGuess; j++) {
            em.push(
                <h1>⚪</h1>
            )
        }

        setShownEmojis(em);
    }

    const isGuessCorrect = (guess) => {
        return guess.toUpperCase() === answer;
    }

    useEffect(() => {
        renderEmojis();
    })

    return (
        <div class="val-container d-flex flex-row justify-content-center w-100">
            <div class="d-flex flex-column justify-content-center">
                <h1 class="text-center">memoremoji &hearts;</h1>
                <p class="mb-5 text-center">A place we've been together :)</p>

                <div class="d-flex flex-row justify-content-center emojiContainer mb-3">
                    {shownEmojis.map(emoji => emoji)}
                </div>

                <input class="w-100 mb-3" type="text" id="text-input" />
                <button
                    class="submit-button align-self-center mb-4"
                    onClick={() => submitGuess(document.getElementById("text-input").value)}>Submit</button>

                <div class={"mb-4 text-center" + (gameDone ? " d-block" : " d-none")}>
                    <h5>The answer is</h5>
                    <h3>Boda Borg</h3>
                    <p>You finished my games :) I love you &hearts;</p>
                </div>

                {guesses.map((guess) => (
                    <p class={"guessText mb-3 " + (isGuessCorrect(guess) ? "green-border" : "")}>{guess}</p>
                ))}
            </div>


        </div>
    )
}

export default Moviemoji;