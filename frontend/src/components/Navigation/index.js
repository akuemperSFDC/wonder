import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Search from '../Search';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className='session-links'>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink className='pipechar' to=''>
          <img
            className='pipechar'
            src='https://img.icons8.com/material-outlined/24/000000/vertical-line.png'
            alt=''
          />
        </NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-left'>
        <h2 className='site-name'>Wonder</h2>
        <NavLink className='home-icon' exact to='/'>
          <i class='fas fa-home fa-2x'></i>
        </NavLink>
      </div>
      <div className='search-bar'>
        <Search />
      </div>
      <div className='navbar-right'>{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
