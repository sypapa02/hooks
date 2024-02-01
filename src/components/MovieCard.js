import React from 'react';
import '../App.css';

const MovieCard = ({ movie }) => {
return (
    <div className="card">
    <img
        src={movie.posterURL}
        alt={movie.title}
        className="card-img-top"
    />
    <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <span className="badge bg-primary">{movie.rating}</span>
    </div>
    </div>
);
};

export default MovieCard;