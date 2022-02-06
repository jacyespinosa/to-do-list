import React from 'react';
import styled from "styled-components";
import { ToDoList} from "./ToDoList";

const StyledDivTasks = styled.div `
  display: flex;
  justify-content: center;
`
const StyledTask = styled.div `
  flex: 0 0 422px;
  //width: 422px;
  //margin: auto;
  height: 25px;
  padding-top: 5px;
  border: 1px solid gray;
`

const StyledCheckIcon = styled.a`
  flex: 0 0 10px;
  padding: 0 5px;
`

const StyledCrossIcon = styled.a`
  flex: 0 0 10px;
  padding: 0 5px;
`

export const ToDo = ({ text, toDos, todo, setToDoList }) => {
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
            <StyledTask>{ text }</StyledTask>
            <button onClick={completeTask}>✅</button>
            <button onClick={deleteTask}>❌</button>
            {/*<StyledCheckIcon>✅</StyledCheckIcon><StyledCrossIcon>❌</StyledCrossIcon>*/}
        </StyledDivTasks>

    );

}