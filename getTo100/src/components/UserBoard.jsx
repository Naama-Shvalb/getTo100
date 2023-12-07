import React, { useState, useEffect } from 'react';
import {User} from '../User';   
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';


export const UserBoard = ({user}) => {

    const [number, setNumber] = useState(user.number);
    const [steps, setSteps] = useState(0);

    if(number === 100){
        console.log('win');
    }  

    const handleActions = (operator) => {
        if(user === playerCollection.getActive()){       
            switch(operator){
                case '+':
                    add1();
                    break;
                case '-':
                    reduce1();
                    break;
                case '*':
                    multiplyBy2();
                    break;
                case '/':
                    divideBy2();        
            }
            const nextPlayer = playerCollection.getNextPlayer();
            playerCollection.setActive(nextPlayer);
        }
    };


    const add1 = () => {
        const updatedNumber = number + 1;
        setNumber(updatedNumber);
        setSteps(steps + 1);
        user.number = updatedNumber;
        user.steps = steps + 1;
    };

    const reduce1 = () => {
        const updatedNumber = number - 1;
        setNumber(updatedNumber);
        setSteps(steps + 1);
        user.number = updatedNumber;
        user.steps = steps + 1;
    };

    const multiplyBy2 = () => {
        const updatedNumber = number * 2;
        setNumber(updatedNumber);
        setSteps(steps + 1);
        user.number = updatedNumber;
        user.steps = steps + 1;
    };

    const divideBy2 = () => {
        const updatedNumber = number / 2;
        setNumber(updatedNumber);
        setSteps(steps + 1);
        user.number = updatedNumber;
        user.steps = steps + 1;
    };

    return(
        <>
        <div>
            <h2>welcome {user.name}</h2>
            <h3>Number: {number}</h3>
            <h3>Steps: {steps}</h3>
            <h3>max score: {user.maxScore}</h3>
        </div>
        <div>
            <button onClick={() => handleActions('+')}>+ 1</button>
            <button onClick={() => handleActions('-')}>- 1</button>
            <button onClick={() => handleActions('*')}>x 2</button>
            <button onClick={() => handleActions('/')}>: 2</button>
        </div>
        </>
    );

};