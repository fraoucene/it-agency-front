export class Offre {
    readonly id: number;
    readonly title: string;
    readonly subTitle: string;
    readonly location: string;
    readonly resume: string;
    readonly detail: string;

    constructor(id: number, title: string, subTitle: string, location: string, resume: string, detail: string) {
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.location = location;
        this.resume = resume;
        this.detail = detail;
    }

    static NULL = new Offre(0, '', '', '', '', '');
}
