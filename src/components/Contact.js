import React, { useState } from 'react'
import { ContactFormIds, FormIds } from '../utils/enums'

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
        <div id={ContactFormIds.ContactFormContainer}>
            <form onSubmit={submitInfo} id={ContactFormIds.ContactForm}>
                <label id={FormIds.Name} htmlFor={FormIds.Name} >{`${FormIds.Name}: `}</label>
                <input type={FormIds.Text} onChange={handleInput} />
                <label id={FormIds.Email} htmlFor={FormIds.Email} >{`${FormIds.Email}: `}</label>
                <input type={FormIds.Email} onChange={handleInput} />
                <label id={FormIds.Message} htmlFor={FormIds.Message} >{`${FormIds.Message}: `}</label>
                <textarea onChange={handleInput} htmlFor={FormIds.Message} />
                <button type={FormIds.Submit}>Submit</button>
            </form>

            <button onClick={() => reset()}>Go Back</button>
        </div>
    )
}