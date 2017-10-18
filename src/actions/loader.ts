import {ThunkActionCreator} from '../index';
export interface LoaderAction { readonly type: string;
}

export const loaderOn: ThunkActionCreator<Promise<LoaderAction>> = () => {
    return dispatch => {
        return Promise.resolve(dispatch({type: 'LOADER_ON'}));
    };
};

export const loaderOff: ThunkActionCreator<Promise<void>> = () => {
    return dispatch => {
        dispatch({type: 'LOADER_OFF'});
        return Promise.resolve();
    };
};
