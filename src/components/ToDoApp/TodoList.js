import { useMemo } from 'react';

import { getToDosByTitle } from '../../utils/getToDosByTitle';
import useForm from '../../hooks/useForm';
import TodoListItem from './TodoListItem';
import Search from '../Search';

const TodoList = () => {
  const [{ searchText }, handleInputChange, reset] = useForm({
    searchText: '',
  });
  const toDosFilter = getToDosByTitle(searchText);

  console.log('toDosFilter :>> ', toDosFilter, searchText);
  return (
    <>
      <Search
        searchText={searchText}
        handleInputChange={handleInputChange}
        reset={reset}
      />
      <ul className="todo__entries mb-5">
        {toDosFilter.map((todo) => (
          <TodoListItem {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
