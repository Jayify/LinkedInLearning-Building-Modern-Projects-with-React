import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm"

export default function TodoList({ completedTodos, incompleteTodos, onCompletedClick, onDeleteClick, onCreateClicked }) {
    console.log(completedTodos, incompleteTodos);
    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm onCreateClicked={onCreateClicked}/>
            <h3>Completed:</h3>
            {completedTodos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} onDeleteClick={onDeleteClick} />
            ))}
            <h3>Incomplete:</h3>
            {incompleteTodos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} onCompletedClick={onCompletedClick} />
            ))}
        </div>
    )
}