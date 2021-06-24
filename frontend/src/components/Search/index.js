import './Search.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getSearches } from '../../store/search';

const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getSearches(searchText));
  }, [dispatch, searchText]);

  return (
    <div className='search-container'>
      <i className='fal fa-search search-icon'></i>
      <form>
        <input
          value={searchText}
          className='search-box'
          type='search'
          placeholder='Search Wonder'
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Search;
