import React from "react";
import { TodoContext } from "./globals";
import Header from './components/header';
import Browser from './components/browser';
import { TodoList } from './components/todoList';
import Task from './components/task';
import { ButtonFilter as Buttons } from './components/buttonFilter';
import { CreateTodo } from './components/createTodo';
import { Modal } from './Modal';

function AppUI(){
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);

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
                    </main>
                    {!!openModal && (
                        <Modal></Modal>
                    )}
                    <CreateTodo></CreateTodo>
                <Buttons />
                <p className='paragraph'>Drag and drop to reorder list</p>
        </React.Fragment>
    )
}

export { AppUI };