import React from 'react'

export function TodoItem(props) {
    return <li className={`todo ${props.todo.completed ? 'completed' : ''}`}>
        <div className="view">
            <input type="checkbox" defaultChecked={`${props.todo.completed ? true : ''}`}
                   className="toggle"/>
            <label>{props.todo.title}</label>
            <button className="destroy"></button>
        </div>
        <input type="text" className="edit"/>
    </li>
}