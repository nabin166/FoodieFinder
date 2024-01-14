// SignInForm.js
import React, { useState } from 'react';
import '../SCSS/SignInForm.scss';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberme] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Signing in with:', email, password);
  };

  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      <img id='logo' src={"images/logo.png"} width={"40%"}></img>
      <form onSubmit={handleSignIn}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div id='remember'>
        <label>Remember me:</label>
        <input
          type="checkbox"
          value={false}
          onChange={(e) => setRememberme(e.target.value)}
          required
        />
        </div>
        <button type="submit">Sign In</button>
      </form>
     <Link id='Link' to={"/"}>Homepage</Link>
    </div>
  );
};

export default Signin;