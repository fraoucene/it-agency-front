import * as React from 'react';
import {connect} from 'react-redux';
import {acceuilChain} from '../../actions/index';
import {Page} from '../../beans/page';
import {setPage} from '../../actions/page';
import toPage = Page.toPage;

interface DispatchProps {
    readonly loadAcceuilPage: () => void;
    readonly setPage: (page: Page) => void;
}

interface StateProps {
}

type Props = DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        loadAcceuilPage: () => dispatch(acceuilChain()),
        setPage: (page: Page) => dispatch(setPage(page)),
    };
};

class PageAcceuilInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadAcceuilPage();
    }

    render() {

        return (
            <div className="acceuil-wrapper">
                <div className="acceuil-from">
                    <span className="acceuil-from-item"
                          onClick={() => this.props.setPage(toPage(Page.CANDIDATURE))}>Je suis un candidat!</span>
                    <span className="acceuil-from-item"
                          onClick={() => this.props.setPage(toPage(Page.RECRUTEMENT))}>Je suis une entreprise!</span>
                </div>
            </div>);
    }
}

export const PageAcceuil = connect(undefined, mapDispatchToProps)(PageAcceuilInternal);