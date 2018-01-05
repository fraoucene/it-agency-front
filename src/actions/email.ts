import {AxiosProvider} from '../http/axios-provider';
import {Candidature} from '../beans/form/candidature';
import {onError} from './on-error';
import {loaderOff, loaderOn} from './loader';
import {ThunkActionCreator} from '../index';
import {Information} from '../beans/form/information';
import {Recrutment} from '../beans/form/recrutment';

const EMAIL_CANDIDATURE_URL = '/condidature';
const EMAIL_RECRUTEMENT_URL = '/recrutement';
const EMAIL_INFOMATION_URL = '/information';

export const sendEmailCandidature: ThunkActionCreator<void> = (candidature: Candidature) => {
    return (dispatch) => {
        return dispatch(loaderOn())
            .then(() => AxiosProvider.axios()
                .post(EMAIL_CANDIDATURE_URL,  candidature))
            .catch((error: any) => onError(error, dispatch))
            .then(() => dispatch(loaderOff()));
    };
};

export const sendEmailRecrutement: ThunkActionCreator<void> = (recrutement: Recrutment) => {
    return (dispatch) => {
        return dispatch(loaderOn())
            .then(() => AxiosProvider.axios()
                .post(EMAIL_RECRUTEMENT_URL, recrutement))
            .catch((error: any) => onError(error, dispatch))
            .then(() => dispatch(loaderOff()));
    };
};

export const sendEmailInformation: ThunkActionCreator<void> = (information: Information) => {
    return (dispatch) => {
        return dispatch(loaderOn())
            .then(() => AxiosProvider.axios()
                .post(EMAIL_INFOMATION_URL, information))
            .catch((error: any) => onError(error, dispatch))
            .then(() => dispatch(loaderOff()));
    };
};