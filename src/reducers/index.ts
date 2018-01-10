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
import {offre, offres} from './offre';
import {Offre} from '../beans/Offre';

export const reducer = combineReducers<State>({
    user,
    page,
    offres,
    offre,
    notifications,
    loader,
    history,
});

export interface State {
    readonly user: User;
    readonly page: Page;
    readonly offres:  ReadonlyArray<Offre>;
    readonly offre:  Offre;
    readonly notifications: ReadonlyArray<Notification>;
    readonly loader: boolean;
    readonly history: MyHistory;
}