import { combineReducers, createStore } from 'redux';
import { filterReducer, todoReducer } from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
export const store = createStore(rootReducer, enhancer);
