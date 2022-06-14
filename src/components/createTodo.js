import React from "react";
import createIcon from '../images/icons8-plus-math-30.png';
import { TodoContext } from '../globals/index';

function CreateTodo(){
    const { openModal, setOpenModal} = React.useContext(TodoContext);
    const sclick = ()=> {
        !!openModal ? setOpenModal(!openModal): setOpenModal(!openModal);
    }
    return(
        <div className="create-todo">
            <img src={createIcon} alt={"Icon of Create Todo"} onClick={ sclick}/>
        </div>
    )
}

export { CreateTodo };