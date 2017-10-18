import {combineReducers} from 'redux';
import {loader} from "./loader";
import {history} from "./history";
import {MyHistory} from '../actions/history';

export const reducer = combineReducers<State>({
    loader,
    history,
});

export interface State {
    readonly loader: boolean;
    readonly history: MyHistory;
};