import { useSelector } from 'react-redux';
import NewTodoForm from "./NewTodoForm"
import TodoListItem from "./TodoListItem"
import { getTodosAreLoading, getCompletedTodos, getIncompleteTodos } from './selectors';

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosAreLoading);
  const completedTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompleteTodos);
  
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      { todosAreLoading ? 
        <div>Loading...</div> : 
        <>
          <h3>Completed:</h3>
          {completedTodos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} />
          ))}
          <h3>Incomplete:</h3>
          {incompleteTodos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} />
          ))}
        </>
      }
    </div>
  )
}