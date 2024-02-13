import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Framed() {
    const [guesses, setGuesses] = useState([]);
    const [numGuess, setNumGuess] = useState(1);
    const [doneGuessing, setDoneGuessing] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);
    const frames = ["./frame1.png", "./frame2.png", "./frame3.png", "./frame4.png", "./frame5.png", "./frame6.png"];
    const rightAnswers = ["About Time", "about time", "abouttime", "AboutTime", " About Time", "About Time ", "About time"];

    const submitGuess = (guess) => {
        setGuesses([guess, ...guesses]);
        document.getElementById("movieGuessFramed").value = "";

        if (numGuess >= 6) {
            setDoneGuessing(true);
        } else if (isGuessCorrect(guess)) {
            setDoneGuessing(true);
            setNumGuess(6);
        } else {
            setCurrentFrame(numGuess);
            setNumGuess(numGuess + 1);
        }
    }

    const isGuessCorrect = (guess) => {
        return rightAnswers.includes(guess);
    }

    const renderNumberButtons = () => {
        const numButtons = [];
        for (let i = 1; i <= numGuess; i++) {
            numButtons.push(
                <h4
                    class={"frameNumber text-center me-2" + ((i - 1) === currentFrame ? " clickedColor" : "")}
                    onClick={() => setCurrentFrame(i - 1)}>{i}</h4>)
        }
        return numButtons;
    }


    return (
        <div class="val-container d-flex flex-row justify-content-center w-100">
            <div class="d-flex flex-column justify-content-center">
                <h1 class="text-center">framed!</h1>
                <img class="w-100 mb-4" src={frames.at(currentFrame)} />
                <div class="d-flex flex-row justify-content-center">
                    {renderNumberButtons()}
                </div>

                <div class={"d-flex flex-row mt-4 mb-4" + (doneGuessing ? " d-none" : "")}>
                    <input
                        type="text"
                        id="movieGuessFramed"
                        class="textbox"
                        placeholder="Enter a movie title (sorry no autofill cause I don't want to hook up to a database)" />
                    <button
                        class="submit-button"
                        onClick={() => submitGuess(document.getElementById("movieGuessFramed").value)}>Submit</button>
                </div>

                <div class={(doneGuessing ? "" : "d-none ") + "d-flex flex-column text-center mt-3 mb-5"}>
                    <h5>The Answer Is:</h5>
                    <h3 class={guesses.find(
                        (guess) => rightAnswers.includes(guess)) ? "green-text" : "red-text"}>About Time</h3>
                    <p>Frame 6 is you and me fr :)</p>
                    <p class={guesses.find((guess) => rightAnswers.includes(guess)) ? "d-none" : "w-75 align-self-center"}>
                        Knowing you, you probably got this wrong on purpose to test the logic of my code.
                        Yes, I still programmed this even though I know you'll get the movie. Thanks for
                        testing my code.
                    </p>
                    <Link to="/moviegrid">
                        <button class="cuterButton align-self-center">Next Game!</button>
                    </Link>
                </div>

                {guesses.map((guess) => (
                    <p class={"guessText mb-3 " + (isGuessCorrect(guess) ? "green-border" : "")}>{guess}</p>
                ))}

            </div>
        </div>
    )
}


export default Framed;