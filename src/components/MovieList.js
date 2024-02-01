import { useState } from 'react';
import React from 'react';
import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { films } from '../base';
import '../App.css';

const MovieList = () => {
const [movies, setMovies] = useState(films);
const [ratingFilter, setRatingFilter] = useState(null);
const [searchQuery, setSearchQuery] = useState('');
const [showForm, setShowForm] = useState(false);
const [newMovie, setNewMovie] = useState({title: "", description: "", rating: 0});


const handleRatingFilter = (event) => {
    const rating = Number(event.target.value);
    setRatingFilter(rating);
};

const handleSearchQuery = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
};

const handleAddMovie = () => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setShowForm(false)
    setNewMovie({title: "", description: "", rating: 0});
};

const filteredMovies = movies.filter((movie) => {
    // filter by rating
    if (ratingFilter && movie.rating < ratingFilter) {
    return false;
    }

    // search by name or description
    if (searchQuery) {
    const query = searchQuery.toLowerCase();
    if (
        !movie.title.toLowerCase().includes(query) &&
        !movie.description.toLowerCase().includes(query)
    ) {
        return false;
    }
    }

    return true;
});

return (
    <div>
    <div className="row">
        <div className="col-md-3">
        <select className="form-select" onChange={handleRatingFilter}>
            <option value="">d'autres</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>
        <div className="col-md-3">
        <label>rechercher le film</label>
        <input type="text" className="form-control" onChange={handleSearchQuery} />
        </div>
        </div>
    <div/>
        <div>
    <button className="btn btn-primary" onClick={() => setShowForm(true)}>
       cliquer pour Ajouter un film 
    </button>
        </div>
    {showForm && (
    <div className="row">
        <div className="col-md-4">
        <div className="form-group">
            <label>Title</label>
            <input
            type="text"
            className="form-control"
            value={newMovie.title}
            onChange={(e) =>
                setNewMovie((prev) => ({ ...prev, title: e.target.value }))
            }
            />
        </div>
        <div className="form-group">
            <label>Description</label>
            <textarea
            className="form-control"
            rows="3"
            value={newMovie.description}
            onChange={(e) =>
                setNewMovie((prev) => ({
                ...prev,
                description: e.target.value,
                }))
            }
            ></textarea>
        </div>
        <div className="form-group">
            <label>Rating</label>
            <input
            type="number"
            min="0"
            max="10"
            className="form-control"
            value={newMovie.rating}
            onChange={(e) =>
            setNewMovie((prev) => ({ ...prev, rating: e.target.value }))
            }
            />
        </div>
        <button className="btn btn-primary" onClick={handleAddMovie}>
            Add Movie
        </button>
        </div>
    </div>
    
    )}
<div className="row">
    {filteredMovies.map((movie) => (
        <div className="col-md-4" key={movie.title}>
        <MovieCard movie={movie} />
        </div>
    ))}
    </div>
</div>
);
}

    export default MovieList
