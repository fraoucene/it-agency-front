export class Information {
    readonly nom: string;
    readonly prenom: string;
    readonly phone: string;
    readonly email: string;
    readonly message: string;

    constructor(nom: string, prenom: string, phone: string, email: string, message: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.phone = phone;
        this.email = email;
        this.message = message;
    }

    static NULL = new Information('', '', '', '', '');
}
