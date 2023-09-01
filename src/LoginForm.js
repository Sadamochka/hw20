import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import Image from './img/block.png';
import './App.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const isEmailValid = /^[\w-]+@\w+\.\w{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  return (
    <div className='imputBlok'>
      <h2>Login</h2>
      <div className='sign'><img className="pfoto" src={Image} alt="" />
      <h3>Sign in</h3></div>
      
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        error={!isEmailValid && email !== ''}
        helperText={!isEmailValid && email !== '' && 'Invalid email'}
      />
      <br />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={!isPasswordValid && password !== ''}
        helperText={!isPasswordValid && password !== '' && 'Invalid password'}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
        Remember me
      </label>
      <br />
      <Button className='buttons'
        variant="contained"
        disabled={!isEmailValid || !isPasswordValid}
      >
        Login
      </Button>
      <br />
      <Link to="/hw20/register">Register</Link>
    </div>
  );
};

export default LoginForm;