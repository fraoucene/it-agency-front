import * as React from 'react';
import {connect} from 'react-redux';

interface DispatchProps {
    readonly loadSolutionsPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadSolutionsPage: () => console.log('loadSolutionsPage...')
    };
};

class PageSolutionsInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadSolutionsPage();
    }

    render() {
        return (
            <span>
                Je Suis la page nos solutions
            </span>);
    }
}

export const PageSolutions = connect(mapDispatchToProps)(PageSolutionsInternal);