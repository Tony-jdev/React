import React, { useState } from 'react';

const Film = ({ film }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className='film-card' key={film.imdbID}>
            <img src={film.Poster} alt={film.Title} />
            <div className="film-info">
                <h4>{film.Title} ({film.Year})</h4>
                <button onClick={handleToggleDetails}>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
            {showDetails && (
                <div className="film-details">
                    <p>Type: {film.Type}</p>
                </div>
            )}
        </div>
    );
}

export default Film;
