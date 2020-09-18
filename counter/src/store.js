import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore(rootReducer, devToolsEnhancer());