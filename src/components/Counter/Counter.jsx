import React, { useState } from 'react';
import Forma from '../../Forms/Forma';
import Forms from '../../Forms/Forms';

const Counter = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    }
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <div>
                <button onClick={() => { decrement() }}>-</button>
                <span>{count}</span>
                <button onClick={() => { increment() }}>+</button>
            </div>

            <Forma />

            <Forms />
        </div>
    );
}

export default Counter;
