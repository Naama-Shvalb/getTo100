import React, { useState , useEffect} from 'react';
import {User} from '../User'; 
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';
import { UserBoard } from './UserBoard';
import './GameBoard.css';


export const GameBoard = () =>{

    const [users, setUsers] = useState(playerCollection.players);
    const [highScores, setHighScores] = useState([]);

    useEffect(() => {
        let storedUser = JSON.parse(localStorage.getItem('storedUser'));
        topPlayers(storedUser);
    }, []);
    
    const handleExit = (userToRemove) => {
        setUsers(users.filter(user => user.email !== userToRemove.email));
    };

    const win = (user)=>{
        let storedUser = JSON.parse(localStorage.getItem('storedUser'));
        let currentUser = storedUser.find(Element => (Element.name === user.name));
        currentUser.numberGames++;
        currentUser.scores = user.scores;
        currentUser.averageScore = Math.floor((currentUser.scores.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0))/currentUser.scores.length);
        storedUser.sort((a, b) => a.averageScore - b.averageScore);
        topPlayers(storedUser);
        localStorage.setItem('storedUser', JSON.stringify(storedUser));
    }

    const topPlayers = (storedUser)=>{
        let i = 0;
        for(i; i<storedUser.length; i++){
            if(storedUser[i].averageScore > 0){
                break;
            }
        }
        setHighScores([storedUser[i],storedUser[i+1],storedUser[i+2]]);
    };


    return(
        <>
        <div className='GameBoard'>
            <h2>Welcome to Get To 100 game</h2>
            <h3>Use the buttons below to reach to 100 as few steps as possible</h3>
            <div className='topPlayers'>
                <h2 className='topPlayersTitle'>top players</h2>
                {highScores.map((Element) => ( Element ?
                <h3 className='topPlayersDetails'>
                        {Element.name}: 
                        {Element.averageScore}
                </h3> : ''
                ))}
            </div>
            <div></div>
            <div className='UsersBoards'>
                {playerCollection.players.map((player)=>(
                    <UserBoard key = {player.email} user = {player} onExit={() => handleExit(player)} handleScore = {win}/>
                ))}
            </div>
        </div>
        </>
    );
};