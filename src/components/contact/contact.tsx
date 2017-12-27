import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadContactPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadContactPage: () => console.log('loadContactPage...')
    };
};

class PageContactInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadContactPage();
    }

    render() {
        return (
            <span>
                Je Suis la page contact
            </span>);
    }
}

export const PageContact = connect(mapDispatchToProps)(PageContactInternal);