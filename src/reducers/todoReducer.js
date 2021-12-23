import { types } from '../types';

const initialState = {
  todos: [],
  active: null,
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AddNewToDo:
      return { ...state, todos: [action.payload, ...state.todos] };
    case types.ActiveToDo:
      return { ...state, active: { ...action.payload } };
    case types.LoadToDo:
      return { ...state, todos: [...action.payload] };
    case types.LogoutCleaningToDo:
      return { ...state, active: null, todos: [] };
    case types.DeleteToDo:
      return {
        ...state,
        active: null,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload,
        ),
      };
    case types.ToggleToDo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, status: action.payload.status }
            : todo,
        ),
      };
    case types.UpdateToDo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload.todo : todo,
        ),
      };
    default:
      return state;
  }
};
