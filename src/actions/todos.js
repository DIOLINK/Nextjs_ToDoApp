import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config';

import { toDoStatus, types, msgServer } from '../types';

import { loadToDos } from '../utils/loadToDos';
import { sendMail } from '../utils/sendMail';

import { setEditModalToDo } from './ui';

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
    Swal.fire({
      title: 'Creating new task...',
      text: 'Please wait...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const doc = await db
      .collection(`${uid}/todos/tasks`)
      .add(newTodo);
    dispatch(activeTodo(doc.id, newTodo));
    Swal.close();
    dispatch(setEditModalToDo(true));
    dispatch(addNewToDo(doc.id, newTodo));
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
      const { uid, email } = getState().auth;
      const TaskToSave = {
        ...todo,
      };
      delete TaskToSave.id;
      await db
        .doc(`${uid}/todos/tasks/${todo.id}`)
        .update(TaskToSave);
      dispatch(refreshToDo(todo.id, TaskToSave));
      Swal.fire('Saved', 'Your task has been saved', 'success');
      sendMail({ email, ...msgServer.UpdateTask });
      dispatch(setEditModalToDo(false));
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
    const { uid, email } = getState().auth;
    try {
      dispatch(setEditModalToDo(false));
      Swal.fire({
        title: 'Deleting...',
        text: 'Please wait...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      sendMail({ email, ...msgServer.DeleteTask });
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

export const startStatusChange = (id, todo) => {
  return async (dispatch, getState) => {
    try {
      const { uid, email } = getState().auth;
      Swal.fire({
        title: 'Change Status...',
        text: 'Please wait...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await db.doc(`${uid}/todos/tasks/${id}`).update(todo);
      dispatch(setStatusToDo(id, todo.status));
      Swal.close();
      sendMail({ email, ...msgServer.StatusTask });
    } catch (error) {
      Swal.close();
      console.log(`Error to change status ToDo: `, error);
      Swal.fire('Error', error.message, 'error');
    }
  };
};

export const setStatusToDo = (id, status) => ({
  type: types.ToggleToDo,
  payload: { id, status },
});
