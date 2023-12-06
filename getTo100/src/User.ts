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

    constructor() {
        this.users = []; // Initialize users as an empty array
        this.activeUser = new User('Default', '');
        this.prevActiveUser = new User('Default', '');
    }

    getActive(): User {
        return new User('Naama', 'w@w');
    }

    addUser(user: User){
        this.users.push(user);
    }

    getUser(email){
        return this.users.find(Element=>(Element.email === email));
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

