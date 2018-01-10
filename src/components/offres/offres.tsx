import * as React from 'react';
import {connect} from 'react-redux';
import {offresChain} from '../../actions';
import {Offre} from '../../beans/Offre';
import {State} from '../../reducers';
import {setOffre} from '../../actions/offre';
import {setPage} from '../../actions/page';
import {Page} from '../../beans/page';
import toPage = Page.toPage;

interface LocaleState {
    readonly search: string;
}

interface DispatchProps {
    readonly loadOffresPage: () => void;
    readonly setOffre: (offre: Offre) => void;
    readonly getDetail: () => void;
}

interface StateProps {
    readonly offres: ReadonlyArray<Offre>;
}
const mapStateToProps = (state: State): StateProps => {
    return {
        offres: state.offres,
    };
};

type Props = DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        loadOffresPage: () => dispatch(offresChain()),
        setOffre: (offre: Offre) => dispatch(setOffre(offre)),
        getDetail: () => dispatch(setPage(toPage(Page.OFFRES_DETAIL))),
    };
};

class PageOffresInternal extends React.Component<Props, LocaleState> {

    constructor() {
        super();
        this.state = {
            search: '',
        };
    }
    private inputSearch: HTMLInputElement;

    componentWillMount(): void {
        this.props.loadOffresPage();
    }
     cleanSearch = () => {
         this.inputSearch.value = '';
          this.setState(
             Object.assign({}, this.state, {search: ''}));
     }

    getDetail = (offre: Offre) => {
        this.props.setOffre(offre);
        this.props.getDetail();
    }
    renderOffre = (offre: Offre, index: number) =>
        <div key={index} className="col-sm-6 offre offre__hovered"
            onClick={() => this.getDetail(offre)}>
            <div className="offre-title">{offre.title}</div>
                <div className="offre-sub-title">
                    <span className="glyphicon glyphicon-map-marker"/>
                    <span>{offre.location}</span>
            </div>
            <div className="offre-content">
                 <p>
                     {offre.resume}
                </p>
            </div>
        </div>

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
                        <h3 className="mb4">Nos dernières offres</h3>
                        <div className="row mb4">
                            <div className="col-sm-10 col-sm-offset-1">
                                <div id="imaginary_container">
                                    <div className="input-group stylish-input-group input-append">
                                        <input  onChange={() => this.setState(
                                            Object.assign({}, this.state, {search: this.inputSearch.value}))}
                                                ref={(c) => this.inputSearch = c}
                                            type="text" className="no-focus form-control"  placeholder="Search" />
                                        <span className="input-group-addon">
                                            {this.state.search !== '' &&
                                            <button>
                                                <span
                                                    onClick={this.cleanSearch}
                                                    className="no-focus fa fa-times"/>
                                            </button>
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.filtredOffres().map((offre, index) =>
                            <div   key={index} className="col-sm-12">
                                {(index % 2 === 0) &&
                                <div>
                                    {this.renderOffre(offre, index)}
                                    <div className="col-sm-6"/>
                                </div>}

                                {(index % 2 !== 0) &&
                                <div>
                                    <div className="col-sm-6"/>
                                    {this.renderOffre(offre, index)}
                                </div>}
                            </div>
                        )}
                    </div>
                </div>
            </div>);
    }

    private filtredOffres() {
        return this.props.offres.filter(offre =>
            JSON.stringify(offre).toLowerCase().indexOf(this.state.search.toLowerCase()) > -1);
    }
}

export const PageOffres = connect(mapStateToProps, mapDispatchToProps)(PageOffresInternal);