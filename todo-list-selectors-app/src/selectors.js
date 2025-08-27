import { createSelector } from 'reselect';

// Selectors allow you to encapsulate and reuse logic for accessing specific parts of the state.

// Atomic selectors (accessing a specific slice of state)
export const getTodos = state => state.todos.value;

export const getTodosAreLoading = state => !state.loading.value.completed;



// Modyfying selectors (deriving data from state)

// export const getCompletedTodos = state => 
//     getTodos(state).filter(t => t.isCompleted);

export const getCompletedTodos = createSelector([getTodos], todos => 
    todos.filter(t => t.isCompleted)); // Memoized selector for performance

// export const getIncompleteTodos = state => 
//     getTodos(state).filter(t => !t.isCompleted);

export const getIncompleteTodos = createSelector([getTodos], todos => 
    todos.filter(t => !t.isCompleted));
