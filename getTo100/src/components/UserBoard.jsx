import React, { useState, useEffect } from 'react';
import {User} from '../User';   
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';


export const UserBoard = ({user}) =>{

    const [number, setNumber] = useState(0);
    const [steps, setSteps] = useState(0);
    
    useEffect(() => {
        const min = 1; // Minimum value (1 in this case)
        const max = 99; // Maximum value (99 in this case)
        const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setNumber(randNumber);
        user.number = randNumber;
    }, []);

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
            <button onClick={() => add1()}>+ 1</button>
            <button onClick={() => reduce1()}>- 1</button>
            <button onClick={() => multiplyBy2()}>x 2</button>
            <button onClick={() => divideBy2()}>: 2</button>
        </div>

        </>
    );

};