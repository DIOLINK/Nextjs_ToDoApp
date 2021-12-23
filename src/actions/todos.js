import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config';

import { toDoStatus, types } from '../types';
import { loadToDos } from '../utils/loadToDos';
import { setShowModalToDo } from './ui';

export const startNewToDo = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const newTodo = {
      title: '',
      description: '',
      createdDate: new Date().getTime(),
      updateDate: null,
      status: toDoStatus.pending,
    };
    const doc = await db
      .collection(`${uid}/todos/tasks`)
      .add(newTodo);
    dispatch(addNewToDo(doc.id, newTodo));
    dispatch(activeTodo(doc.id, newTodo));
  };
};

export const activeTodo = (id, todo) => ({
  type: types.ActiveToDo,
  payload: {
    id,
    ...todo,
  },
});

export const addNewToDo = (id, todo) => ({
  type: types.AddNewToDo,
  payload: { id, ...todo },
});

export const startLoadingToDos = (uid) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'LoadingTask...',
      text: 'Please wait...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const todos = await loadToDos(uid);
    Swal.close();
    dispatch(setToDos(todos));
  };
};

export const setToDos = (todos) => ({
  type: types.LoadToDo,
  payload: todos,
});

export const startSaveToDo = (todo) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;
      const TaskToSave = {
        ...todo,
      };
      delete TaskToSave.id;
      await db
        .doc(`${uid}/todos/tasks/${todo.id}`)
        .update(TaskToSave);

      dispatch(refreshToDo(todo.id, TaskToSave));
      Swal.fire('Saved', 'Your task has been saved', 'success');
      dispatch(setShowModalToDo(false));
    } catch (error) {
      console.log(`Error to Save task: `, error);
      Swal.close();
      Swal.fire('Error to Save task', error.message, 'error');
    }
  };
};

export const refreshToDo = (id, todo) => ({
  type: types.UpdateToDo,
  payload: {
    id,
    todo: {
      id,
      ...todo,
    },
  },
});

export const logoutToDoClear = () => ({
  type: types.LogoutCleaningToDo,
});

export const startDeletingToDo = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      dispatch(setShowModalToDo(false));
      Swal.fire({
        title: 'Deleting...',
        text: 'Please wait...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await db.doc(`${uid}/todos/tasks/${id}`).delete();
      dispatch(deleteToDo(id));
      Swal.close();
    } catch (error) {
      Swal.close();
      console.log(`Error to Deleteted ToDo: `, error);

      Swal.fire('Error', error.message, 'error');
    }
  };
};

export const deleteToDo = (id) => ({
  type: types.DeleteToDo,
  payload: id,
});

export const setStatusToDo = (id, status) => ({
  type: types.ToggleToDo,
  payload: { id, status },
});
