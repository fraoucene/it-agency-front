import {User} from '../beans/user';
import {UserAction} from '../actions/user';

export const user = (state: User = User.NULL, action: UserAction) => {
    if (action.type === 'SET_USER') {
        return action.user;
    }
    return state;
};
