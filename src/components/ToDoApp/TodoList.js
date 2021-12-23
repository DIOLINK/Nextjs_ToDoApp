import { getToDosByTitleAndStatus } from '../../utils/getToDosByTitleAndStatus';
import useForm from '../../hooks/useForm';
import TodoListItem from './TodoListItem';
import Search from '../Search';

const TodoList = () => {
  const [formValues, handleInputChange, reset] = useForm({
    searchText: '',
    status: '',
  });
  const { searchText, status } = formValues;
  const toDosFilter = getToDosByTitleAndStatus(searchText, status);
  return (
    <>
      <Search
        formValues={formValues}
        handleInputChange={handleInputChange}
        reset={reset}
      />
      <div className="todo__entries mb-5">
        {toDosFilter.map((todo) => (
          <TodoListItem {...todo} key={todo.id} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
