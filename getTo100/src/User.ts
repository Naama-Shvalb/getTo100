export class User{
    name: string;
    email: string;
    maxScore: number;
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.maxScore = 0;
    }
}
export const usersArr: User[] = [];

export class UsersCollection {
    users: User[];
    activeUser: User;
    prevActiveUser: User;

    // constructor() {
    //     this.users = []; // Initialize users as an empty array
    //     this.activeUser = new User({ name: 'Default', email: ''});
    //     this.prevActiveUser = new User({ name: 'Default', email: ''});
    // }

    // getActive(): User {
    //     return new User({name: 'Naama', email: 'w@w', maxScore: 10});
    // }

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

