import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './LoginForm.css';
import { login } from '../../store/session';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to='/' />;

  const demoUser = {
    credential: 'Demo-lition',
    password: 'password',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div>
      <img
        className='login-bg-img'
        src='https://images.unsplash.com/photo-1623760657159-99e314640766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        alt=''
      />
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-form-container'>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label className='login-text'>Login</label>
          <label className='login-label'>Username or Email</label>
          <input
            className='login-input'
            type='text'
            value={credential}
            placeholder='Your username or email'
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <label className='login-label'>Password</label>
          <input
            className='login-input'
            type='password'
            value={password}
            placeholder='Your password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className='login-demo-container'>
            <button type='submit' className='login-btn'>
              Log In
            </button>
            <button
              type='submit'
              className='login-btn'
              onClick={() => dispatch(login(demoUser))}
            >
              Demo
            </button>
          </div>
          <NavLink to='/signup' className='login-btn signup-btn-link'>
            <div className='signup-text'>Sign Up</div>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;
