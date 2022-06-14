import React from "react";
import { TodoContext } from "../globals";
import searchIcon from '../images/icons8-search-50.png';


function Browser(){
    const { searchValue, setValue } = React.useContext(TodoContext);
    const onSerachValue = (event)=> {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    /* const inputEnter = (event)=> { //captura el valor del input cuando se le hace enter
        if(event.key === 'Enter'){
            event.preventDefault();
            alert(searchValue);
        }
    } */
    return(
        <section className="browser">
            <figure className="browser--icon" >
                <img src={ searchIcon } alt="icon of search todo"/>
            </figure>
            <input
            value={ searchValue }
            onChange={(eventValue)=> onSerachValue(eventValue)}
            className="browser__create"
            type="text"
            placeholder={"Search todo..."}/>
        </section>
    );
}

export default Browser;
