import { PlayerCollection, CurrentPlayer } from "../src/CurrentPlayer";

const p1 = new CurrentPlayer('Naama1', 'a@a');
const p2 = new CurrentPlayer('Naama2', 'a@a');
const pc = new PlayerCollection();

pc.addPlayer(p1);
pc.addPlayer(p2);

pc.removePlayer(p1);

const allP = pc.getAllPlayers()
console.log('Test is okay: ', allP.length === 1);
console.log('Test is okay: ', allP[0] === p2);