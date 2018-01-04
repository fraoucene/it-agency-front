import * as React from 'react';
import * as H from 'history';
import './App.css';
import {connect} from 'react-redux';
import {MyHistory, setHistory} from '../actions/history';
import {State} from '../reducers/index';
import {Header} from './common/header/header';
import {Page} from '../beans/page';
import {PageAcceuil} from './acceuil/acceuil';
import {setPage} from '../actions/page';
import {Notifier} from './notification/notifier';
import {Loader} from './loader';
import {extractPage} from '../reducers/utils/url-utils';
import {PageJoin} from './join/join';
import {PageOffres} from './offres/offres';
import {PageSolutions} from './solutions/solutions';
import {PageContact} from './contact/contact';
import {PageCandidature} from './candidature/candidature';
import {Footer} from './common/footer/footer';
import {PageRecrutement} from './candidature/recrutement';

interface LocalState {
}

interface OwnProps {
    readonly myHistory: MyHistory;
}

interface StateProps {
    readonly history: MyHistory;
    readonly page: Page;
}

interface DispatchProps {
    readonly setHistory: (h: H.History) => void;
    readonly setPage: (page: Page) => void;
}

const mapStateToProps = (state: State): StateProps => {
    return {
        history: state.history,
        page: state.page
    };
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        setHistory: (history: H.History) => dispatch(setHistory(history)),
        setPage: (page: Page) => dispatch(setPage(page)),
    };
};
type Props = StateProps & DispatchProps & OwnProps;

export class AppInternal extends React.Component<Props, LocalState> {
    constructor(props: Props) {
        super(props);
        const page = Page.toPage(extractPage(props.myHistory.location.pathname));
        if (props.myHistory) {
            this.props.setHistory(props.myHistory);
            this.props.setPage(page);
        }
        this.state = {module};
    }

    componentWillReceiveProps(nextProps: Readonly<Props>): void {
        if (nextProps.history) {
            this.props.setHistory(nextProps.history);
            this.props.myHistory.push('/info-tech-agency/' + nextProps.page.id);
        }
    }

    render() {
        return (
            <div className="cover-full">
                <Header/>
                <div style={{height: '100%', width: '100%'}}>
                    {
                        this.props.page.id === Page.ACCEUIL && <PageAcceuil /> ||
                        this.props.page.id === Page.SOLUTIONS && <PageSolutions /> ||
                        this.props.page.id === Page.OFFRES && <PageOffres /> ||
                        this.props.page.id === Page.JOIN && <PageJoin /> ||
                        this.props.page.id === Page.CANDIDATURE && <PageCandidature /> ||
                        this.props.page.id === Page.RECRUTEMENT && <PageRecrutement /> ||
                        this.props.page.id === Page.CONTACT && <PageContact />
                    }
                <Footer />
                </div>
                <Loader/>
                <Notifier/>
            </div>
        );
    }
}
export const App = connect(mapStateToProps, mapDispatchToProps)(AppInternal) as React.ComponentClass<OwnProps>;