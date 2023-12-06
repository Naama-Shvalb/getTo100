import { useState } from 'react';
import {Login} from './components/Login';
import { SingUp } from './components/SignUp';
import './App.css';
import { GameBoard } from './components/GameBoard';
//import { UserBoard } from './components/UserBoard';

import {User, UsersCollection, userCollection} from './User';
//import {User} from './User';


function App() {
  // userCollection.addUser('a', 1, 'a@a', 3);
  // userCollection.addUser('b', 2, 'b@b', 4);
  // userCollection.addUser('c', 3, 'c@c', 5);
  
  
  const allUsers = userCollection.getAllUsers();


  return (
    <>
    <Login/>
    {/* <div>
      {allUsers.map((player, index)=>{
        <UserBoard user = {player}/>;
      })}
    </div> */}
    {/* <UserBoard user = {}/> */}
      
    </>
  );
}

export default App;
