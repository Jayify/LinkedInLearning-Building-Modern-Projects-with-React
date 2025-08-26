import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

export default function TodoList() {
    const todos = useSelector(state => state.todos.value); // Accessing todos from Redux store
    console.log(todos);
    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm />
            <h3>Completed:</h3>
            {todos.filter(t => t.isCompleted).map((todo, index) => (
                <TodoListItem key={index} todo={todo} />
            ))}
            <h3>Incomplete:</h3>
            {todos.filter(t => !t.isCompleted).map((todo, index) => (
                <TodoListItem key={index} todo={todo} />
            ))}
        </div>
    )
}