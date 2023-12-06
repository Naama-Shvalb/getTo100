import React, { useState } from 'react';
import {User, UsersCollection, userCollection} from '../User'; 
import { UserBoard } from './UserBoard';


export const GameBoard = () =>{
    console.log(userCollection.users);

    return(
        <>
        <div>
        {userCollection.users.map((player, index)=>(
            <UserBoard user = {player}/>
            ))}
        </div>
        </>
    );

};