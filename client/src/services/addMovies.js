//Para permitir que React consuma la API hay que indicarle a la API primero que lo permita
import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL

export async function saveMovie(movieData) {
    try {
        var formData = new FormData()

         // He probado a utilizar el .append de formData pero no me ha funcionado
         // Por eso lo he hecho de esta manera
        formData = {
            "title": movieData.title,
            "category": movieData.category,
            "director": movieData.director,
        }
        
        const response = await axios({
            url: `${baseUrl}/movies`,
            method: 'POST',
            data: formData
        })
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }
}