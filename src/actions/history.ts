import * as H from 'history';

export type MyHistory = H.History;

export const setHistory = (history: MyHistory) => {
    return {type: 'SET_HISTORY', history};
};