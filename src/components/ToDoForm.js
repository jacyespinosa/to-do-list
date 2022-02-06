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
    //When there is a change in the input, the state of newTask is changed using the element target value being passed
    //on the text input
    const newTaskHandler = (e) => {
        setNewTask(e.target.value);
    };

    //When 'Add' button is clicked, ToDoListHandler function is called to change the state of the toDos by creating
    //a new object that consists of text, complete, id. Then it will also update the state of the newTask into an ""
    //so that the input default value reset to an empty string
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