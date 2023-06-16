import React from 'react';

const FilterToDo = () => {
    const hello = () => {
        alert('hello');
    }

    return (
        <div>
            <button onClick={hello}>Show all</button>
            <button onClick={hello}>Show active</button>
            <button onClick={hello}>Show completed</button>
        </div>
    );
}

export default FilterToDo;
