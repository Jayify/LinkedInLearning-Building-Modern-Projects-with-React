import { createSlice } from '@reduxjs/toolkit';
import { loadingCompleted } from './loadingSlice';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },
    reducers: {
        deleteTodo: (state, action)  => {
            const text = action.payload;
            state.value = state.value.filter(t => t.text !== text);
        },
        todosUpdated: (state, action) => {
            state.value = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadingCompleted, (state, action) => {
                state.value = action.payload;
            });
    }
});

export const { deleteTodo, todosUpdated } = todosSlice.actions;
