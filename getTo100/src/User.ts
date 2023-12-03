export class user{
    name: string;
    password: number;
    email: string;
    maxScore: number;
    constructor({name, password, email, maxScore}){
        this.name = name;
        this.password = password;
        this.email = email;
        this.maxScore = maxScore;
    }
}

export const usersArr = [];

