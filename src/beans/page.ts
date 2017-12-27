export class Page {

    readonly id: Page.Name;
    readonly label: string;

    constructor(id: Page.Name, label: string) {
        this.id = id;
        this.label = label;
    }

}

export namespace Page {
    export type Name = 'acceuil' | 'solutions' | 'offres' | 'contact' | 'join';

    export const ACCEUIL: Name = 'acceuil';
    export const SOLUTIONS: Name = 'solutions';
    export const OFFRES: Name = 'offres';
    export const JOIN: Name = 'join';
    export const CONTACT: Name = 'contact';
    export const all = [ACCEUIL, SOLUTIONS, OFFRES, JOIN, CONTACT];

    export const toPage: (s: string) => Page = (from: string) => {
        switch (from) {
            case 'acceuil':
                return new Page(ACCEUIL, 'Acceuil');
            case 'solutions':
                return new Page(SOLUTIONS, 'Nos solutions');
            case 'offres':
                return new Page(OFFRES, 'Offres');
            case 'contact':
                return new Page(CONTACT, 'Contact');
            case 'join':
                return new Page(JOIN, 'Join');
            default:
                return new Page(ACCEUIL, 'Acceuil');
        }
    };
}