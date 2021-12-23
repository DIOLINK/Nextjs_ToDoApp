import moment from 'moment';
import { useDispatch } from 'react-redux';

import { activeTodo, startStatusChange } from '../../actions/todos';
import { setEditModalToDo, setShowModalToDo } from '../../actions/ui';

import { toDoStatus } from '../../types';

const TodoListItem = ({
  createdDate,
  updateDate,
  title,
  id,
  status,
  description,
}) => {
  const dispatch = useDispatch();
  const handleSelect = () => {
    dispatch(
      activeTodo(id, {
        createdDate,
        updateDate,
        title,
        id,
        status,
        description,
      }),
    );
    dispatch(setShowModalToDo(true));
  };
  const handleEdit = () => {
    dispatch(
      activeTodo(id, {
        createdDate,
        updateDate,
        title,
        id,
        status,
        description,
      }),
    );
    dispatch(setEditModalToDo(true));
  };
  const handleDelete = () => {
    dispatch(
      startStatusChange(id, {
        createdDate,
        updateDate,
        title,
        status: toDoStatus.deleted,
        description,
      }),
    );
  };
  const handleDone = () => {
    if (status === toDoStatus.done) {
      dispatch(
        startStatusChange(id, {
          createdDate,
          updateDate,
          title,
          status: toDoStatus.pending,
          description,
        }),
      );
    } else {
      dispatch(
        startStatusChange(id, {
          createdDate,
          updateDate,
          title,
          status: toDoStatus.done,
          description,
        }),
      );
    }
  };
  return (
    <div className="todo__list-group-item mb-2">
      <div
        className="todo_card-content pointer"
        onClick={handleSelect}
      >
        <h3
          className={`todo__task-title ${
            status === toDoStatus.done && 'todo__complete'
          }`}
        >
          <span
            className={
              status === toDoStatus.done
                ? 'badge bg-success'
                : status === toDoStatus.pending
                ? 'badge bg-warning text-dark'
                : 'badge bg-danger'
            }
          >
            {status}
          </span>{' '}
          {title}
        </h3>
        <p
          className={`todo__task-body ${
            status === toDoStatus.done && 'todo__complete'
          }`}
        >
          {description}
        </p>
        <p className={'todo__task-body'}>
          {moment(createdDate).format('lll')}
        </p>
      </div>
      <div className="todo__btn-content">
        <button className="btn btn-primary-done" onClick={handleDone}>
          <div className="todo__task-date-box">
            <i className="fas fa-check" />
            <p>Done</p>
          </div>
        </button>
        <button className="btn btn-primary-edit" onClick={handleEdit}>
          <div className="todo__task-date-box">
            <i className="fas fa-pencil-alt" />
            <p>Edit</p>
          </div>
        </button>
        <button
          className="btn btn-danger-delete"
          onClick={handleDelete}
        >
          <div className="todo__task-date-box">
            <i className="fas fa-trash-alt" />
            <p>Deleted</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
