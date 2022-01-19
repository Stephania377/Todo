import React, {Component} from 'react';
import ToDo from './ToDo';

const ToDoList = ({inputText, setInputText, todos, setTodos}) => {
	return(
		<div className="todo-container">
			<ul className  ="todo-list">
				{
					todos.map(todo => (
						<ToDo inputText = {inputText} setInputText = {setInputText} todo = {todo} key={todo.id} todos= {todos} setTodos={setTodos}/>
					))
				}
			</ul>
		</div>


	);
}
export default ToDoList;