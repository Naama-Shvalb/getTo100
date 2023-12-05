import React, { useState } from 'react';
import {User} from '../User';
import { SignUp } from './SignUp';
import { Aaa } from './Aaa'


export const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
 const [loggedInUser, setLoggedInUser] = useState(false);
 const [ToSignUp, setToSignUp] = useState(false);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('storedUser'));
    if(storedUser){
      const user = storedUser.find(Element=>(Element.email))
      if (storedUser.name === username && storedUser.email === email) {
        setLoggedInUser(true);
      }
    } else{
      alert('you are not an existing user please sign up');
      setToSignUp(true);
    }
  };

  return (
    <div>
      {loggedInUser ? (
        <Aaa></Aaa>
      ) : ToSignUp ? (<singUp></singUp>) : (
        <div>
          <h2>Login</h2>
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
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};


