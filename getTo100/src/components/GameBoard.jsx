import React, { useState } from 'react';
import {User} from '../User'; 
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';
import { UserBoard } from './UserBoard';


export const GameBoard = () =>{

    let storedUser = JSON.parse(localStorage.getItem('storedUser'));
    const [users, setUsers] = useState(playerCollection.players);
    const [highScores, setHighScores] = useState([storedUser[0],storedUser[1],storedUser[2]]);
    
    const handleExit = (userToRemove) => {
        setUsers(users.filter(user => user.email !== userToRemove.email));
    };

    const topPlayers = (user)=>{
        let storedUser = JSON.parse(localStorage.getItem('storedUser'));
        let currentUser = storedUser.find(Element => (Element.name === user.name));
        currentUser.numberGames++;
        if(currentUser.averageScore === 100000){
            currentUser.averageScore = user.steps + 1;
        } else{
            currentUser.averageScore = parseInt((((currentUser.averageScore)*(currentUser.numberGames)) + user.steps + 1) / currentUser.numberGames);
        }
        storedUser.sort((a, b) => a.averageScore - b.averageScore);
        setHighScores([storedUser[0],storedUser[1],storedUser[2]]);
        localStorage.setItem('storedUser', JSON.stringify(storedUser));
    }

    playerCollection.setActive(playerCollection.players[0]);

    return(
        <>
        <h1>Welcome to Get To 100 game</h1>
        <h2>Use the buttons below to reach to 100 as few steps as possible</h2>
        <p>----------------------------------------------------------------------------</p>
        <h2>top players</h2>
        {highScores.map((Element) => (
          <h3>{Element.name}: {Element.averageScore}</h3>
        ))}
        <p>----------------------------------------------------------------------------</p>
        <div></div>
        <div>
        {playerCollection.players.map((player)=>(
            <UserBoard key = {player.email} user = {player} onExit={() => handleExit(player)} handleScore = {topPlayers}/>
            ))}
        </div>
        </>
    );
};