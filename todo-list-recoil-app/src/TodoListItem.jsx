import { useRecoilState } from "recoil";
import { todos as todosAtom } from "./atoms";

export default function TodoListItem({ todo }) {
    const [ todos, setTodos ] = useRecoilState(todosAtom)
    return (
        <div>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Complete</p>}
            {todo.isCompleted 
                ? <button onClick={() => setTodos(todos.filter(t => t.text !== todo.text))}>Delete</button>
                : <button onClick={() => setTodos([...todos.filter(t => t.text !== todo.text), {text: t.text, isCompleted: true}])}>Mark Complete</button>
            }
        </div>
    )
}