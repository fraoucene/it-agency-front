import * as React from 'react';
import {connect} from 'react-redux';
import {acceuilChain} from '../../actions/index';

interface DispatchProps {
    readonly loadAcceuilPage: () => void;
}

interface StateProps {
}

type Props = DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        loadAcceuilPage: () => dispatch(acceuilChain())
    };
};

class PageAcceuilInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadAcceuilPage();
    }

    render() {

        return (
            <span>
                Je Suis la page Acceuil
            </span>);
    }
}

export const PageAcceuil = connect(undefined, mapDispatchToProps)(PageAcceuilInternal);