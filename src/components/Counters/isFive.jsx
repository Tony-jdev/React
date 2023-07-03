import React, { useMemo } from 'react';

let render = 0;

const IsFive = ({value}) => {
    console.log(`isFive render: ${++render}`);

    const getResult = () => {
        let i = 0;
        while (i < 100000000) { ++i; }
        return value === 5 ? 'Five' : 'not Five';
    }

    const result = useMemo(getResult, [value]);

    return (
        <div>
            {result}
        </div>
    );
}

export default React.memo(IsFive, (prevProps, nextProps) => {
    return nextProps.value !== 5;
});
