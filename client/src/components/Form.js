import React, { useState } from 'react'

const Form = ({ handleSubmit, onClick }) => {

    const [formValues, setFormValues] = useState({
        title: "",
        category: "",
        director: "",
    })

    // para poder actualizar los valores del formulario
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        handleSubmit({ ...formValues })
        onClick()
        // console.log(formValues)
    }

    return (
        <form onSubmit={_handleSubmit} className='saveMovie'>
            <label htmlFor='title'>Title</label>
            <input
                name='title'
                type='text'
                placeholder="type the movie's name" 
                value={formValues.title}
                onChange={handleChange}
                />
                
            <label htmlFor='category'>Category</label>
            <input
                name='category'
                type='text'
                placeholder="type the movie's category" 
                value={formValues.category}
                onChange={handleChange}
                />

            <label htmlFor='director'>Director</label>
            <input
                name='director'
                type='text'
                placeholder="type the movie's director" 
                value={formValues.director}
                onChange={handleChange}
                />

            <input type='submit' value='Save'/>
        </form>
    )
}

export default Form
