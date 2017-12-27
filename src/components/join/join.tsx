import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadJoinPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadJoinPage: () => console.log('loadJoinPage...')
    };
};

class PageJoinInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadJoinPage();
    }

    render() {
        return (
            <span>
                Je Suis la page rejoignez-nous
            </span>);
    }
}

export const PageJoin = connect(mapDispatchToProps)(PageJoinInternal);