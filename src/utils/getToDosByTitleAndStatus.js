import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
export const getToDosByTitleAndStatus = (title, status) => {
  const { todos } = useSelector((state) => state.todos);

  if (title === '' && status === '') return todos;
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
