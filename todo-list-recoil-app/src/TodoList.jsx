import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { useRecoilValue } from "recoil";
import { todos as todosAtom } from "./atoms";

export default function TodoList() {
    const todos = useRecoilValue(todosAtom) // Just viewing state
    // const [ todos, setTodos ] = useRecoilState(todosAtom) // Viewing and updating state

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