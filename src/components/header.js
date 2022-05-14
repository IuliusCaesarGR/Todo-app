import React from "react";
import moon  from '../images/icon-moon.svg';
function Header(){
    return(
        <header className="container">
            <p className="title">TODO</p>
            <button className="mode" onClick={function(){ console.log('hey')}}>
                <img src={ moon } alt="icon of mode theme"/>
            </button>
        </header>
    );
}

export default Header;