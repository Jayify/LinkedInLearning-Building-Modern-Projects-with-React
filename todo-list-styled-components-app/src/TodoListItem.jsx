import { useDispatch } from "react-redux";
import { deleteTodo, markTodoAsCompleted } from "./thunks";
import styled from 'styled-components';

const CardContainer = styled.div`
  ${props => props.important && 'background-color: #fbdc8cff;'}
  border-radius: 8px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
`;

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <CardContainer important>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted
        ? <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item</button>
        : <button onClick={() => dispatch(markTodoAsCompleted(todo.id))}>Mark as Completed</button>}
    </CardContainer>
  );
}