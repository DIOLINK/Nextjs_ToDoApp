/*
  {
    uid: oamdoamosdmoasmd,
    name: 'Roger',
    email: 'roger@roger.com'
  }
*/

import { types } from '../types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
