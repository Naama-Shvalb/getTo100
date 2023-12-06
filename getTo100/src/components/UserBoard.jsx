import React, { useState } from 'react';
import {User, UsersCollection, userCollection} from '../User';   


export const UserBoard = ({user}) =>{
   

    return(
        <>
        <div>
            <h2>welcome {user.name}</h2>
            <h3>Email: {user.email} </h3>
            <h3>max score: {user.maxScore}</h3>
        </div>

        </>
    );

};