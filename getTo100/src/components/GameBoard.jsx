import React, { useState } from 'react';
import {User} from '../User'; 
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';
import { UserBoard } from './UserBoard';
import { HighScores } from './highScores';


export const GameBoard = () =>{

    const [users, setUsers] = useState(playerCollection.players);
    
    const handleExit = (userToRemove) => {
        setUsers(users.filter(user => user.email !== userToRemove.email));
    };

    const handleScore = (user) => {
        

    };

    playerCollection.setActive(playerCollection.players[0]);

    return(
        <>
        <h1>Welcome to Get To 100 game</h1>
        <h2>Use the buttons below to reach to 100 as few steps as possible</h2>
        <p>----------------------------------------------------------------------------</p>
        <div></div>
        <div>
        {playerCollection.players.map((player)=>(
            <UserBoard key = {player.email} user = {player} onExit={() => handleExit(player)} handleScore = {handleScore}/>
            ))}
        </div>
        </>
    );

};