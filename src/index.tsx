import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, ThunkAction} from 'redux';
import {reducer, State} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import {App} from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
import * as ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01', {gaOptions: {userId: 'fraoucene'}});

export type ThunkActionCreator<R> = (...args: any[]) => ThunkAction<R, State, void>;

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(...[thunkMiddleware]),
    )
);

const history = createBrowserHistory();
history.listen((location) => {
    ReactGA.set({ page: location.pathname});
    ReactGA.pageview(location.pathname);
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Route path="/ifact/">
            <App myHistory={history}/>
        </Route>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
