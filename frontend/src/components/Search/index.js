import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getSearches } from '../../store/search';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getSearches(searchText));
  }, [dispatch, searchText]);

  return (
    <div className='search-container'>
      <i class='fal fa-search search-icon'></i>
      <form>
        <input
          value={searchText}
          className='search-box'
          type='search'
          placeholder='Search Wonder'
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <imput className='search-btn' type='submit'>
          Search
        </imput>
      </form>
    </div>
  );
};

export default Search;
