import React, { useEffect, useState } from 'react';
import Questions from '../Questions/Questions';
import GameResult from '../GameResults/GameResults';

function Game(props){
    let [answers, gatherAnswers] = useState([]);
    let [answerImage, setAnswerImage] = useState("");
    let [gameOver, setGameOver] = useState(false);
    let [finalScore, updateFinalScore] = useState(0);

    let endGame = (score) => {
        updateFinalScore(score);
        setGameOver(true)
    }

    let getAnswerImage = async (url, image) => {
        const results = await fetch(url)
                            .then(resp => resp.json())
                            .catch(error => error)
        let officialImage = results.sprites.other["official-artwork"].front_default;
        let defaultImage = results.sprites.front_default;
        image = (officialImage !== null) ? officialImage 
                    : (defaultImage !== null) ? defaultImage 
                        : alert("Error loading image");
        setAnswerImage(image);
    }

    let createNewQuestion = async () =>{
        console.log("create new question")
        let questionArray = [];
        let image = "";
        for(let i = 0; 4 > i; i++){
            let questionObject = {
                answer : false,
                name: "",
                url: ""
            };
            let possibleAnswer = props.results[Math.floor(Math.random() * props.results.length)];
            questionObject.answer = (i === 0) ? true : false;
            image = (i === 0) ? getAnswerImage(possibleAnswer.url, image) : "";
            questionObject.name = possibleAnswer.name;
            questionObject.url = possibleAnswer.url;
            questionArray.push(questionObject);
        }
        gatherAnswers(questionArray);
    }

    useEffect(()=>{
        createNewQuestion();
    },[])

    return(
        <div className="Game">
            {
                gameOver ?
                <GameResult
                    finalScore={finalScore}
                    gameOver={gameOver}
                /> :
                <Questions 
                createNewQuestion={createNewQuestion} 
                answers={answers} 
                image={answerImage}  
                endGame={endGame}
                />
            }
        </div>
    );
}

export default Game;