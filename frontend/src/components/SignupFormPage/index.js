import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to='/' />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      'Confirm Password field must be the same as the Password field',
    ]);
  };

  return (
    <div>
      <img
        className='signup-bg-img'
        src='https://images.unsplash.com/photo-1623760657159-99e314640766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        alt=''
      />
      <form onSubmit={handleSubmit} className='signup-form'>
        <div className='signup-form-container'>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label className='signup-text-header'>Sign Up</label>
          <label className='signup-label'>Email</label>
          <input
            className='signup-input'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className='signup-label'>Username</label>
          <input
            className='signup-input'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label className='signup-label'>Password</label>
          <input
            className='signup-input'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className='signup-label'>Confirm Password</label>
          <input
            className='signup-input'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className='signup-btn' type='submit'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormPage;
