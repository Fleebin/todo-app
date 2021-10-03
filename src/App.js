import React from 'react'
import { TodoList } from './components/TodoList/TodoList'
import './style.scss'

export const App = () => {
    return (
        <div className="app">
          <TodoList />
        </div>
    )
}
