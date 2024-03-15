import React, { useState } from "react";
import EightBallAnswers from "./EightBallAnswers";
import "./MagicEightBall.css" // css file to display a ball


const EightBall = ({ answers }) => {
    const [message, setMessage] = useState("Think of a question");
    const [redCount, setRedCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);
    const [goldenrodCount, setGoldenrodCount] = useState(0);

    /* Callback function that handels clicking of Eight ball and Generate random message 
        from a list of answers or answers array.*/

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomResponse = answers[randomIndex];
        setMessage(randomResponse.msg);

        //display counts of the number of times the eight ball shows up as each of the three different colors.
        countColors(randomResponse.color);
    }

    // Function to count the colors
    const countColors = (color) => {
        if (color === "red") {
            setRedCount((prevCount) => prevCount + 1)
        } else if (color === "green") {
            setGreenCount((prevCount) => prevCount + 1)
        } else if (color === "goldenrod") {
            setGoldenrodCount((prevCount) => prevCount + 1)
        }   
    };

    /* Find the color corrosponding to the current message. First get random object in answers array
    that contains the message generated randomly and store the value in currentResponse variable. 
    The initial value of message is setted to "Think of a question", so the current respone will be undefined. 
    if the current response isn't undefined it will set the color of Eightball the corresponding color else set black.
    */
    const currentResponse = answers.find((response) => response.msg === message);
    const currentColor = currentResponse ? currentResponse.color : "black";


    //handles game restart, reset color counts and set the ball to its initial position.
    const restartGame = () => {
        setMessage("Think of a question");
        setGreenCount(0);
        setRedCount(0);
        setGoldenrodCount(0);
    }
    return (
        <div className="EightBall">
            <div className="EightBall-header">
                <h1 className="EightBall-title">Magic Eight Ball</h1>
                <button className="EightBall-resetBtn" onClick={restartGame}>Restart</button>
            </div>

            <div
                className="EightBall-message" style={{ backgroundColor: currentColor }} onClick={handleClick}>{message}
            </div>
            <div className="EightBall-count">
                <h4 style={{ color: "green" }}>Green count: {greenCount} </h4>
                <h4 style={{ color: "red" }}>Red count: {redCount}</h4>
                <h4 style={{ color: "goldenrod" }}>Goldenrod count: {goldenrodCount}</h4>
            </div>

        </div>
    )

}

export default EightBall 
