import * as React from 'react';
import * as H from 'history';
import './App.css';
import {connect} from "react-redux";
import {MyHistory, setHistory} from "../actions/history";
import {State} from "../reducers/index";
import {Header} from './common/header/index';

interface LocalState {
}

interface OwnProps {
    readonly myHistory: MyHistory;
}

interface StateProps {
    readonly history: MyHistory;
}

interface DispatchProps {
    readonly setHistory: (h: H.History) => void;
}

const mapStateToProps = (state: State): StateProps => {
    return {
        history: state.history
    };
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        setHistory: (history: H.History) => dispatch(setHistory(history)),
    };
};
type Props = StateProps & DispatchProps & OwnProps;

export class AppInternal extends React.Component<Props, LocalState> {
    constructor(props: Props) {
        super(props);
        if (props.myHistory) {
            this.props.setHistory(props.myHistory);
        }
    }

    componentWillReceiveProps(nextProps: Readonly<Props>): void {
        if (nextProps.history) {
            this.props.setHistory(nextProps.history);
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload test work great.
                </p>
            </div>
        );
    }
}
export const App = connect(mapStateToProps, mapDispatchToProps)(AppInternal) as React.ComponentClass<OwnProps>;