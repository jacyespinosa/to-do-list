import { ToDoForm} from "./components/ToDoForm";
import { ToDoList} from "./components/ToDoList";
import './App.css';
import React, { useState } from "react";
import styled from "styled-components";

const  StyledContainer= styled.div`
  border: 2px solid gray;
  padding: 15px 55px;
  width: 40%;
  margin: auto;
  margin-top: 50px;
`
const StyledLogo = styled.h1 `
  margin-top: 5px;
`

const StyledH3 = styled.h3 `
  margin-right: 390px;
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
            <div>
                <StyledH3>To Do List</StyledH3>
            </div>
            <ToDoList toDos={toDos}/>
        </StyledContainer>

    </div>
  );
}

export default App;
