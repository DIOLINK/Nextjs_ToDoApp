import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeTodo } from '../../actions/todos';

const TodoListItem = ({
  createdDate,
  updateDate,
  title,
  id,
  status,
}) => {
  const dispatch = useDispatch();
  const handleSelect = () => {
    dispatch(
      activeTodo(id, { createdDate, updateDate, title, id, status }),
    );
  };
  const handleDelete = () => {
    console.log(id);
  };
  const handleDone = () => {
    console.log(status.done);
  };
  return (
    <li className="todo__list-group-item mt-1">
      <div
        className="todo_card-content pointer"
        onClick={handleSelect}
      >
        <p
          className={`todo__task-content ${
            status.done && 'todo__complete'
          }`}
        >
          {title}
        </p>
        <p>{moment(createdDate).format('lll')}</p>
      </div>
      <div className="todo__btn-content">
        <button className="btn btn-primary-done" onClick={handleDone}>
          <div className="todo__task-date-box">
            <i class="fas fa-check" />
            <p>Done</p>
          </div>
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          <div className="todo__task-date-box">
            <i class="fas fa-trash-alt" />
            <p>Deleted</p>
          </div>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
