import {combineReducers} from 'redux';
import {loader} from './loader';
import {history} from './history';
import {MyHistory} from '../actions/history';
import {page} from './page';
import {Page} from '../beans/page';
import {notifications} from './notification';
import {Notification} from '../beans/notification';
import {user} from './user';
import {User} from '../beans/user';

export const reducer = combineReducers<State>({
    user,
    page,
    notifications,
    loader,
    history,
});

export interface State {
    readonly user: User;
    readonly page: Page;
    readonly notifications: ReadonlyArray<Notification>;
    readonly loader: boolean;
    readonly history: MyHistory;
}