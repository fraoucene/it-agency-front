export class Page {

    readonly id: Page.Name;
    readonly label: string;

    constructor(id: Page.Name, label: string) {
        this.id = id;
        this.label = label;
    }

}

export namespace Page {
    export type Name = 'acceuil' | 'solutions' | 'offres' | 'offreDetail' | 'contact'  | 'candidature' | 'recrutement';

    export const ACCEUIL: Name = 'acceuil';
    export const SOLUTIONS: Name = 'solutions';
    export const OFFRES: Name = 'offres';
    export const OFFRES_DETAIL: Name = 'offreDetail';
    export const CANDIDATURE: Name = 'candidature';
    export const RECRUTEMENT: Name = 'recrutement';
    export const CONTACT: Name = 'contact';
    export const all = [ACCEUIL, SOLUTIONS, OFFRES, OFFRES_DETAIL, RECRUTEMENT, CANDIDATURE, CONTACT];
    export const headers = [ACCEUIL, SOLUTIONS, OFFRES, RECRUTEMENT, CONTACT];

    export const toPage: (s: string) => Page = (from: string) => {
        switch (from) {
            case 'acceuil':
                return new Page(ACCEUIL, 'Acceuil');
            case 'solutions':
                return new Page(SOLUTIONS, 'Nos solutions');
            case 'offres':
                return new Page(OFFRES, 'Offres');
            case 'offreDetail':
                return new Page(OFFRES_DETAIL, 'Detail de l\'offre');
            case 'contact':
                return new Page(CONTACT, 'Contact');
            case 'candidature':
                return new Page(CANDIDATURE, 'Candidature');
            case 'recrutement':
                return new Page(RECRUTEMENT, 'Recrutement');
            default:
                return new Page(ACCEUIL, 'Acceuil');
        }
    };
}