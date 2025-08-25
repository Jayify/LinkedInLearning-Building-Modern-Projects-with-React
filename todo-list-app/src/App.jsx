import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    { text: 'Learn React', isCompleted: true },
    { text: 'Meet friend for lunch', isCompleted: true },
    { text: 'Build really cool todo app', isCompleted: true }
  ]);
  const [incompletedTodos, setIncompletedTodos] = useState([
    {text: 'Learn about React Hooks', isCompleted: false}
  ]);

  function markTodoAsCompleted(text) {
    setIncompletedTodos(incompletedTodos.filter(t => t.text !== text));
    setCompletedTodos([...completedTodos, {text, isCompleted: true}]);
  }

  function deleteTodo(text) {
    setCompletedTodos(completedTodos.filter(t => t.text !== text));
  }

  function createTodo(text) {
    setIncompletedTodos([...incompletedTodos, {text, isCompleted: false}]);
  }
  
  return (
    <>
      <TodoList 
        completedTodos={completedTodos} 
        incompleteTodos={incompletedTodos} 
        onCompletedClick={markTodoAsCompleted} 
        onDeleteClick={deleteTodo} 
        onCreateClicked={createTodo}
      />
    </>
  )
}

export default App;
