import React, { useState } from 'react'
import { MenuItems, FormIds } from '../utils/enums'

export const Contact = ({reset}) => {
    const [formState, setFormState] = useState({})

    const handleInput = (ev) => {
        ev.preventDefaul();
        const { name, value } = ev.target;
        setFormState({...formState, [name]: value})
    }

    const submitInfo = () => {
        console.log(formState)
    }

    return(
        <div id={MenuItems.Contact}>
            <form onSubmit={submitInfo}>
                <label id={FormIds.Name} htmlFor={FormIds.Name} >Name: </label>
                <input type={FormIds.Text} onChange={handleInput} />
                <label id={FormIds.Email} htmlFor={FormIds.Email} >Email: </label>
                <input type={FormIds.Email} onChange={handleInput} />
                <label id={FormIds.Message} htmlFor={FormIds.Message} >Message: </label>
                <textarea onChange={handleInput} />
                <button type={FormIds.Submit}>Submit</button>
            </form>

            <button onClick={() => reset()}>Go Back</button>
        </div>
    )
}