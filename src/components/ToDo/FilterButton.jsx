import React from 'react';
import './style.css';

const FilterButton = ({ name, setFilter, activeFilter }) => {
    const isActive = activeFilter === name;

    return (
        <button className={isActive ? 'active' : ''} onClick={() => setFilter(name)}>
            Show {name} tasks
        </button>
    );
};

export default FilterButton;
