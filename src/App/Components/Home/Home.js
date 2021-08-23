import { useState } from "react";
import Game from "../Game/Game";
import '../Home/Home.css';

function Home(props){
    let [list, getList] = useState(null);    

    let startGame = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
                           .then(resp => resp.json())
                           .catch(error => error);
        let results = data.results;
        if(results === null){
            alert("Problem getting Pokemon list, please try again");
        }
       getList(results);
    }

    return(
        <div className="Home">
            {
                list === null ?
                    <div className="container">
                        {
                            props.gameOver ?
                            <div>
                                <h2>Your final score was {props.finalScore}</h2>
                                <h1>Play Again!?</h1>
                            </div>
                            :
                            <h1>Name that Pokemon!</h1>
                        }

                        <button onClick={startGame}>Start</button>
                    </div>
                :                                
                <Game results={list}  />
            }
        </div>
    );
}

export default Home;