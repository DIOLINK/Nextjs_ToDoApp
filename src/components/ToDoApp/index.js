import { useSelector, useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';
import { startNewToDo } from '../../actions/todos';
import { setEditModalToDo, setShowModalToDo } from '../../actions/ui';

import ToDoForm from './TodoForm';
import TodoList from './TodoList';
import TodoShow from './TodoShow';
export const ToDoApp = () => {
  const dispatch = useDispatch();
  const { auth, ui } = useSelector((state) => state);
  const { name } = auth;
  const { showModal, editModal } = ui;
  const handleClose = () => {
    dispatch(setShowModalToDo(false));
    dispatch(setEditModalToDo(false));
  };
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const handleAddNewTask = () => {
    dispatch(startNewToDo());
  };

  return (
    <div className="todo__main-content">
      <div className="space-around-row mt-5">
        <div className=" animate__animated animate__fadeInDown">
          {`Welcome ${name}`}
        </div>
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="center-row">
        <div>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#Modal"
            className=" btn btn-outline-primary btn-lg btn-block mt-1 mb-1 "
            onClick={handleAddNewTask}
          >
            <i className="fas fa-tasks fa-2x mt-1" />
            <p className="todo__task-title mt-1">Create New Task</p>
          </button>
        </div>
      </div>
      {editModal && <ToDoForm handleClose={handleClose} />}
      {showModal && <TodoShow handleClose={handleClose} />}
      <TodoList />
    </div>
  );
};
