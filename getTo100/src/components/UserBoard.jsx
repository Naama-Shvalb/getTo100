import React, { useState, useEffect } from 'react';
import {User} from '../User';   
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';

const TARGET_SCORE = 100;

export const UserBoard = ({user, onExit }) => {

    const [number, setNumber] = useState(user.number);
    const [steps, setSteps] = useState(0);
    const [isWin, setWin] = useState(false);


    const handleActions = (operator) => {
        if(user.email === playerCollection.getActive().email){
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
          
            if(user.number === TARGET_SCORE && !isWin){
                handleWin();
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
        return true;
    };

    const divideBy2 = () => {
        const updatedNumber = parseInt(number / 2);
        setNumber(updatedNumber);
        setSteps(steps + 1);
        user.number = updatedNumber;
        user.steps = steps + 1;
    };

    const handleWin = () => {
        setWin(true);
        const score = calculateScore(steps);
        if (!user.scores.includes(score)) {
            user.scores.push(score);
            const currentPlayer = playerCollection.getPlayer(user.email);
            if (currentPlayer && !currentPlayer.scores.includes(score)) {
                currentPlayer.scores.push(score);
            }
        }
    };

    const handleNewGame = () => {
        console.log('new game');
        setNumber(Math.floor(Math.random() * TARGET_SCORE));
        setSteps(0);
        user.number = 0;
        user.steps = 0;
        setWin(false); 
    };

    const handleExit1 = () => {
        playerCollection.removePlayer(user);
        onExit(user); 
    }; 
      
    const calculateScore = (steps) => {
        return TARGET_SCORE - steps;
    };
    
   
    return (
        <div>
            {user.name}
          {isWin ? (
            <div>
              <h1>you win!!!!!!!!!!!!!!!!</h1>
              <button onClick={handleNewGame}>new game</button>
              <button onClick={handleExit1}>exit the game</button>
            </div>
          ) : (
            <div>
              <h2>welcome {user.name}</h2>
              <h3>Number: {number}</h3>
              <h3>Steps: {steps}</h3>
              <h3>
              Scores: {user.scores.join(', ')}
            </h3>
              <div>
                <button onClick={() => handleActions('+')}>+ 1</button>
                <button onClick={() => handleActions('-')}>- 1</button>
                <button onClick={() => handleActions('*')}>x 2</button>
                <button onClick={() => handleActions('/')}>: 2</button>
              </div>
            </div>
          )}
        </div>
      );
};