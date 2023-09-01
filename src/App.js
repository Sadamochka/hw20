import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginForm/>} />
        <Route path="/hw20" exact element={<LoginForm/>} />
        <Route path="/hw20/register" exact element={<RegistrationForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
