const Movie = require('../models/Movies')

async function addMovie(req, res) {
    try {
        const {
            title,
            category,
            director,
        } = req.body

        const movie = Movie({
            title,
            category,
            director,
        })

        const moviesStored = await movie.save()

        res.status(201).send({ moviesStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getMovies(req, res){
    // Lean convierte a objetos planos de js, Exec indica que ejecute la consulta y retorna la promesa
    const movies = await Movie.find().lean().exec()
    res.status(200).send({movies})
}

module.exports = {
    addMovie,
    getMovies
}