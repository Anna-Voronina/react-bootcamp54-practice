import { combineReducers, createStore } from 'redux';
import { filterReducer } from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { todoReducer } from './todoSlice';
const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
export const store = createStore(rootReducer, enhancer);
