import {ThunkActionCreator} from '../index';
import {loaderOff, loaderOn} from './loader';
import {onError} from './on-error';
import {fetchOffres, setOffre, setOffres} from './offre';
import {Offre} from '../beans/Offre';

export const offresChain: ThunkActionCreator<void> = () => {
    return (dispatch) => {
        return dispatch(loaderOn())
            .then(() => fetchOffres())
            .then(offres => dispatch(setOffres(offres)))
            .then(offres => dispatch(setOffre(offres[0] || Offre.NULL)))
            .catch((error: any) => onError(error, dispatch))
            .then(() => dispatch(loaderOff()));
    };
};
