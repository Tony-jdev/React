import React from 'react';
import FilterButton from './FilterButton';

const FilterToDo = ({ filter_map, filter, setFilter }) => {
    const filter_names = Object.keys(filter_map);

    return (
        <div>
            {filter_names.map((name) => (
                <FilterButton
                    name={name}
                    setFilter={setFilter}
                    key={name}
                    activeFilter={filter}
                />
            ))}
        </div>
    );
};

export default React.memo(FilterToDo);
