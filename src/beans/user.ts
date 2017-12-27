export class User {
    readonly id: number;
    readonly email: string;
    readonly password: string;
    readonly isLogged: boolean;

    constructor(id: number, email: string, password: string, isLogged: boolean) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.isLogged = isLogged;
    }

    static NULL = new User(0, 'NULL', 'NULL', false);
}
