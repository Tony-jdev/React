import React from 'react';

const FilterButton = ({name, setFilter}) => {

    return (
        <button onClick={() => setFilter(name)}>Show {name} tasks</button>
    );
}

export default FilterButton;
