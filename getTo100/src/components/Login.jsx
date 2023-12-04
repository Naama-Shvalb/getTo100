import React, { useState } from 'react';
import {user} from '../User';
import { usersArr } from '../User';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 // const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to handle login
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setLoggedInUser(storedUser);
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  // // Function to handle logout
  // const handleLogout = () => {
  //   setLoggedInUser(null);
  //   alert('Logged out successfully!');
  // };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <p>Welcome, {loggedInUser.username}!</p>
          {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};


