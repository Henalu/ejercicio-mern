const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MoviesSchema = Schema({
    title: String,
    category: String,
    director: String, 
}, {
    timestamps: true
})

module.exports = mongoose.model('Movies', MoviesSchema)