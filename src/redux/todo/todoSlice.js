import { createSlice } from '@reduxjs/toolkit';
import { addTodoThunk, deleteTodoThunk, fetchAllTodos } from './operations';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }),
});

export const todoReducer = todoSlice.reducer;
