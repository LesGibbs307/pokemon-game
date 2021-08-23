import React from 'react';
import Home from '../Home/Home';

function GameResults(props) {
    return (
        <div className="GameResults">
            <Home finalScore={props.finalScore} gameOver={props.gameOver} />
        </div>
    );
}

export default GameResults;