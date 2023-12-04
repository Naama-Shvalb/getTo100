import React, { useState } from 'react';
import {user} from '../User';
import { usersArr } from '../User';

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);
      
  
    // Function to handle signup
    const handleSignup = () => {
      const users =  JSON.stringify(usersArr);
      if(!usersArr){
        const usersArr=[];
      }
      const newUser = { username, password };
      localStorage.setItem('user', JSON.stringify(newUser));
      setLoggedInUser(newUser);
      alert('Signup successful!');
    };
  
    return (
      <div>
        {loggedInUser ? (
          <div>
            <p>Welcome, {loggedInUser.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>Sign up</h2>
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
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}    
            />
  
            <button onClick={handleSignup}>Signup</button>
          </div>
        )}
      </div>
    );
  };
  
  
  