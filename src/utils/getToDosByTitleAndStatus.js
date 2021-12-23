import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { toDoStatus } from '../types';
export const getToDosByTitleAndStatus = (title, status) => {
  const { todos } = useSelector((state) => state.todos);

  if (title === '' && status === '')
    return todos.filter(
      (todo) =>
        todo.status.toLowerCase() != toDoStatus.deleted.toLowerCase(),
    );
  return todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(title.toLowerCase()) &&
      todo.status.toLowerCase().includes(status.toLowerCase()),
  );
};

getToDosByTitleAndStatus.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
getToDosByTitleAndStatus.defaultProps = {
  title: '',
  status: '',
};
