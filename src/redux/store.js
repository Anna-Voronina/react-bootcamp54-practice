import { createStore } from 'redux';
import { todoReducer } from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
const enhancer = devToolsEnhancer();
export const store = createStore(todoReducer, enhancer);
