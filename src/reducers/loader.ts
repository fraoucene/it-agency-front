import {LoaderAction} from '../actions/loader';

let count = 0;
export const loader = (state: boolean = false, action: LoaderAction) => {
    switch (action.type) {
        case 'LOADER_ON':
            count++;
            return true;
        case 'LOADER_OFF':
            count--;
            return count > 0;
        default:
            return state;
    }
};