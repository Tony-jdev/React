import React, { useState, useContext } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext';

const Film = ({ film }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { addToFavorites, removeFromFavorites, favorites } = useContext(FavoritesContext);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleToggleFavorite = () => {
    if (favorites.includes(film)) {
      removeFromFavorites(film);
    } else {
      addToFavorites(film);
    }
  };

  const isFavorite = favorites.includes(film);

  return (
    <div className='film-card' key={film.imdbID}>
      <img src={film.Poster} alt={film.Title} />
      <div className="film-info">
        <h4>{film.Title} ({film.Year})</h4>
        <button onClick={handleToggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        <button onClick={handleToggleFavorite} style={{ color: isFavorite ? 'red' : 'black' }}>
          &#10084;
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
