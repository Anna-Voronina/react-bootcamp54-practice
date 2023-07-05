import { ADD_TODO, DELETE_TODO, FILTER_TODO } from './constants';

export const addTodoAction = text => {
  return {
    type: ADD_TODO,
    payload: {
      id: crypto.randomUUID(),
      text,
    },
  };
};

export const deleteTodoAction = id => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const addFilterAction = value => {
  return {
    type: FILTER_TODO,
    payload: value,
  };
};
