import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
export const getToDosByTitle = (title) => {
  const { todos } = useSelector((state) => state.todos);
  if (title === '') return todos;
  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(title.toLowerCase()),
  );
};

getToDosByTitle.propTypes = { title: PropTypes.string.isRequired };
getToDosByTitle.defaultProps = { title: '' };
