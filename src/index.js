import ReactDOM from 'react-dom';
import './index.css'; //Styles file
import { TodoProvider } from './globals';
import { AppUI } from './appUI'
import React from 'react';


ReactDOM.render(
  <React.Fragment>
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  </React.Fragment>,
  document.getElementById('root')
);