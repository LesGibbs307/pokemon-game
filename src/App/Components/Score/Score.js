import React from 'react';

function Score(props) {

    if(props.total === 10){
        console.log("Endgame call")
        props.endGame(props.correct)
    }

    return (
        <div>
            <div>Correct: {props.correct}/ Total : {props.total}</div>
        </div>
    );
}

export default Score;