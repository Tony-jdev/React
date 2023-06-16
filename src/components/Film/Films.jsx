import React, { useState } from 'react';
import Film from './Film';
import films from './filmslist.js';
import AddFilm from '../Film/AddFilm'
import { v4 as uuidv4 } from 'uuid';

const Films = () => {
    const [filmsList, setFilmsList] = useState(films);

    const addFilm = (film) => {
        setFilmsList([...filmsList, {
            id: uuidv4(),
            name: film.name,
            year: film.year,
            image: film.image,
            director: film.director,
            description: film.description
        }]);
    }

    return (
        <div>
            <AddFilm addFilm={addFilm} />

            <div className='search-container'>
                <input type='text' placeholder='Search by name' />
            </div>

            <div className='film-grid'>
                {filmsList.map((film) => <Film film={film} key={film.id} />)}
            </div>
        </div>
    );
}

export default Films;
