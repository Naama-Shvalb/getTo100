// import React, { useState } from 'react';
// import {User} from '../User'; 
// import{CurrentPlayer, playerCollection} from '../CurrentPlayer';
// import { UserBoard } from './UserBoard';


// export const GameBoard = () =>{
//     //console.log(playerCollection.players);
//     const [users, setUsers] = useState(playerCollection.players);

//     // const handleExit = (userToRemove) => {
//     //     setUsers(users.filter(user => user !== userToRemove));
//     //   };

//     const handleExit = (userToRemove) => {
//         setUsers(users.filter(user => user.email !== userToRemove.email));
//     };

    
//     playerCollection.setActive(playerCollection.players[0]);

//     return(
//         <>
//         <h1>Welcome to Get To 100 game</h1>
//         <h2>Use the buttons below to reach to 100 as few steps as possible</h2>
//         <p>----------------------------------------------------------------------------</p>
//         <div>
//         {playerCollection.players.map((player, index)=>(
//             <UserBoard key={index} user = {player} onExit={() => handleExit(player)}/>
//             ))}
//         </div>
//         </>
//     );
// };

import React, { useState } from 'react';
import {User} from '../User'; 
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';
import { UserBoard } from './UserBoard';


export const GameBoard = () =>{
    const [arrPlayers, setarrPlayers] = useState(playerCollection.players);

    const handleExit = (userToRemove) => {
        const removePlayer = playerCollection.removePlayer(userToRemove);
        setarrPlayers( removePlayer );
    };

    playerCollection.setActive(arrPlayers[0]);

    return(
        <>
        <h1>Welcome to Get To 100 game</h1>
        <h2>Use the buttons below to reach to 100 as few steps as possible</h2>
        <p>----------------------------------------------------------------------------</p>
        <div>
        {arrPlayers.map((player, index)=>(
            <UserBoard key={index} user = {player} onExit={() => handleExit(player)}/>
            ))}
        </div>
        </>
    );
};