import { types } from '../types';

const initialState = {
  loading: false,
  msgError: null,
  showModal: false,
  editModal: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiUnSetError:
      return { ...state, msgError: null };
    case types.uiStartLoading:
      return { ...state, loading: true };
    case types.uiFinishLoading:
      return { ...state, loading: false };
    case types.uiToggleEditModalToDo:
      return { ...state, editModal: action.payload };
    case types.uiToggleShowModalToDo:
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
};
