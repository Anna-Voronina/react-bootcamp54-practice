import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';

export const fetchAllTodos = createAsyncThunk(
  'todo/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/tasks');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodoThunk = createAsyncThunk(
  'todo/addTodo',
  async (todo, thunkAPI) => {
    try {
      const { data } = await instance.post('/tasks', todo);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  'todo/deleteTodo',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/tasks/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
