import {
  firebase,
  googleAuthProvider,
} from '../firebase/firebase-config';
import Swal from 'sweetalert2';

import { types } from '../types';

import { finishLoading, startLoading } from './ui';
import { logoutToDoClear } from './todos';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.email));
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
        await user.updateProfile({ displayName: name, email: email });
        dispatch(login(user.uid, user.displayName, user.email));
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
        dispatch(login(user.uid, user.displayName, user.email));
      });
  };
};

export const login = (uid, displayName, email) => ({
  type: types.login,
  payload: { uid, displayName, email },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logout());
        dispatch(logoutToDoClear());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logout = () => ({
  type: types.logout,
});
