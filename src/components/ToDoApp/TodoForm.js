import { useEffect, useRef } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

import {
  activeTodo,
  startDeletingToDo,
  startSaveToDo,
} from '../../actions/todos';

import useForm from '../../hooks/useForm';
import { toDoStatus } from '../../types';

const ToDoForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { todos, ui, auth } = useSelector((state) => state);
  const { active } = todos;
  const { editModal } = ui;
  const { email } = auth;
  const [formValues, handleInputChange, resetForm] = useForm(active);

  const activeId = useRef(active.id);

  useEffect(() => {
    if (active.id !== activeId.current) {
      resetForm(active);
      activeId.current = active.id;
    }
  }, [active, resetForm]);

  useEffect(() => {
    dispatch(activeTodo(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const { description, title, createdDate, status } = formValues;
  const handleSave = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      ...formValues,
      description: description,
      title: title,
      updateDate: new Date().getTime(),
    };
    dispatch(startSaveToDo(newTodo));
    resetForm();
  };

  const handleDelete = () => {
    dispatch(startDeletingToDo(activeId.current));
  };

  return (
    <Modal
      show={editModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <div>
            <span
              class={
                status === toDoStatus.done
                  ? 'badge bg-success'
                  : status === toDoStatus.pending
                  ? 'badge bg-warning text-dark'
                  : 'badge bg-danger'
              }
            >
              {status}
            </span>
            <p className={'todo__task-body'}>
              {moment(createdDate).format('lll')}
            </p>
          </div>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="todo__input"
          type="text"
          name="title"
          placeholder="Title..."
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          className="form-control"
          rows="3"
          type="text"
          name="description"
          placeholder="Add TODO..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-danger-delete"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSave}
        >
          Save changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ToDoForm;
