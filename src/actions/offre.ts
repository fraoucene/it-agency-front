import {AxiosResponse} from 'axios';
import {AxiosProvider} from '../http/axios-provider';
import {ThunkActionCreator} from '../';
import {Offre} from '../beans/Offre';

const OFFRE_URL = 'api/offres';

export interface OffreAction {readonly type: string; readonly offre: Offre;
}
export interface OffresAction {readonly type: string; readonly offres: ReadonlyArray<Offre>;
}

export const setOffre: ThunkActionCreator<Promise<Offre>> =
    (offre: Offre) => {
        return dispatch => {
            dispatch({type: 'SET_OFFRE', offre});
            return Promise.resolve(offre);
        };
    };

export const setOffres: ThunkActionCreator<Promise<ReadonlyArray<Offre>>> =
    (offres: ReadonlyArray<Offre>) => {
        return dispatch => {
            dispatch({type: 'SET_OFFRES', offres});
            return Promise.resolve(offres);
        };
    };

export const fetchOffres: (() => Promise<ReadonlyArray<Offre>>) =
    () =>
        AxiosProvider.axios()
            .get(OFFRE_URL)
            .then((resp: AxiosResponse) => resp.data)
            .then((offres: any[]) => offres.map(offre => new Offre(
                offre.id,
                offre.title,
                offre.subtitle,
                offre.location,
                offre.resume,
                offre.detail,
            )));