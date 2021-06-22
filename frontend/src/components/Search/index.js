import './Search.css';

const Search = () => {
  return (
    <div className='search-container'>
      <i class='fal fa-search search-icon'></i>
      <input
        className='search-box'
        type='search'
        placeholder='Search Wonder'
      ></input>
      <imput className='search-btn' type='submit'>
        Search
      </imput>
    </div>
  );
};

export default Search;
