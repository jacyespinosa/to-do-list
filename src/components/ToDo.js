import React from 'react';
import styled from "styled-components";
import { ToDoList} from "./ToDoList";
import {CompletedTasks} from "./CompletedTasks";


const StyledDivTasks = styled.div `
  display: flex;
  padding-top: 5px;
  justify-content: center;
`
const StyledTask = styled.div `
  flex: 0 0 515px;
  height: 25px;
  padding-top: 5px;
  border: 1px solid gray;
`

const StyledCheckIcon = styled.a`
  flex: 0 0 15px;
  border-right: 2px solid gray;
  padding: 0 10px;
  cursor: pointer;
`

const StyledCrossIcon = styled.a`
  flex: 0 0 15px;
  padding: 0 8px;
  cursor: pointer;
`


export const ToDo = ({ text, toDos, todo, setToDoList, completed }) => {
    const deleteTask = () => {
        //Change the state of the toDos (list) to only render the IDs that have not been removed.
        setToDoList(toDos.filter((el) => el.id !== todo.id));
    }
    //Compare the element that is being clicked on to the setToDoList state and update the 'completed' object key to true.
    const completeTask = () => {
        setToDoList(toDos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: true
                }
            }

            return item;
        }))
    }

    return (
        <StyledDivTasks>
            <StyledTask className={`${completed ? "completed" : ''}`}>{ text }</StyledTask>
            <StyledCheckIcon onClick={completeTask}>✅</StyledCheckIcon>
            <StyledCrossIcon onClick={deleteTask}>❌</StyledCrossIcon>
        </StyledDivTasks>

    );

}