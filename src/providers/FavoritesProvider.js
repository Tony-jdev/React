import React, { useState } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (film) => {
    setFavorites([...favorites, film]);
  };

  const removeFromFavorites = (film) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.imdbID !== film.imdbID);
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
