import { db } from '../firebase/firebase-config';
import { types } from '../types';

export const startNewToDo = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const newTodo = {
      title: '',
      description: '',
      date: new Date().getTime(),
      status: '',
    };
  };
};

export const activeTodo = (id, todo) => ({
  type: types.ActiveTodo,
  payload: {
    id,
    ...todo,
  },
});
