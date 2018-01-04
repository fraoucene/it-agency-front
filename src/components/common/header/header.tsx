import * as React from 'react';
import {connect} from 'react-redux';
import {Page} from '../../../beans/page';
import {setPage} from '../../../actions/page';
import toPage = Page.toPage;
import {State} from '../../../reducers/index';
import headers = Page.headers;

interface StateProps {
    readonly page: Page;
}

interface LocaleState {
    readonly open: boolean;
    readonly openSocial: boolean;
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

export class HeaderInternal extends React.Component<Props, LocaleState> {

    constructor() {
        super();
        this.state = {
            open: false,
            openSocial: false,
        };
    }
    renderPage = (page: Page, index: number) =>
        <li key={index} className={'header-li' + (this.props.page.id === page.id ? ' active' : '')}
            onClick={() => this.props.setPage(page)}>
            <span>{page.label}</span>
        </li>

    onMouseEnterHandler = () => this.setState({open: true});
    onMouseEnterSocialHandler = () => this.setState({openSocial: true});
    onMouseLeaveHandler = () => this.setState({open: false});
    onMouseLeaveSocialHandler = () => this.setState({openSocial: false});

    render() {
        return (
            <div>
                {this.state.openSocial ? <ul onMouseLeave={this.onMouseLeaveSocialHandler}
                    className="nav navbar-nav social" >
                    <li><span className="fa fa-facebook social-item animation" /></li>
                    <li><span className="fa fa-twitter social-item animation" /></li>
                    <li><span className="fa fa-linkedin social-item animation" /></li>
                    <li className="social-item" style={{ padding: '12px 8px'}}> | </li>
                    <li onClick={() => location.href = 'mailto:infotechagency.contact@gmail.com'}>
                        <span className="fa fa-envelope social-item" />
                        <span className="cUniv pointer">
                           infotechagency.contact@gmail.com</span>
                    </li>
                </ul> : <div className="header-small header-social-small"
                             onMouseEnter={this.onMouseEnterSocialHandler}
                ><span className="fa fa-at"/></div>}
                {this.state.open ? <div className="header" onMouseLeave={this.onMouseLeaveHandler}>
                   <ul className="header-ul">
                        {headers.map( (page, index) => this.renderPage(toPage(page), index))}
                    </ul>
                </div> : <div className="header-small"
                    onMouseEnter={this.onMouseEnterHandler}
                ><span className="fa fa-bars"/></div>}
            </div>
        );
    }
}
export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderInternal);
