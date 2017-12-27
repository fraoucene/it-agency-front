import * as React from 'react';
import {connect} from 'react-redux';
import {Page} from '../../../beans/page';
import {setPage} from '../../../actions/page';
import toPage = Page.toPage;
import {State} from '../../../reducers/index';

interface StateProps {
    readonly page: Page;
}

interface DispatchProps {
    readonly setPage: (page: Page) => void;
}

type Props = DispatchProps & StateProps;

const mapStateToProps = (state: State): StateProps => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        setPage: (page: Page) => dispatch(setPage(page)),
    };
};
export class HeaderInternal extends React.Component<Props, void> {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <a className="navbar-brand bl">
                            <img src={require('./info-tech-agency.png')} className= "app-logo"
                                 onClick={() => this.props.setPage(toPage(Page.ACCEUIL))}/>
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li onClick={() => this.props.setPage(toPage(Page.ACCEUIL))}>
                                <a>{toPage(Page.ACCEUIL).label}</a>
                                {this.props.page.id === Page.ACCEUIL &&
                                <div  className="univ" style={{height: '4px'}} />}
                            </li>
                            <li onClick={() => this.props.setPage(toPage(Page.SOLUTIONS))}>
                                <a>{toPage(Page.SOLUTIONS).label}</a>
                                {this.props.page.id === Page.SOLUTIONS &&
                                <div  className="univ" style={{height: '4px'}} />}
                            </li>
                            <li onClick={() => this.props.setPage(toPage(Page.OFFRES))}>
                                <a>{toPage(Page.OFFRES).label}</a>
                                {this.props.page.id === Page.OFFRES &&
                                <div  className="univ" style={{height: '4px'}} />}
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li onClick={() => this.props.setPage(toPage(Page.CONTACT))}>
                                <a>{toPage(Page.CONTACT).label}</a>
                                {this.props.page.id === Page.CONTACT &&
                                <div  className="univ" style={{height: '4px'}} />}
                            </li>
                            <li><span style={{padding: '18px 10px'}} className="fa fa-facebook cUniv" /></li>
                            <li><span style={{padding: '18px 10px'}} className="fa fa-twitter cUniv" /></li>
                            <li><span style={{padding: '18px 10px'}} className="fa fa-linkedin cUniv" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderInternal);
