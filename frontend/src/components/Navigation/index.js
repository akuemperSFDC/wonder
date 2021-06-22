import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className='session-links'>
        <NavLink className='login-signup-links' to='/login'>
          Log In
        </NavLink>
        <NavLink className='pipechar' to=''>
          <i class='fas fa-grip-lines-vertical fa-lg'></i>
        </NavLink>
        <NavLink className='login-signup-links' to='/signup'>
          Sign Up
        </NavLink>
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
      <div className='navbar-right'>{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
