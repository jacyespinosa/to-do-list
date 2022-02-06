import React from 'react';
import { ToDo } from './ToDo';

export const ToDoList = ({ toDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { toDos.map(todo => (
                    <ToDo text={todo.text}/>
                ))}
            </ul>
        </div>

    );
}