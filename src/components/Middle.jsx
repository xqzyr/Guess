import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Middle.css";

export const Middle = ({ number }) => {
    const [guess, setGuess] = useState();
    const [currGuess, setCurrGuess] = useState();
    const [chancesLeft, setChancesLeft] = useState(3);

    const createElements = () => {
        const elements = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

        return elements.map((val, index) => {
            return (
                <>
                    <Button
                        className="numbers"
                        key={val}
                        onClick={() => {
                            setCurrGuess(val);
                            // console.log("val", val);
                        }}
                    >
                        {val}
                    </Button>

                    {index === 4 && <br />}
                </>
            );
        });
    };

    if (chancesLeft === 0) {
        return (
            <>
                <div className="mid">
                    <p>You have {chancesLeft} chance(s) left</p>
                    <h3>😜 You lost 😜</h3>
                    <hr />
                </div>
            </>
        );
    } else if (number > guess) {
        return (
            <>
                <div className="mid">
                    <p>You have {chancesLeft} chance(s) left</p>
                    <div> Your guess is {currGuess} </div>
                    <div className="mid-btns">
                        {createElements()}
                        <br></br>
                        <Button
                            className="CheckGuess"
                            onClick={() => {
                                if (chancesLeft > 0) {
                                    setChancesLeft(chancesLeft - 1);
                                }
                                setGuess(currGuess);
                            }}
                        >
                            Check my guess
                        </Button>
                    </div>
                    <br />
                    <h3>Hint - Try a larger number</h3>
                    <hr />
                </div>
            </>
        );
    } else if (number < guess) {
        return (
            <>
                <div className="mid">
                    <p>You have {chancesLeft} chance(s) left</p>
                    <div> Your guess is {currGuess} </div>
                    <div className="mid-btns">
                        {createElements()}
                        <br></br>
                        <Button
                            className="CheckGuess"
                            onClick={() => {
                                if (chancesLeft > 0) {
                                    setChancesLeft(chancesLeft - 1);
                                }
                                setGuess(currGuess);
                            }}
                        >
                            Check my guess
                        </Button>
                    </div>
                    <br />
                    <h3>Hint - Try a smaller number</h3>
                    <hr />
                </div>
            </>
        );
    } else if (number == guess) {
        return (
            <>
                <div className="mid">
                    <p>You have {chancesLeft} chance(s) left</p>
                    <h3>😀 You Won 😀</h3>
                    <hr />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="mid">
                    <p>You have {chancesLeft} chance(s) left</p>
                    <div> Your guess is {currGuess} </div>
                    <div className="mid-btns">
                        {createElements()}
                        <br></br>
                        <Button
                            className="CheckGuess"
                            onClick={() => {
                                if (chancesLeft > 0) {
                                    setChancesLeft(chancesLeft - 1);
                                }
                                setGuess(currGuess);
                            }}
                        >
                            Check my guess
                        </Button>
                    </div>
                    <hr />
                </div>
            </>
        );
    }
};

export default Middle;
