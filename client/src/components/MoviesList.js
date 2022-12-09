import React from 'react'
import Loading from './Loading'

const MoviesList = ({movies, isLoading}) => {

    return (
        <div className='moviesList'>
            {isLoading
                ? <Loading />
                : movies.map((movie, i) => {
                    return (
                        <div key={i} className='movie'>
                            <h3>Title: {movie.title}</h3>
                            <h3>Category: {movie.category}</h3>
                            <h3>Director: {movie.director}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MoviesList
