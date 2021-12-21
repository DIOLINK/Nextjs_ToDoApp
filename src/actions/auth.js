import {
  firebase,
  googleAuthProvider,
} from '../firebase/firebase-config';
import { types } from '../types';
import Swal from 'sweetalert2';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => {
        console.log(e);
        dispatch(finishLoading());
        Swal.fire('Error', e.message, 'error');
      });
  };
};
export const startRegisterWithNameEmailPassword = (
  name,
  email,
  password,
) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire('Error', err.message, 'error');
      });
  };
};

export const startLoginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logout());
        dispatch(startLogoutNote());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logout = () => ({
  type: types.logout,
});
