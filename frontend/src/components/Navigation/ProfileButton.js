import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i class='fas fa-user fa-2x'></i>
      </button>
      <div className='profile-dropdown-container arrow-top'>
        {showMenu && (
          <ul className='profile-dropdown arrow-top content-decoration'>
            <li>{user.username}</li>
            <div>
              <i class='fal fa-horizontal-rule'></i>
              <i class='fal fa-horizontal-rule'></i>
            </div>
            <li>{user.email}</li>
            <div>
              <i class='fal fa-horizontal-rule'></i>
              <i class='fal fa-horizontal-rule'></i>
            </div>
            <li>
              <button className='btn-logout' onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
