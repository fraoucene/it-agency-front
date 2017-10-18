import {MyHistory} from '../actions/history';

export const history = (state = null, action: { type: string, history: MyHistory }) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return action.history;
        default:
            return state;
    }
};