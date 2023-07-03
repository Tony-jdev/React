import React, { useState } from 'react';
import Count from './Count';
import IsFive from './isFive';

const Counters = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            <div>
                <button onClick={()=>{setCount1(count1 + 1);}}>+</button>
                <Count value={count1} id={1}/>
            </div>
            <hr/>
            <div>
                <button onClick={()=>{setCount2(count2 + 1);}}>+</button>
                <Count value={count2} id={2}/>
            </div>

            <IsFive value={count2}/>
        </div>
    );
}

export default Counters;
