import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button `
  width: 45px;
  height: 31px;
`

const StyledInputTask = styled.input `
  min-width: 55%;
  height: 25px;
`

export const ToDoForm = ({ newTask, setNewTask, toDos, setToDoList }) => {
    const newTaskHandler = (e) => {
        setNewTask(e.target.value);
    };
    const ToDoListHandler = (e) => {
        e.preventDefault();
        setToDoList([
            ...toDos,
            {text: newTask, complete: false, id: Math.random() * 1000}]);
        setNewTask("");
    };

    return (
        <form>
            <StyledInputTask value={newTask} onChange={newTaskHandler} type="text" className="todo-input" />
            <StyledButton onClick={ToDoListHandler} className="todo-button" type="submit">Add</StyledButton>

        </form>

    )
}