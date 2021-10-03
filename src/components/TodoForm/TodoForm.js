import React, { useState } from 'react';
import AddCircle from '@material-ui/icons/AddCircle';
import './style.scss'


export const TodoForm = (props) => {

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('')

    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Digite'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
            />
            <button>
                <AddCircle />
            </button>
        </form>
    )
}
