import React, { useState } from 'react';
import {User} from '../User';   
import{playerCollection} from '../CurrentPlayer';


export const UserBoard = ({user}) =>{

    const [number, setNumber] = useState(0);
    const randNumber = Math.random % 100;
    user.number = randNumber;

    const add1 = () =>{
        user.number += 1;
        user.steps += 1;
        setNumber(user.number);
    };

    const reduce1 = () =>{
        user.number -= 1;
        user.steps += 1;
        setNumber(user.number);
    };

    const multiplyBy2 = () =>{
        user.number *= 2;
        user.steps += 1;
        setNumber(user.number);
    };

    const devideBy2 = () =>{
        user.number /= 2;
        user.steps += 1;
        setNumber(user.number);
    };

    return(
        <>
        <div>
            <h2>welcome {user.name}</h2>
            <h3>Number: {user.number}</h3>
            <h3>Steps: {user.steps}</h3>
            <h3>max score: {user.maxScore}</h3>
        </div>
        <div>
            <button onClick={() => add1()}>+ 1</button>
            <button onClick={() => reduce1()}>- 1</button>
            <button onClick={() => multiplyBy2()}>x 2</button>
            <button onClick={() => devideBy2()}>: 2</button>
        </div>

        </>
    );

};