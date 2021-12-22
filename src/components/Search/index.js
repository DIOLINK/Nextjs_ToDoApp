const SearchForm = ({ searchText, handleInputChange, reset }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
  };
  return (
    <form onSubmit={handleSubmit} className="search__container mt-5">
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
  );
};

export default SearchForm;
