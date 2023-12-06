export class CurrentPlayer{
    name: string;
    email: string;
    number: Number;
    steps: Number;
    maxScore: number;
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.number = 0;
        this.steps = 0;
        this.maxScore = 0;
    }
}

export class PlayerCollection {
    players: CurrentPlayer[];
    activePlayer: CurrentPlayer;
    prevActivePlayer: CurrentPlayer;

    constructor() {
        this.players = []; // Initialize users as an empty array
        this.activePlayer = new CurrentPlayer('Default', '');
        this.prevActivePlayer = new CurrentPlayer('Default', '');
    }

    getActive(): CurrentPlayer {
        return this.activePlayer;
    }

    addPlayer(player: CurrentPlayer){
        this.players.push(player);
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

