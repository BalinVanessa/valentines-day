import { useState } from 'react';
import './moviegrid.css';
import { Link } from 'react-router-dom';

function MovieGrid() {
    const [currentBox, setCurrentBox] = useState({ column: 0, row: 0, answer: [], img: "./moviegrid/avengersendgame.jpg" });
    const [boxIds, setBoxIds] = useState(["00", "01", "02", "10", "11", "12", "20", "21", "22"]);
    const cols = ["Stars a Chris", "We watched in my dorm(s)", "Owen Wilson"];
    const rows = ["Involves Time Travel", "Involves race cars", "Animated Film"];

    const answers00 = ["ENDGAME", "AVENGERS ENDGAME", "AVENGERS: ENDGAME"];
    const answers01 = ["ABOUT TIME"];
    const answers02 = ["FREE BIRDS"];

    const answers10 = ["RUSH"];
    const answers11 = ["GRAN TURISMO"];
    const answers12 = ["CARS", "CARS 2", "CARS 3"];

    const answers20 = ["THE SUPER MARIO BROS MOVIE", "MARIO", "SUPER MARIO", "SUPER MARIO MOVIE", "SUPER MARIO BROS MOVIE", "SUPER MARIO BROS"];
    const answers21 = ["TEENAGE MUTANT NINJA TURTLES: MUTANT MAYHEM", "TEENAGE MUTANT NINJA TURTLES"];
    const answers22 = ["FANTASTIC MR. FOX", "FANTASTIC MR FOX"];

    const hidePopup = () => {
        var popup = document.getElementById("pop-up-guess");
        popup.style.display = "none";
    }

    const guessPopup = (boxInfo) => {
        var popup = document.getElementById("pop-up-guess");
        popup.style.display = "block";
        setCurrentBox(boxInfo);
    }

    const submitGuess = (guess) => {
        let boxId = "";
        boxId = boxId.concat(currentBox.row.toString(), currentBox.column.toString());
        let updateBox = document.getElementById(boxId);

        if (currentBox.answer.includes(guess.toUpperCase())) {
            updateBox.style.backgroundColor = "white";
            updateBox.style.backgroundImage = currentBox.img;
            updateBox.style.backgroundSize = "cover";
            updateBox.style.backgroundPosition = "center";
        }

        hidePopup();
        document.getElementById("popup-text").value = "";
        setBoxIds(boxIds.filter(id => id !== boxId));
    }

    const finishGame = () => {
        return boxIds.length === 0;
    }

    return (
        <div class="val-container d-flex flex-row justify-content-center">
            <div class="d-flex flex-column text-center">
                <h1>Movie Grid</h1>
                <p class="w-75 align-self-center">...but it's limited to movies I know about and there's only one answer for each (cause I don't want to connect to a database)</p>

                <div class="row mt-5">
                    <p class="col-3 col-md-2"></p>
                    <p class="col">Stars a "Chris" (Hemsworth, Pratt, Evans, etc.)</p>
                    <p class="col">We watched in my dorm(s)</p>
                    <p class="col">Owen Wilson (do not use Midnight In Paris)</p>
                </div>

                <div class="row mt-2 align-items-center">
                    <p class="col-3 col-md-2">Involves Time Travel</p>
                    <button class="moviegrid-box col back"
                        id="00"
                        onClick={() =>
                            guessPopup(
                                { column: 0, row: 0, answer: answers00, img: "url(https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg)" })}>
                    </button>
                    <button class="moviegrid-box col"
                        id="01"
                        onClick={() =>
                            guessPopup({ column: 1, row: 0, answer: answers01, img: "url(https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg)" })}>
                    </button>
                    <button class="moviegrid-box col"
                        id="02"
                        onClick={() =>
                            guessPopup({ column: 2, row: 0, answer: answers02, img: "url(https://m.media-amazon.com/images/M/MV5BNjE0NjIwMzAwOF5BMl5BanBnXkFtZTgwOTIyMzMzMDE@._V1_FMjpg_UX1000_.jpg)" })}>
                    </button>
                </div>

                <div class="row align-items-center">
                    <p class="col-3 col-md-2">Involves race cars</p>
                    <button class="moviegrid-box col"
                        id="10"
                        onClick={() =>
                            guessPopup({ column: 0, row: 1, answer: answers10, img: "url(https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg)" })}>
                    </button>
                    <button class="moviegrid-box col"
                        id="11"
                        onClick={() => guessPopup({ column: 1, row: 1, answer: answers11, img: "url(https://m.media-amazon.com/images/M/MV5BMTI1YjFmN2UtOWZhOC00MjkwLTg2ZjgtNDQ5NDQ3YWNmNGRkXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_FMjpg_UX1000_.jpg)" })}>
                    </button>
                    <button class="moviegrid-box col"
                        id="12"
                        onClick={() => guessPopup({ column: 2, row: 1, answer: answers12, img: "url(https://m.media-amazon.com/images/M/MV5BYThlMzlhNDgtZDllNC00YzY3LWFjZWYtMzk4YTcxYzBjNzgyL2ltYWdlXkEyXkFqcGdeQXVyNjY0NzU4Nzc@._V1_.jpg)" })}>
                    </button>
                </div>

                <div class="row align-items-center">
                    <p class="col-3 col-md-2">Animated Film</p>
                    <button class="moviegrid-box col"
                        id="20"
                        onClick={() =>
                            guessPopup({ column: 0, row: 2, answer: answers20, img: "url(https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg)" })}>
                    </button>
                    <button class="moviegrid-box col"
                        id="21"
                        onClick={() => guessPopup({ column: 1, row: 2, answer: answers21, img: "url(https://m.media-amazon.com/images/M/MV5BM2JmNWEyZGYtYjVlMi00MDE2LTk5YjMtNTljOGZiY2FjZDFhXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg)" })}>
                    </button>
                    <button class="moviegrid-box col"
                        id="22"
                        onClick={() => guessPopup({ column: 2, row: 2, answer: answers22, img: "url(https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg)" })}>
                    </button>
                </div>
            </div>

            <div class="pop-up-guess text-center" id="pop-up-guess">
                <div class="d-flex flex-row" onClick={() => hidePopup()}>
                    <button class="cuterButton ms-auto">X</button>
                </div>
                <p class="mb-3">{rows[currentBox.row] + " x " + cols[currentBox.column] + ":"}</p>
                <input
                    type="text"
                    id="popup-text"
                    class="w-100 mb-3" />
                <button
                    class="cuterButton align-self-center dark-grey-background"
                    onClick={() => submitGuess(document.getElementById("popup-text").value)}>Submit</button>
            </div>

            <div class={"pop-up-guess text-center " + (finishGame() ? "d-block" : "d-none")}>
                <h5 class=" mt-3">Congrats, you did it! I love you :)</h5>
                <Link to="/moviemoji">
                    <button class="cuterButton mt-2 dark-grey-background">Next Game!</button>
                </Link>
            </div>
        </div>
    )
}

export default MovieGrid;