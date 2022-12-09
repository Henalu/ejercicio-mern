import React from 'react'

const AddButton = ({ onClick }) => {
    return (
        <div className='addButton'>
            <button onClick={onClick}>Add Movie</button>
        </div>
    )
}

export default AddButton
