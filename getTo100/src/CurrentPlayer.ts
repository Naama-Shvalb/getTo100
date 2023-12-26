export class CurrentPlayer{
    name: string;
    email: string;
    number: Number;
    steps: Number;
    scores: number[];
    constructor(name, email, scores){
        this.name = name;
        this.email = email;
        this.scores = scores || [];
        this.number = Math.floor(Math.random() * 100);
        this.steps = 0;
    }
}

export class PlayerCollection {
    players: CurrentPlayer[];
    activePlayer: CurrentPlayer;
    prevActivePlayer: CurrentPlayer;
    numberPlayers: number;
    currentIndex: number;

    constructor() {
        this.players = []; 
        this.numberPlayers = 0;
        this.currentIndex = 0;
    }

    getPlayer(email){
        return this.players.find(player=>(player.email === email));
    }

    getActive(): CurrentPlayer {
        return this.activePlayer;
    }

    setActive(player: CurrentPlayer){
        this.activePlayer = player;
    }

    getCorrentIndex(): number{
        return this.currentIndex;
    }

    setCurrentIndex(index: number) {
        this.currentIndex = index >= 0 && index < this.players.length ? index : 0; // Ensure index is within bounds
    }
    
    

    addPlayer(player: CurrentPlayer){
        this.players.push(player);
        this.numberPlayers++;
    }

    removePlayer(player: CurrentPlayer) {
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
        return this.players;
    } 

    getNextPlayer(): CurrentPlayer {
        this.currentIndex = (this.currentIndex + 1) % this.players.length;
        return this.players[this.currentIndex];
    }
}

export const playerCollection = new PlayerCollection();

