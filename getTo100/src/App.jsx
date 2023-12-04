import { useState } from 'react';
import {Login} from './components/Login';
import { SignUp } from './components/SignUp';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import { UserBoard } from './components/UserBoard';
import {User, UsersCollection, userCollection} from './User';

function App() {
  userCollection.addUser('a', 1, 'a@a', 3);
  userCollection.addUser('b', 2, 'b@b', 4);
  userCollection.addUser('c', 3, 'c@c', 5);
  
  
  const allUsers = userCollection.getAllUsers();


  return (
    <>
    <Login/>
    <SignUp/>
    <div>
      {allUsers.map((player)=>{
        <UserBoard user = {player}/>;
      })}
    </div>
    {/* <UserBoard user = {}/> */}
      
    </>
  );
}

export default App;
