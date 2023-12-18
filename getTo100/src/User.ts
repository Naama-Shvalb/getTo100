export class User{
    name: string;
    email: string;
    averageScore: number;
    numberGames: number;
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.averageScore = 100000;
        this.numberGames = 0;
    }
}

