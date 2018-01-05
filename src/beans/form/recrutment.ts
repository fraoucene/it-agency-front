export class Recrutment {
    readonly raisonSocial: string;
    readonly nom: string;
    readonly prenom: string;
    readonly poste: string;
    readonly phone: string;
    readonly email: string;
    readonly message: string;

    constructor(raisonSocial: string, nom: string, prenom: string,
                poste: string, phone: string, email: string, message: string) {
        this.raisonSocial = raisonSocial;
        this.nom = nom;
        this.prenom = prenom;
        this.poste = poste;
        this.phone = phone;
        this.email = email;
        this.message = message;
    }

    static NULL = new Recrutment('', '', '', '', '', '', '');
}
