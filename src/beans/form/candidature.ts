export class Candidature {
    readonly nom: string;
    readonly prenom: string;
    readonly poste: string;
    readonly phone: string;
    readonly email: string;
    readonly message: string;

    constructor(nom: string, prenom: string, poste: string, phone: string, email: string, message: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.poste = poste;
        this.phone = phone;
        this.email = email;
        this.message = message;
    }

    static NULL = new Candidature('', '', '', '', '', '');
}
