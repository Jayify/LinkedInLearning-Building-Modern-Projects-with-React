import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./todosSlice";

export default function TodoListItem({ todo }) {
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Complete</p>}
            {todo.isCompleted 
                ? <button onClick={() => dispatch(deleteTodo(todo.text))}>Delete</button> // Dispatch delete action
                : <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>Mark Complete</button>
            }
        </div>
    )
}