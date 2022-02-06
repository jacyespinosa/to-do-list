import React from 'react';
import styled from 'styled-components';

const  StyledContainer= styled.div`
  border: 2px solid gray;
  padding: 15px;
  width: 40%;
  margin: auto;
  margin-top: 50px;
`

const StyledLogo = styled.h1 `
  margin-top: 5px;
`

const StyledInputTask = styled.input `
  width: 55%;
  height: 25px;
`

const StyledButton = styled.button `
  width: 45px;
  height: 31px;
`

export const HomePage = () => {
    return (
        <>
            <StyledContainer>
                <div>
                    <img src="https://img.icons8.com/nolan/100/todo-list.png" alt="to-do"/>
                    <StyledLogo>What To Do?</StyledLogo>
                </div>
                <div>
                    <StyledInputTask placeholder="Enter New Task"/>
                    <StyledButton>Add</StyledButton>
                </div>

            </StyledContainer>
        </>


    )
}