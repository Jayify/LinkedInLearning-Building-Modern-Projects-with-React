import todosStore from "./mobxTodos";

export default function TodoListItem({ todo }) {
    return (
        <div>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Complete</p>}
            {todo.isCompleted 
                ? <button onClick={() => todosStore.deleteTodo(todo.text)}>Delete</button> // Dispatch delete action
                : <button onClick={() => todosStore.markTodoAsCompleted(todo.text)}>Mark Complete</button>
            }
        </div>
    )
}