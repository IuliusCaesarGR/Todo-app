import React from "react";
import defaultTodo from './defaultTask'; //default array
import { useSessionStorage } from '../functions/sessionStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    const [todos, saveTodos] = useSessionStorage('TODOS_V1', defaultTodo); // sessionStorage's custom Hook
    console.log(todos)
    // How many are finish
    const completedTodos = todos.filter(todo => !todo.completed).length;

    // Filter To-dos with a browser(state)
    const [ searchValue, setValue] = React.useState('');
    let searchedTodos = [];

    if (!searchValue.length >= 1) { //If the browser has nothing
        searchedTodos = todos; // Copy the array(todos) that it will be rendering
    } else {
        searchedTodos = todos.filter(todo => { // Filter the To-do than have those letters.
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText); //retorna el To-do que tenga las letras del buscador(input) en SearchedTodos.
        });
    }
    const completeTodo = (getText)=> {
        const todoIndex = todos.findIndex(todo => todo.text === getText);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (getText)=>{
        const todoIndex = todos.findIndex(todo => todo.text === getText);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    return (
        <TodoContext.Provider value={
            {
                searchValue,
                setValue,
                completeTodo,
                completedTodos,
                deleteTodo,
                searchedTodos
            }
        }>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };