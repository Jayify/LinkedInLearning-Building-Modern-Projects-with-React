import axios from 'axios';
import { loadingStarted, loadingCompleted, loadingFailed } from './loadingSlice';
import { todosUpdated } from './todosSlice';

export const loadTodos = () => async (dispatch) => {
    dispatch(loadingStarted());
    try {
        const response = await axios.get('/api/todos');
        const todos = response.data;
        dispatch(loadingCompleted(todos));
        console.log(todos);
    }
    catch (error) {
        dispatch(loadingFailed(error));
        console.error('Failed to load todos:', error);
    }
}

export const createTodo = (newTodoText) => async (dispatch, getState) => {
    console.log('Creating todo:', newTodoText);
    try {
        const response = await axios.post('/api/todos', { text: newTodoText });
        const newTodo = response.data;
        console.log('Created todo:', newTodo);
        const updatedTodos = getState().todos.value.concat(newTodo);
        dispatch(todosUpdated(updatedTodos));
    }
    catch (error) {
        console.error('Failed to create todo:', error);
    }
}

export const deleteTodo = (todoId) => async (dispatch, getState) => {
    try {
        await axios.delete('/api/todos/' + todoId);
        const updatedTodos = getState().todos.value.filter(t => t.id !== todoId);
        dispatch(todosUpdated(updatedTodos));
    }
    catch (error) {
        console.error('Failed to delete todo:', error);
    }
}

export const markTodoAsCompleted = (todoId) => async (dispatch, getState) => {
    try {
        const response = await axios.put('/api/todos/'+todoId, { isCompleted: true });
        const updatedTodo = response.data;
        const updatedTodos = getState().todos.value.map(t => t.id === todoId ? updatedTodo : t);
        dispatch(todosUpdated(updatedTodos));
    }
    catch (error) {
        console.error('Failed to update todo:', error);
    }
}