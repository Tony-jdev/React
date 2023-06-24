import React, { useState, useEffect } from 'react';
import Film from './Film';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import './Films.css';
import FilmsFilter from './FilmsFilter';

const Films = () => {
  const [filmsList, setFilmsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [yearSortOrder, setYearSortOrder] = useState('asc');

  const years = [];
  for (let year = 1950; year <= 2022; year++) {
    years.push(year);
  }

  const fetchFilms = async (query, year, type) => {
    setIsLoading(true);

    const params = {
      s: query,
      apikey: '92417230'
    };

    if (year && year !== 'all') {
      params.y = year;
    }
    if (type) {
      params.type = type;
    }

    const response = await axios.get('https://www.omdbapi.com/', { params });

    if (response.data.Response === 'True') {
      setFilmsList(response.data.Search);
    } else {
      setFilmsList([]);
    }

    setIsLoading(false);
  };

  const handleSearch = (query, year, type) => {
    fetchFilms(query, year, type);
  };

  useEffect(() => {
    if (searchParams.has('q') || searchParams.has('year') || searchParams.has('type')) {
      const query = searchParams.get('q');
      const year = searchParams.get('year');
      const type = searchParams.get('type');

      fetchFilms(query, year, type);
    }
  }, [searchParams]);

  useEffect(() => {
    if (yearSortOrder === 'asc') {
      const sortedFilms = [...filmsList].sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
      setFilmsList(sortedFilms);
    } else {
      const sortedFilms = [...filmsList].sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
      setFilmsList(sortedFilms);
    }
  }, [yearSortOrder]);

  return (
    <div>
      <div className="search-filters-container">
        <FilmsFilter handleSearch={handleSearch} years={years} yearSortOrder={yearSortOrder} setYearSortOrder={setYearSortOrder} />
      </div>

      {isLoading && <div>Loading...</div>}

      <div className="film-grid">
        {filmsList.map((film) => (
          <Film film={film} key={film.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default Films;
