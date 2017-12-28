import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadRecrutementPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadRecrutementPage: () => console.log('loadRecrutementPage...')
    };
};

class PageRecrutementInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadRecrutementPage();
    }

    render() {
        return (
            <span>
                Je Suis la page recrutement
            </span>);
    }
}

export const PageRecrutement = connect(mapDispatchToProps)(PageRecrutementInternal);