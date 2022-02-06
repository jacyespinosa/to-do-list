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

export const ToDo = ({ text }) => {
    return (
        <StyledDivTasks>
            <StyledTask>{ text }</StyledTask>
            <button>✅</button>
            <button>❌</button>
            {/*<StyledCheckIcon>✅</StyledCheckIcon><StyledCrossIcon>❌</StyledCrossIcon>*/}
        </StyledDivTasks>

    );

}