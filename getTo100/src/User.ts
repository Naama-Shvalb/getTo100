export class User{
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
export const usersArr: User[] = [];

export class UsersCollection {
    users: User[];
    activeUser: User;
    prevActiveUser: User;

    constructor() {
        this.users = []; // Initialize users as an empty array
        this.activeUser = new User({ name: 'Default', password: 0, email: '', maxScore: 0 });
        this.prevActiveUser = new User({ name: 'Default', password: 0, email: '', maxScore: 0 });
    }

    getActive(): User {
        return new User({name: 'Naama', password: 123, email: 'w@w', maxScore: 10});
    }

    addUser(user: User){
        this.users.push(user);
    }

    getAllUsers(): User[]{
        const tempUsers: User[] = [];
        this.users.map((user, index)=>{
            tempUsers.push(user);
        })
        return tempUsers;
    }
}

export const userCollection = new UsersCollection();

