import React from 'react';
import styled from "styled-components";

const StyledDivTasks = styled.div `
  display: flex;
  justify-content: center;
`
const StyledTask = styled.div `
  flex: 0 0 422px;
  //width: 422px;
  //margin: auto;
  background-color: lightgreen;
  height: 25px;
  padding-top: 5px;
  border: 1px solid gray;
`

const StyledCrossIcon = styled.a`
  flex: 0 0 10px;
  padding: 0 5px;
 `

export const CompletedTasks = ({ text, deleteTask }) => {
    return (
        <StyledDivTasks>
            <StyledTask>{ text }</StyledTask>
            <button onClick={deleteTask}>❌</button>
        </StyledDivTasks>
    );
}