import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadOffresPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadOffresPage: () => console.log('loadOffresPage...')
    };
};

class PageOffresInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadOffresPage();
    }

    render() {
        return (
            <span>
                Je Suis la page offres
            </span>);
    }
}

export const PageOffres = connect(mapDispatchToProps)(PageOffresInternal);