import React, { useState, useEffect } from 'react'
import AddButton from '../components/AddButton'
import Header from '../components/Header'
import MoviesList from '../components/MoviesList'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { saveMovie } from '../services/addMovies'
import { getMovies } from '../services/loadMovies'

const Main = () => {

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function loadProducts() {
    const response = await getMovies()
    console.log(response)
    if (response.status === 200) {
      setMovies(response.data.movies)
    }
    setIsLoading(false)
    return response
  }

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    console.log(movies)
  }, [movies])

  const handleSubmit = async (data) => {
    await saveMovie(data)
    loadProducts()
  }

  return (
    <div className='main'>
      <Header />
      <AddButton onClick={() => setIsFormOpen(!isFormOpen)} />
      {!movies.length
        ? <h2>There are no movies to show yet</h2>
        : <MoviesList movies={movies} isLoading={isLoading} />
      }

      {isFormOpen && <Form handleSubmit={handleSubmit} onClick={() => setIsFormOpen(!isFormOpen)}/>}
      <Footer />
    </div>
  )
}

export default Main
