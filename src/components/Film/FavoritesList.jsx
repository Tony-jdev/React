import React, { useContext } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext';

const FavoritesList = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h3>Favorite films:</h3>
      <ul>
        {favorites.map((film) => (
          <li key={film.imdbID}>{film.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
