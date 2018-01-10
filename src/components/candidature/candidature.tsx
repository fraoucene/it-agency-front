import * as React from 'react';
import {connect} from 'react-redux';
import {Partenaires} from './partenaire';
import {Metiers} from './metiers';
import {Engagements} from './engagements';
import {Form} from './form';

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
            <div>
                <div className="wrapper wrapper-candidature">
                    <div className="container">
                        <h2 className="candidature-desc">
                            Rejoignez un leader du digital qui vous offrira l’opportunité de vous impliquer,
                            inspirera votre créativité et développera votre carrière.
                        </h2>
                    </div>
                </div>
                <div>
                    <Form />
                </div>
                <div className="univ__2">
                    <Metiers />
                </div>
                <div>
                    <Engagements />
                </div>
                <div className="univ__2">
                    <Partenaires />
                </div>
            </div>
        );
    }
}

export const PageCandidature = connect(mapDispatchToProps)(PageCandidatureInternal);