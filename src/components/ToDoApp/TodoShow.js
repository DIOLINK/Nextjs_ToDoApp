import moment from 'moment';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

import useForm from '../../hooks/useForm';
import { toDoStatus } from '../../types';

const TodoShow = ({ handleClose }) => {
  const { todos, ui } = useSelector((state) => state);
  const { active } = todos;
  const { showModal } = ui;
  const [formValues] = useForm(active);

  const { description, title, createdDate, status } = formValues;

  return (
    <Modal
      show={showModal}
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
          <label className="form-label"> {title}</label>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className="form-label">{description}</label>
      </Modal.Body>
    </Modal>
  );
};

export default TodoShow;
