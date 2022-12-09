const express = require('express')
const { addMovie, getMovies } = require ('../controllers/movieController')

const api = express.Router()

api.post('/movies', addMovie)
api.get('/movies', getMovies)

module.exports = api