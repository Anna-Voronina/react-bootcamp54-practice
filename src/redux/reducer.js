import { ADD_TODO, DELETE_TODO, FILTER_TODO } from './constants';

const initialState = {
  items: [
    {
      id: 0,
      text: 'Complited HW-5',
    },
    {
      id: 1,
      text: 'Complited HW-6',
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload),
      };

    default:
      return { ...state };
  }
};

const filterInitialState = {
  value: '',
};

export const filterReducer = (
  state = filterInitialState,
  { type, payload }
) => {
  switch (type) {
    case FILTER_TODO:
      return { ...state, value: payload };

    default:
      return state;
  }
};
