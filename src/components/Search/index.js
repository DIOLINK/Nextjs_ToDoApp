import { toDoStatus } from '../../types';

const SearchForm = ({ formValues, handleInputChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { searchText, status } = formValues;

  return (
    <>
      <div className="space-around-row ">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={toDoStatus.done}
            name="status"
            id="status3"
            onClick={handleInputChange}
          />
          <label className="form-check-label" htmlFor={status}>
            {toDoStatus.done}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={toDoStatus.pending}
            name="status"
            id="status2"
            onClick={handleInputChange}
          />
          <label className="form-check-label" htmlFor={status}>
            {toDoStatus.pending}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={''}
            name="status"
            id="status1"
            onClick={handleInputChange}
            defaultChecked
          />
          <label className="form-check-label" htmlFor={status}>
            All
          </label>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-5 mb-5">
        <input
          className="search__input"
          type="text"
          name="searchText"
          placeholder="Search ToDo..."
          autoComplete="off"
          value={searchText}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default SearchForm;
