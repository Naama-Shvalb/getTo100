import React, { useState, useEffect } from 'react';
import{playerCollection} from '../CurrentPlayer';
import './UserBoard.css';

const TARGET_NUMBER = 100;

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
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleActions = (operator) => {
      if (user.email === activePlayer.email) {
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
            if(user.number === TARGET_NUMBER && !isWin){
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
        setWin(true);
        user.scores.push(steps + 1);        
    };

    const handleNewGame = () => {
        setNumber(Math.floor(Math.random() * TARGET_NUMBER));
        setSteps(0);
        user.number = number;
        user.steps = 0;
        setWin(false);
        handleScore(user);
    };

    const handleExit1 = () => {
        playerCollection.removePlayer(user);
        onExit(user);
        handleScore(user);
        const nextIndex = (playerCollection.getCorrentIndex()-1)% playerCollection.players.length;
        playerCollection.setCurrentIndex(nextIndex);
        playerCollection.setActive(playerCollection.players[playerCollection.getCorrentIndex()]);
    };
    
   
    return (
        <div className={activeClass}>
          {isWin ? (
            <div className='winBoard'>
              <h1>you win!</h1>
              <button onClick={handleNewGame}>new game</button>
              <br />
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