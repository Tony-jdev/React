import React, { useState } from 'react';

const Film = ({ film }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className='film-card' key={film.id}>
            <img src={film.image} alt={film.name} />
            <h4>{film.name} ({film.year})</h4>
            {showDetails && (
                <div>
                    <p>Director: {film.director}</p>
                    <p>{film.description}</p>
                </div>
            )}
            <button onClick={handleToggleDetails}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
        </div>
    );
}

export default Film;
