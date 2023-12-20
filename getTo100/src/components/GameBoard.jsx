import React, { useState , useEffect} from 'react';
import {User} from '../User'; 
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';
import { UserBoard } from './UserBoard';
import './GameBoard.css';


export const GameBoard = () =>{

    let storedUser = JSON.parse(localStorage.getItem('storedUser'));
    const [users, setUsers] = useState(playerCollection.players);
    const [highScores, setHighScores] = useState([storedUser[0],storedUser[1],storedUser[2]]);

    useEffect(() => {
        playerCollection.setActive(playerCollection.players[0]);
        playerCollection.setCurrentIndex(0);
    }, []);
    
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
    };

    playerCollection.setActive(playerCollection.players[0]);

    return(
        <>
        <div className='GameBoard'>
            <h2>Welcome to Get To 100 game</h2>
            <h3>Use the buttons below to reach to 100 as few steps as possible</h3>
            <div className='topPlayers'>
                <h2 className='topPlayersTitle'>top players</h2>
                {highScores.map((Element) => (
                <h3 className='topPlayersDetails'>
                    {Element && Element.name ? Element.name : 'No Name'}: 
                    {Element && Element.averageScore ? Element.averageScore : 'No Score'}
                </h3>
                ))}
            </div>
            <div></div>
            <div className='UsersBoards'>
                {playerCollection.players.map((player)=>(
                    <UserBoard key = {player.email} user = {player} onExit={() => handleExit(player)} handleScore = {topPlayers}/>
                ))}
            </div>
        </div>
        </>
    );
};