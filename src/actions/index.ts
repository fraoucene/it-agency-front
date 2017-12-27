import {ThunkActionCreator} from '../index';
import {loaderOff, loaderOn} from './loader';
import {onError} from './on-error';

export const acceuilChain: ThunkActionCreator<void> = () => {
    return (dispatch) => {
        return dispatch(loaderOn())
            .catch((error: any) => onError(error, dispatch))
            .then(() => dispatch(loaderOff()));
    };
};
