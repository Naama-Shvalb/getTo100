import React, { useState } from 'react';
import {User} from '../User'; 
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';
import { UserBoard } from './UserBoard';


export const GameBoard = () =>{
    //console.log(playerCollection.players);
    playerCollection.setActive(playerCollection.players[0]);

    return(
        <>
        <div>
        {playerCollection.players.map((player, index)=>(
            <UserBoard user = {player}/>
            ))}
        </div>
        </>
    );

};