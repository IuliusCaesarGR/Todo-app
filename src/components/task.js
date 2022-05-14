import React from "react";
import { Check } from "./check";
import cross from '../images/icon-cross.svg';

function Task(props){
    return(
        <section className="todo">
            <Check
                completed={props.onComplete}
                done={props.completed}
            />
            <p className={props.completed ? "todo__done" : "todo__text"}>{props.text}</p>
            <figure className="todo__cross" onClick={props.onDelete}>
                <img src={ cross } alt="option for cross"/>
            </figure>
        </section>
    );
}

export default Task;