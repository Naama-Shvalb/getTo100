export class CurrentPlayer{
    name: string;
    email: string;
    number: Number;
    steps: Number;
    maxScore: number;
    constructor(name, email, maxScore){
        this.name = name;
        this.email = email;
        this.maxScore = maxScore;
        this.number = Math.floor(Math.random() * 100);
        this.steps = 0;
    }
}

export class PlayerCollection {
    players: CurrentPlayer[];
    activePlayer: CurrentPlayer;
    prevActivePlayer: CurrentPlayer;
    numberPlayers: number;

    constructor() {
        this.players = []; // Initialize users as an empty array
        this.activePlayer = new CurrentPlayer('Default', '', 0);
        this.prevActivePlayer = new CurrentPlayer('Default', '', 0);
        this.numberPlayers = 0;
    }

    getActive(): CurrentPlayer {
        return this.activePlayer;
    }

    addPlayer(player: CurrentPlayer){
        this.players.push(player);
        this.numberPlayers++;
    }

    getPlayer(email){
        return this.players.find(player=>(player.email === email));
    }

    getAllPlayers(): CurrentPlayer[]{
        const tempPlayers: CurrentPlayer[] = [];
        this.players.map((player, index)=>{
            tempPlayers.push(player);
        })
        return tempPlayers;
    }
}

export const playerCollection = new PlayerCollection();

