import React, { useState } from 'react';
import {User} from '../User';

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailVerification, setemailVerification] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);
      
  
    const handleSignup = () => {
      const storedUser = JSON.parse(localStorage.getItem('storedUser')) || [];
      if(storedUser.find(Element=>(Element.name === username && Element.email === email))){
        alert('you are an existing user please log in')
      }
      if(email != emailVerification){
        alert('please reenter your correct password!')
      }
      const newUser = new User(username, email);
      storedUser.push(newUser);
      localStorage.setItem('storedUser', JSON.stringify(storedUser));
      setLoggedInUser(newUser);
    };
  
    return (
      <div>
        {loggedInUser ? (
          <div>
            <p>Welcome, {loggedInUser.username}!</p>
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
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email verification'
              value={emailVerification}
              onChange={(e) => setemailVerification(e.target.value)}    
            />
            <button onClick={handleSignup}>Signup</button>
          </div>
        )}
      </div>
    );
  };
  
  