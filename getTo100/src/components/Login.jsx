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
      const players = JSON.parse(localStorage.getItem('players'))||[];
      if(players.find(Element=>(Element.email === email))){
        alert("You are already in the game");
        return;
      } else {
        players.push(user);
        setEmail("");
        alert("The player entered successfully, please enter another player or start the game");
        return;
      }
    }
    alert('you are not an existing user please insert another user or sign up');
  }

  const handSingUp = () => {
    setToSignUp(true);
  }

  const handStartGame = () => {
    const players = JSON.parse(localStorage.getItem('players'))||[];
    if(players.len<2){
      alert("There are not enough players for the game, please add more players");
    } else {
      setLoggedInUser(true);
    }
  }

  return (
    <div>
      {loggedInUser ? (
        <Aaa></Aaa>
      ) : ToSignUp ? (<SingUp></SingUp>) : (
        <div>
          <h1>wellcame to gmae get to 100!!</h1>
          <h2>insert player</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handSingUp}>sing up</button>
          <br />
          <button onClick={handStartGame}>enter to gmame</button>
        </div>
      )}
    </div>
  );
};


