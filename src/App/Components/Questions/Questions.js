import { useEffect, useState, useRef} from 'react';
import Score from "../Score/Score";
import Timer from '../Timer/Timer';
import '../Questions/Questions.css';

function Questions(props) {
    let [results, updateSortedAnswers] = useState([]);
    let [correct, updateCorrect] = useState(0);
    let [total, updateTotal] = useState(0);
    let interval = useRef(null);

    useEffect(()=>{
        let array = props.answers;        
        var currentIndex = array.length,  randomIndex;        

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        updateSortedAnswers(array);
    })

    let checkResults =(e)=>{
        let results = JSON.parse(e.target.attributes.getNamedItem('answer').value);
        if(results){ updateCorrect(correct + 1); }
        updateTotal(total + 1);
        props.createNewQuestion();
        clearTimeout(interval.current);
    }

    return (
        <div className="Questions">
            <Score 
                correct={correct} 
                total={total}
                endGame={props.endGame}
                />
            <Timer
                updateTotal={updateTotal}
                total={total}
                createNewQuestion={props.createNewQuestion}
                interval={interval}
            />
            <div>
                <img className="img-fluid" src={props.image} />
            </div>

            {                
                results.map((item)=>(
                    <div className="possible-answers">
                        <button answer={item.answer.toString()} onClick={checkResults}>{item.name}</button>
                    </div>
                ))                
            }
        </div>
    );
}

export default Questions;