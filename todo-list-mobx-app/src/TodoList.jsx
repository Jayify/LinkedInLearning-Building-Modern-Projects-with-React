import { observer } from "mobx-react-lite";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import todosStore from "./mobxTodos";

const TodoList = observer(() => {
    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm />
            <h3>Completed:</h3>
            {todosStore.todos.filter(t => t.isCompleted).map((todo, index) => (
                <TodoListItem key={index} todo={todo} />
            ))}
            <h3>Incomplete:</h3>
            {todosStore.todos.filter(t => !t.isCompleted).map((todo, index) => (
                <TodoListItem key={index} todo={todo} />
            ))}
        </div>
    )
})

export default TodoList;