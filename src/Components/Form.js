 import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => {
const inputTextHandler = (e) => { 
	console.log(e.target.value);
	setInputText(e.target.value);

}
const submitTodoHandler = (e) => {
	e.preventDefault();
	setTodos([
		...todos, {text: inputText, completed: false, id: Math.random() *1000},

		]);
	setInputText("");
}

	return(
		<form>
			<input type="text" value={inputText} onChange={inputTextHandler} className="todo-input"/>
			<button onClick={submitTodoHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square"> </i>
			</button>

		</form>

	);
}
export default Form;