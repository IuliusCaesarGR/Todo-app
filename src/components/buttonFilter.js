import React from "react";
import { TodoContext } from "../globals/index";
import Result from '../components/result';


export function ButtonFilter(){
    const { completedTodos, setButtonPressed } = React.useContext(TodoContext);
    return(
        <div>
        <Result
            total={completedTodos}/>
        <section className="button_filter">
            <button id="change" onClick={ () => setButtonPressed('all')}>All</button>
            <button id="change" onClick={ ()=> setButtonPressed('active')}>Active</button>
            <button id="change" onClick={ ()=> setButtonPressed('completed')}>Completed</button>
        </section>
        </div>
    );
}