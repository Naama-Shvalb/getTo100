import React, { useState } from 'react';
import {User} from '../User';
import { SingUp } from './SignUp';
import { Aaa } from './Aaa'


export const Login = () => {
  const [email, setEmail] = useState('');
 const [loggedInUser, setLoggedInUser] = useState(false);
 const [ToSignUp, setToSignUp] = useState(false);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('storedUser'));
    const user = storedUser.find(Element=>(Element.email === email))
    if(user){
      setLoggedInUser(true);
      return;
    }
    alert('you are not an existing user please sign up');
    setToSignUp(true);
  }

  return (
    <div>
      {loggedInUser ? (
        <Aaa></Aaa>
      ) : ToSignUp ? (<SingUp></SingUp>) : (
        <div>
          <h2>Login</h2>
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


