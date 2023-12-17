import React, { useState } from 'react';
import {User} from '../User';
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';


export const HighScores = () => {

    const [highScores, getHighScores] = useState(JSON.parse(localStorage.getItem('storedScores')) || []);

    const checkScores = ()=>{
        
    }
        

    return(
        { highScores ?(
            
        )
                
        }

    )

};