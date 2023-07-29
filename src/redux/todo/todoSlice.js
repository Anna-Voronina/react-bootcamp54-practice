import { createSlice } from '@reduxjs/toolkit';
import {
  addTodoThunk,
  deleteTodoThunk,
  editTodoThunk,
  fetchAllTodos,
} from './operations';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isEditing: false,
    currentTodo: {
      text: null,
      id: null,
    },
  },
  reducers: {
    toggleEditing: state => {
      state.isEditing = !state.isEditing;
    },
    setCurrentTodo: (state, { payload }) => {
      state.currentTodo = payload;
    },
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
      })
      .addCase(editTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.map(contact => {
          return contact.id === action.payload.id ? action.payload : contact;
        });
        state.isEditing = false;
      }),
});

export const todoReducer = todoSlice.reducer;
export const { toggleEditing, setCurrentTodo } = todoSlice.actions;
