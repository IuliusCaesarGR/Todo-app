import React from "react";
import { TodoContext } from "./globals";
import Header from './components/header';
import Browser from './components/browser';
import { TodoList } from './components/todoList';
import Task from './components/task';
import Result from './components/result';
import { ButtonFilter as Buttons } from './components/buttonFilter';

function AppUI(){
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        completedTodos } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <Header />
                    <Browser/>
                    <main className='task'>
                        <TodoList>
                            {searchedTodos.map(todo =>(
                            <Task
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                            ))}
                        </TodoList>
                        <Result
                        total={completedTodos}/>
                    </main>
                <Buttons />
                <p className='paragraph'>Drag and drop to reorder list</p>
        </React.Fragment>
    )
}

export { AppUI };