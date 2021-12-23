export const types = {
  login: '[Auth] Login',
  logout: '[Auth] Logout',

  uiSetError: '[UI] Set Error',
  uiUnSetError: '[UI] UnSet Error',
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',
  uiToggleModalToDo: '[UI] Set Active Modal ToDo',

  AddNewToDo: '[ToDo] New ToDo',
  ActiveToDo: '[ToDo] Set Active ToDo',
  LoadToDo: '[ToDo] Set Load ToDo',
  DeleteToDo: '[ToDo] Delete ToDo',
  UpdateToDo: '[ToDo] Update ToDo',
  ToggleToDo: '[ToDo] Toggle ToDo',
  LogoutCleaningToDo: '[ToDo] Logout Cleaning ToDo',
};

export const toDoStatus = {
  pending: 'Pending',
  done: 'Done',
  deleted: 'Deleted',
};
