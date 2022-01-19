import './ToDo.css';
import React, {useState} from 'react';


const ToDo = ({todo,todos, setTodos}) => {
	const[editTodo, setEditTodo] = useState(false);
	const [inputMod, setInputMod] = useState(todo.text);

	const inputModifHandler = (e) => { 
		console.log(e.target.value);
		setInputMod(e.target.value);
	}

	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !==todo.id));
	}
	const completeHandler = () => {
		setTodos(todos.map((item) => {
			if(item.id === todo.id){ 
				return{
					...item, completed : !item.completed,
				}	
			}
			return item;	
		}));
	}

const inputModif = (id) => {
console.log(id);
}
const modif = () => {
setEditTodo(true);
}

const test = 
editTodo === true ? <>
                               	<div>
	                                	 <br/>                                                    
	                                     <input type="text" onChange={inputModifHandler}  value={inputMod} />
	                                     <button onClick={() => modifyHandler(todo.id, inputMod)} className="btn btn-primary"> Modifier </button>
	                                     <br/><br/>
           						</div>
                                    </> 
                                    : 
                                    <>
                                        <p className="test">
                                          
                                        </p>
                                    </> 

const modifyHandler = (id,inputMod) => {
      setTodos(todos.map(elt => {
        if (elt.id === id) {
          return{
          	...elt, text: inputMod,
          }
        }
       return elt;

      })
      )
     setEditTodo(false); 
    
	}
/*
	const inputModif = ({id}) => {
		return( 
	todos.map((item) => {
		if(item.id==todo.id){
			<form>
			<input type="text" onChange ={inputTextHandler} value={inputText} />
			<button onClick={() => modifyHandler(item.id, inputText)}> Modifier </button>
			</form>
		}

	}
	));
}
	
	
*/

	return(
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}> <p className="droite"> {todo.text} </p>
			<button className="complete-btn" onClick={completeHandler} >  <i className="fas fa-check-circle">  </i> </button>
			<button  className="trash-btn" onClick={deleteHandler}> <i className="fas fa-trash"> </i> </button>
			<button className="edit-btn" onClick={modif}> <i className="fas fa-edit"> </i> </button> 
			{test}
			</li>
		</div> 

		);
}

export default ToDo;