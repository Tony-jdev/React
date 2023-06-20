import React, { useState } from 'react';
import '../ToDo/style.css';

const AddFilm = ({ addFilm }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const film = {
            name,
            image,
            year,
            director,
            description
        };

        addFilm(film);

        setName('');
        setImage('');
        setYear('');
        setDirector('');
        setDescription('');
    };

    return (
        <div className="add-film-container">
            <form className="add-film-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year:</label>
                    <input
                        type="text"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="director">Director:</label>
                    <input
                        type="text"
                        id="director"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" id='addfilmbutton'>Add Film</button>
            </form>
        </div>
    );
}

export default AddFilm;
