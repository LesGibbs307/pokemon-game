import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Timer(props) {
    const [seconds, setSeconds] = useState(5);
    let total = useRef(null);

    useEffect(() => {
        console.log(`${seconds} timer`)
      if (seconds > 0) {
        if(total.current != props.total && total.current !== null) {
          total.current = props.total;
          setSeconds(5);
        } else{
          total.current = props.total;
          props.interval.current = setTimeout(() => setSeconds(seconds - 1), 1000);
        }       
      } else {
        clearTimeout(props.interval.current)
        props.updateTotal(props.total + 1)
        props.createNewQuestion()
        setSeconds(5)
      }
    });
    return (
        <div>
            Time Remaining: {seconds}
        </div>
    );
}

export default Timer;