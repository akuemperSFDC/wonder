import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import Search from '../Search';
import './Navigation.css';
import { login } from '../../store/session';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const demoUser = {
    credential: 'Demo-lition',
    password: 'password',
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className='session-links'>
        <NavLink to='/login'>Log In</NavLink>
        <i class='fal fa-horizontal-rule fa-6x pipechar'></i>
        <NavLink to='/signup'>Sign Up</NavLink>
        <i class='fal fa-horizontal-rule fa-6x pipechar'></i>
        <button
          className='demo-btn'
          onClick={() => dispatch(login(demoUser))}
          to='/'
        >
          Demo
        </button>
      </div>
    );
  }

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-left'>
        <NavLink className='site-name' exact to='/'>
          Wonder
        </NavLink>
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
