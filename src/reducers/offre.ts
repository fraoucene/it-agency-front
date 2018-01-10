import {Offre} from '../beans/Offre';
import {OffreAction, OffresAction} from '../actions/offre';

export const offre = (state: Offre = Offre.NULL, action: OffreAction) => {
    switch (action.type) {
        case 'SET_OFFRE':
            return action.offre;
        default:
            return state;
    }
};

export const offres = (state: ReadonlyArray<Offre> = [], action: OffresAction): ReadonlyArray<Offre> => {
    switch (action.type) {
        case 'SET_OFFRES':
            return action.offres;
        default:
            return state;
    }
};