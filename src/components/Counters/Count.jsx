import React from 'react';

const render = {
    count1: 0,
    count2: 0
};

const Count = ({value, id}) => {
    console.log(`Count ${id} render: ${++render[`count${id}`]}`);

    return (
        <div>
            <strong>{value}</strong>
        </div>
    );
}

export default Count;
