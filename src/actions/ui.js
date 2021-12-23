import { types } from '../types';

export const setError = (error) => ({
  type: types.uiSetError,
  payload: error,
});

export const unSetError = () => ({
  type: types.uiUnSetError,
});

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});

export const setShowModalToDo = (showModal) => ({
  type: types.uiToggleShowModalToDo,
  payload: showModal,
});

export const setEditModalToDo = (editModal) => ({
  type: types.uiToggleEditModalToDo,
  payload: editModal,
});
