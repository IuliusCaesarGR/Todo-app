import React from "react";

function Result(props){
    return(
        <section className="result">
            <p>{props.total} items left</p>
            <p>Clear Completed</p>
        </section>
    );
}

export default Result;