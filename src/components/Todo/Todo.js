import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './style.scss'

export const Todo = ({ todos, removeTodo }) => {


    return todos.map((todo, index) => (
        <div className="item" key={index}>
            <div key={todo.id}>
                <p>{todo.text}</p>
            </div>
            <DeleteIcon onClick={() => removeTodo(todo.id)} />
        </div>
    ))
}
