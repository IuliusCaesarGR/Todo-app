import React from "react";
import { TodoContext } from "../globals";
import { Check } from "./check";

function Browser(){
    const { searchValue, setValue } = React.useContext(TodoContext);
    const onSerachValue = (event)=> {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return(
        <section className="browser">
            <Check />
            <input
            value={ searchValue }
            onChange={(eventValue)=> onSerachValue(eventValue)}
            className="browser__create" type="text" placeholder="Create a new todo..."/>
        </section>
    );
}

export default Browser;
