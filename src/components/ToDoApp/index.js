import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';
import { startNewToDo } from '../../actions/todos';
import TodoList from './TodoList';
export const ToDoApp = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const handleAddNewTask = () => {
    dispatch(startNewToDo());
  };
  return (
    <div className="todo__main-content">
      <div className="center-row mt-5">
        <div className=" animate__animated animate__fadeInDown">
          {`Welcome ${name}`}
        </div>
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div
        className="todo__new-task pointer"
        onClick={handleAddNewTask}
      >
        <i class="fas fa-tasks fa-2x" />
        <p className="mt-5 todo__task-title">Create New Task</p>
      </div>
      <TodoList />
    </div>
  );
};
