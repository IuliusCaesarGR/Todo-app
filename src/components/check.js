import React from "react";
import check from '../images/icon-check.svg';

function Check({ completed, done }) {
    return(
        <figure className={done ? "todo__check" : "todo__none" }  onClick={completed}>
            {done ? <img src={ check } alt="option for check"/> : ''}
        </figure>
    );
}

export { Check };