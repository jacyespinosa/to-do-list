import React from 'react';
import styled from "styled-components";


const StyledForm = styled.form`
  display: flex;
  padding-top: 5px;
  justify-content: center;
`

const StyledInputTask = styled.input `
  flex: 0 0 515px;
  height: 25px;
  padding-top: 5px;
  border: 1px solid gray;
`

const StyledButton = styled.button `
  flex: 0 0 15px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
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
            <StyledForm>
                <StyledInputTask value={newTask} onChange={newTaskHandler} type="text" className="todo-input" />
                <StyledButton onClick={ToDoListHandler} className="todo-button" type="submit">
                    <i className="fa fa-plus"></i>
                </StyledButton>
            </StyledForm>



    )
}