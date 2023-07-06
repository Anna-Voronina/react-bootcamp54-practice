import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
