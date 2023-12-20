import React, { useState, useEffect } from 'react';
import {User} from '../User';   
import{CurrentPlayer, playerCollection} from '../CurrentPlayer';
import './UserBoard.css';

const TARGET_SCORE = 100;

export const UserBoard = ({user, onExit, handleScore }) => {

    const [number, setNumber] = useState(user.number);
    const [steps, setSteps] = useState(0);
    const [isWin, setWin] = useState(false);
    const [activePlayer, setActivePlayer] = useState(playerCollection.getActive());

    useEffect(() => {
        const handleActivePlayerChange = () => {
            setActivePlayer(playerCollection.getActive());
        };

        const interval = setInterval(() => {
            handleActivePlayerChange();
        }, 500); // Update the active player every second

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleActions = (operator) => {
      if (user.email === activePlayer.email) {
            //const activeClass = 'activeUser';
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

    const activeClass = user.email === activePlayer.email ? 'activeUser' : 'UserBoard';


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
      // const nextIndex = playerCollection.players.indexOf(user);
      //   playerCollection.setCurrentIndex(nextIndex);
      //   console.log(playerCollection.getCorrentIndex());
      //   setWin(true);
      //   user.scores.push(steps+1);

        const nextIndex = (playerCollection.getCorrentIndex() + 1) % playerCollection.players.length;
        playerCollection.setCurrentIndex(nextIndex);
        console.log(playerCollection.getCorrentIndex());
        setWin(true);
        user.scores.push(steps + 1);
        const nextPlayer = playerCollection.getNextPlayer();
        playerCollection.setActive(nextPlayer);
        
    };

    const handleNewGame = () => {
        setNumber(Math.floor(Math.random() * TARGET_SCORE));
        setSteps(0);
        user.number = 0;
        user.steps = 0;
        setWin(false);
        handleScore(user);
        console.log(playerCollection.getCorrentIndex());

    };

    const handleExit1 = () => {
        playerCollection.removePlayer(user);
        onExit(user);
        handleScore(user);
        console.log(playerCollection.getCorrentIndex());


    };
    
   
    return (
        <div className={activeClass}>
          {isWin ? (
            <div className='winBoard'>
              <h1>you win!</h1>
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