import React from 'react';
import { ToDo } from './ToDo';

export const ToDoList = ({ toDos, setToDoList }) => {
    // Loop through the list of toDos using map function and pass each item (object) as a prop to the other component.
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { toDos.map(todo => (
                    <ToDo
                        setToDoList={setToDoList}
                        toDos={toDos}
                        text={todo.text}
                        todo={todo}
                        key={todo.id}/>
                ))}
            </ul>
        </div>

    );
}