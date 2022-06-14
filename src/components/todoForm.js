import React from "react";
import { TodoContext } from '../globals/index';

function TodoForm(){
    const { openModal, setOpenModal, todos, saveTodos } = React.useContext(TodoContext);
    const [newValue, setNewValue] = React.useState('');
    function update(event){
        console.log(event)
        if(event === 'create'){
            console.log(newValue);
            if(newValue === ''){
                alert('Envía un valor');
            }
            else{
                let newArrayTodos = [...todos];
                newArrayTodos.push({text: newValue, completed: false})
                saveTodos(newArrayTodos);
                console.log(newArrayTodos);
                setOpenModal(!openModal);
            }
        }else{
            setOpenModal(!openModal);
        }
    }
    return(
        <div className="form-to-create">
            <div className="form">
                <label>Create To Do</label>
                <form className="form__entry">
                    <input type="text" placeholder="Create task" value={ newValue } onChange={(nValue)=>{  nValue.preventDefault(); setNewValue(nValue.target.value)}}></input>
                </form>
            </div>
            <div className="buttons">
                <button className="buttons__cancel" id="cancel" onClick={(event)=> update(event.target.id)}>Cancel</button>
                <button className="buttons__create" id="create" onClick={(event)=> update(event.target.id)}>Create</button>
            </div>
        </div>
    );
}

export { TodoForm };