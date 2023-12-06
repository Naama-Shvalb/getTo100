import React, { useState } from 'react';
import {User} from '../User';
import {Aaa} from './Aaa'

export const SingUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(false);
    const [ToLogin, setToLogin] = useState(false);

    const handleSignup = () => {
        const storedUser = JSON.parse(localStorage.getItem('storedUser')) || [];
        if(storedUser.find(Element=>(Element.email === email))){
          alert('you are an existing user please log in')
          setToLogin(true);
        }
        const newUser = new User(username, email);
        storedUser.push(newUser);
        localStorage.setItem('storedUser', JSON.stringify(storedUser));
        setLoggedInUser(true);
      };
      return (
        <div>
          {loggedInUser ? (
            <Aaa>
            </Aaa>
          ) : ToLogin ? (
            <Login></Login>
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
              <button onClick={handleSignup}>Signup</button>
            </div>
          )}
        </div>
      );
}