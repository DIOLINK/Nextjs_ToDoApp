import { types } from '../types';

const initialState = {
  todos: [],
  active: null,
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AddNewToDo:
      return { ...state, todos: [action.payload, ...state.todos] };
    case types.DeleteToDo:
      return {
        ...state,
        active: null,
        todos: state.filter((todo) => todo.id !== action.payload),
      };
    case types.ToggleToDo:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo,
      );
    default:
      return state; //initialState
  }
};
