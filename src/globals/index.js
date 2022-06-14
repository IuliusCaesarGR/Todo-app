import React from "react";
import defaultTodo from './defaultTask'; //default array
import { useSessionStorage } from '../functions/sessionStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    const [todos, saveTodos] = useSessionStorage('TODOS_V1', defaultTodo); // sessionStorage's custom Hook
    /* console.log(todos) */
    // How many are finish
    const completedTodos = todos.filter(todo => !todo.completed).length;
    // Modal
    const [openModal, setOpenModal] = React.useState(false);

    // change task per state
    let searchedTodos = [];
const [buttonPressed, setButtonPressed] = React.useState('all');
switch(buttonPressed){
    case 'all':
        searchedTodos = [...todos];
        /* console.log(buttonPressed) */
    break;
    case 'active':
        searchedTodos = todos.filter(item => item.completed === false);
        /* console.log(buttonPressed); */
    break;
    case 'completed':
        searchedTodos = todos.filter(item => item.completed === true);
        /* console.log(buttonPressed); */
    break;
    default:
        console.log('?');
    break;
}
    // Filter To-dos with a browser(state)
    const [ searchValue, setValue] = React.useState('');
    if (searchValue.length >= 1) {
        searchedTodos = searchedTodos.filter(todo => { // Filter the To-do than have those letters.
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
                searchedTodos,
                openModal,
                setOpenModal,
                todos,
                saveTodos,
                buttonPressed,
                setButtonPressed
            }
        }>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };