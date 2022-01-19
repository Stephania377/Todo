import './App.css';
import React, {useState} from 'react';
import ToDoList from "./Components/ToDoList";
import Form from "./Components/Form";

function App() {

  // creation du state
  const [inputText, setInputText] = useState([]);
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1> TODO LIST </h1>
      </header>
      <Form inputText = {inputText} setInputText = {setInputText} todos = {todos} setTodos = {setTodos} />
      <ToDoList inputText = {inputText} setInputText = {setInputText} todos= {todos} setTodos={setTodos}  />
    </div>
  );
}

export default App;
