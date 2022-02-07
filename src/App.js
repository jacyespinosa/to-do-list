import { ToDoForm} from "./components/ToDoForm";
import { ToDoList} from "./components/ToDoList";
import './App.css';
import React, { useState } from "react";
import styled from "styled-components";

const  StyledContainer= styled.div`
  padding: 15px 55px;
  width: 50%;
  min-height: auto;
  margin: auto;
  margin-top: 50px;
`
const StyledLogo = styled.h1 `
  margin-top: 5px;
`


function App() {
  const [newTask, setNewTask]   = useState("");
  const [toDos, setToDoList] = useState([]);

  return (
        <div className="App">
            <StyledContainer>
                <div>
                    <img src="https://img.icons8.com/nolan/100/todo-list.png" alt="to-do"/>
                    <StyledLogo>What To Do?</StyledLogo>
                </div>
                <ToDoForm toDos={toDos} newTask={newTask} setNewTask={setNewTask} setToDoList={setToDoList}/>
                <ToDoList toDos={toDos} setToDoList={setToDoList}/>
            </StyledContainer>

        </div>
  );
}

export default App;
