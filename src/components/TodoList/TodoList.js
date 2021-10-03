import React, { useState } from 'react'
import { TodoForm } from '../TodoForm/TodoForm'
import { Todo } from '../Todo/Todo'
import './style.scss'

export const TodoList = () => {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)

    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    return (
        <div className="boxList">
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} removeTodo={removeTodo} />
        </div>
    )
}
