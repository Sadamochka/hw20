import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import Image from './img/block.png';
import './App.css';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isNameValid = /^[A-Za-z]{3,}$/.test(firstName) && /^[A-Za-z]{3,}$/.test(lastName);
  const isEmailValid = /^[\w-]+@\w+\.\w{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  return (
    <div className='imputBlok'>
      <h2>Registration</h2>
      <div className='sign'><img className="pfoto" src={Image} alt="" />
      <h3>Sign up</h3></div>
      
      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={handleFirstNameChange}
        error={!isNameValid && firstName !== ''}
        helperText={!isNameValid && firstName !== '' && 'Invalid name'}
      />
      <br />
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={handleLastNameChange}
        error={!isNameValid && lastName !== ''}
        helperText={!isNameValid && lastName !== '' && 'Invalid name'}
      />
      <br />
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
      <Button className='buttons'
        variant="contained"
        disabled={!isNameValid || !isEmailValid || !isPasswordValid}
      >
        Register
      </Button>
      <br />
      <Link to="/hw20">Login</Link>
    </div>
  );
};

export default RegistrationForm;