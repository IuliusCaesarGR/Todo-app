import ReactDOM from 'react-dom';
import { TodoForm } from './components/todoForm';

function Modal({children}){
    return ReactDOM.createPortal(
        <div className='create-modal'>
            <div>
                <TodoForm></TodoForm>
            </div>
            {children}
        </div>,
        document.getElementById('modal')
    );
}
export { Modal };