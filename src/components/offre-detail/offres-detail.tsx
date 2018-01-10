import * as React from 'react';
import {connect} from 'react-redux';
import {State} from '../../reducers';
import {Offre} from '../../beans/Offre';
import {setPage} from '../../actions/page';
import {Page} from '../../beans/page';
import toPage = Page.toPage;

interface DispatchProps {
    readonly back: () => void;
}

interface StateProps {
    readonly offre: Offre;
}
const mapStateToProps = (state: State): StateProps => {
    return {
        offre: state.offre,
    };
};

type Props = DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        back: () => dispatch(setPage(toPage(Page.OFFRES))),
    };
};

class PageOffreDetailInternal extends React.Component<Props, void> {

    render() {
        return (
            <div>
                <div className="wrapper wrapper-offres">
                    <div className="container">
                        <h2 className="candidature-desc">
                            Rejoignez un leader du digital qui vous offrira l’opportunité de vous impliquer,
                            inspirera votre créativité et développera votre carrière.
                        </h2>
                    </div>
                </div>
                <div className="wrapper wrapper-offre">
                    <div className="container row">
                            <div className="col-sm-1 pointer">
                                <span className="fa fa-arrow-left" onClick={() => this.props.back()}/>
                            </div>
                            <div className="col-sm-11">
                                <h3 className="mb4">{this.props.offre.title}</h3>
                                <div style={{textAlign: 'start'}}
                                    dangerouslySetInnerHTML={{__html: this.props.offre.detail}} />
                            </div>
                    </div>
                </div>
            </div>);
    }
}

export const PageOffreDetail = connect(mapStateToProps, mapDispatchToProps)(PageOffreDetailInternal);