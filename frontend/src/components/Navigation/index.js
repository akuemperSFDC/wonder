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
      <>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-left'>
        <h1 className='site-name'>Wonder</h1>
        <NavLink className='home-icon' exact to='/'>
          <i class='fas fa-home fa-2x'></i>
        </NavLink>
      </div>
      <div className='navbar-right'>{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
