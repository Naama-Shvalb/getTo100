import React, { useState, useEffect } from 'react';
import {User} from '../User';   
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';


export const UserBoard = ({user}) => {

    const [number, setNumber] = useState(user.number);
    const [steps, setSteps] = useState(0);
    const [youWin, setWin] = useState(false);

    if(number === 100){
        console.log('win');
    }  

    const handleActions = (operator) => {
        if(user.email === playerCollection.getActive().email){
            let bool = false;
            switch(operator){
                case '+':
                    bool = add1();
                    break;
                case '-':
                    bool = reduce1();
                    break;
                case '*':
                    bool = multiplyBy2();
                    break;
                case '/':
                    bool = divideBy2();        
            }
            if(bool){
                if(user.number == 100){
                    setWin(true);
                }
                const nextPlayer = playerCollection.getNextPlayer();
                playerCollection.setActive(nextPlayer);
            }
        }
    };


    const add1 = () => {
        const updatedNumber = number + 1;
        setNumber(updatedNumber);
        setSteps(steps + 1);
        user.number = updatedNumber;
        user.steps = steps + 1;
        return true;
    };

    const reduce1 = () => {
        if(number > 0 ){
            const updatedNumber = number - 1;
            setNumber(updatedNumber);
            setSteps(steps + 1);
            user.number = updatedNumber;
            user.steps = steps + 1;
            return true;
        }
        return false;
    };

    const multiplyBy2 = () => {
        if(number*2 <= 100){
            const updatedNumber = number * 2;
            setNumber(updatedNumber);
            setSteps(steps + 1);
            user.number = updatedNumber;
            user.steps = steps + 1;
            return true;
        }
        return false;
    };

    const divideBy2 = () => {
        const updatedNumber = parseInt(number / 2);
        setNumber(updatedNumber);
        setSteps(steps + 1);
        user.number = updatedNumber;
        user.steps = steps + 1;
        return true;
    };

    const handNewGame = () => {
        setNumber('0');
        setSteps(0);
        user.number = 0;
        user.steps = 0;
    }

    const handExit = () => {
        takeOutPlayer(user);
    }

    return (
        <div>
          {youWin ? (
            <div>
                <h1>you win!!!!!!!!!!!!!!!!</h1>
              <button onClick={handNewGame}>new game</button>
              <button onClick={handExit}>exit the game</button>
            </div>
          ) : (
            <div>
              <h2>welcome {user.name}</h2>
              <h3>Number: {number}</h3>
              <h3>Steps: {steps}</h3>
              <h3>max score: {user.maxScore}</h3>
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