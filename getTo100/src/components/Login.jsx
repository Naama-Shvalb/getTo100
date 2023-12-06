import React, { useState } from 'react';
import {User} from '../User';
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';
import { SingUp } from './SignUp';
import { GameBoard } from './GameBoard';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [ToSignUp, setToSignUp] = useState(false);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('storedUser')) || [];
    const user = storedUser.find(Element=>(Element.email === email));
    if(user){
      if(playerCollection.getPlayer(email)){
        alert("You are already in the game");
      } else {
        const myPlayer = new CurrentPlayer(user.name, user.email, user.maxScore);
        playerCollection.addPlayer(myPlayer);
        //alert("The player entered successfully, please enter another player or start the game");
      }
    } else {
      alert('you are not an existing user please insert another user or sign up');
    }
    setEmail("");
  };

  const handSingUp = () => {
    setToSignUp(true);
  };

  const handStartGame = () => {
    //const players = JSON.parse(localStorage.getItem('players')) || [];
    if(playerCollection.getAllPlayers().length < 2){
      alert("There are not enough players for the game, please add more players");
    } else {
      setLoggedInUser(true);
    }
    
    
  };

  return (
    <div>
      {loggedInUser ? (
       <GameBoard></GameBoard>
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


