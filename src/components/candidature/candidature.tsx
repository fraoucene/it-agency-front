import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadCandidaturePage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadCandidaturePage: () => console.log('loadCandidaturePage...')
    };
};

class PageCandidatureInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadCandidaturePage();
    }

    render() {
        return (
            <span>
                Je Suis la page candidature
            </span>);
    }
}

export const PageCandidature = connect(mapDispatchToProps)(PageCandidatureInternal);