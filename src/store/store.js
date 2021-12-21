import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import { todoReducer } from '../reducers/todoReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  todos: todoReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);
