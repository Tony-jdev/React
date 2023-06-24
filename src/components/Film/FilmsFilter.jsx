import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilmsFilter = ({ handleSearch, years, yearSortOrder, setYearSortOrder }) => {
  const [searchText, setSearchText] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('q') || '';
    const year = searchParams.get('year') || 'all';
    const type = searchParams.get('type') || '';

    setSearchText(query);
    setYearFilter(year);
    setTypeFilter(type);
  }, [searchParams]);

  const handleSearchClick = () => {
    setSearchParams({ q: searchText, year: yearFilter, type: typeFilter });
    handleSearch(searchText, yearFilter, typeFilter);
  };

  return (
    <div className="filters">
      <div className="filter-input">
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearchClick} className="search-button">
          Search
        </button>
      </div>

      <div className="filter-select-container">
        <label htmlFor="yearFilter">Year:</label>
        <select
          id="yearFilter"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-select-container">
        <label htmlFor="typeFilter">Type:</label>
        <select
          id="typeFilter"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="filter-select"
        >
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </div>

      {yearFilter === 'all' && (
        <div className="sort-year">
          <select
            id="yearSortOrder"
            value={yearSortOrder}
            onChange={(e) => setYearSortOrder(e.target.value)}
            className="sort-select"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default FilmsFilter;
