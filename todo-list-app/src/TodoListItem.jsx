export default function TodoListItem({ todo, onCompletedClick, onDeleteClick }) {
    console.log(todo)
    return (
        <div>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Complete</p>}
            {todo.isCompleted 
                ? <button onClick={() => onDeleteClick(todo.text)}>Delete</button>
                : <button onClick={() => onCompletedClick(todo.text)}>Mark Complete</button>
            }
        </div>
    )
}