const { getAll, create, getOne, remove, update, setGenres, setActors, setDirectors } = require('../controllers/movie.controller');
const express = require('express');
const routerDirector = require('./director.router');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(getAll)
    .post(create);

routerMovie.route('/:id/genres')
    .post(setGenres)

routerMovie.route('/:id/actors')    
    .post(setActors);

routerMovie.route('/:id/directors') 
    .post(setDirectors);

routerMovie.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerMovie;