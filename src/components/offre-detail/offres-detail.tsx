import * as React from 'react';
import {connect} from 'react-redux';
import {State} from '../../reducers';
import {Offre} from '../../beans/Offre';
import {setPage} from '../../actions/page';
import {Page} from '../../beans/page';
import {Socials} from '../social/socials';
import {MyHistory} from '../../actions/history';
import toPage = Page.toPage;

interface DispatchProps {
    readonly back: () => void;
    readonly setPage: (page: Page) => void;
}

interface StateProps {
    readonly offre: Offre;
    readonly history: MyHistory;
}
const mapStateToProps = (state: State): StateProps => {
    return {
        offre: state.offre,
        history: state.history,
    };
};

type Props = DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        back: () => dispatch(setPage(toPage(Page.OFFRES))),
        setPage: (page: Page) => dispatch(setPage(page)),
    };
};

class PageOffreDetailInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.history.push('/info-tech-agency/offres/' + this.props.offre.id);
    }
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
                                <span className="fa fa-arrow-left cUniv fs35" onClick={() => this.props.back()}/>
                            </div>
                            <div className="col-sm-11 offre">
                                <h3 className="cUniv"><strong>{this.props.offre.title}</strong></h3>
                                <div className="offre-sub-title mb4">
                                    <span className="glyphicon glyphicon-map-marker"/>
                                    <span>{this.props.offre.location}</span>
                                </div>
                                <div style={{textAlign: 'start'}}
                                    dangerouslySetInnerHTML={{__html: this.props.offre.detail}} />
                                <div className="mt4 mb4">
                                    <span className="acceuil-from-item"
                                          onClick={() => this.props.setPage(toPage(Page.CANDIDATURE))}>
                                        Postuler
                                    </span>
                                </div>
                                <Socials />
                            </div>
                    </div>
                </div>
            </div>);
    }
}

export const PageOffreDetail = connect(mapStateToProps, mapDispatchToProps)(PageOffreDetailInternal);