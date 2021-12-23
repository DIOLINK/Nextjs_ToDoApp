export const types = {
  login: '[Auth] Login',
  logout: '[Auth] Logout',

  uiSetError: '[UI] Set Error',
  uiUnSetError: '[UI] UnSet Error',
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',
  uiToggleShowModalToDo: '[UI] Active Show Modal',
  uiToggleEditModalToDo: '[UI] Active Edit Modal',

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

export const msgServer = {
  AddNewTask: {
    subject: 'Add New Task',
    message: 'You have added a new task!!!',
  },
  UpdateTask: {
    subject: 'Updated a Task',
    message: 'You have updated a task!!!',
  },
  DeleteTask: {
    subject: 'Delete a Task',
    message: 'You have deleted a task!!!',
  },
  StatusTask: {
    subject: 'Status a Task',
    message: 'You have changed the status of a task!!!',
  },
};
