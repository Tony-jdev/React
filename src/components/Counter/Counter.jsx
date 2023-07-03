import React, { useRef, useState } from 'react';
import Forma from '../../Forms/Forma';
import Forms from '../../Forms/Forms';
import Timer from './Timer';

const Counter = () => {
    const [count, setCount] = useState(0);
    const ref = useRef(0);

    const decrement = () => {
        setCount(count - 1);
    }
    const increment = () => {
        setCount(count + 1);
    }

    const handleClick = () => {
        ref.current = ref.current + 1;
        alert(ref.current);
    }

    return (
        <div>
            <div>
                <button onClick={() => { decrement() }}>-</button>
                <span>{count}</span>
                <button onClick={() => { increment() }}>+</button>
            </div>

            <hr/>

            <button onClick={handleClick}>Click me</button>

            <Timer />

            <Forma />

            <Forms />

        </div>
    );
}

export default Counter;
