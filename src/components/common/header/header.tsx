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

    renderPage = (page: Page, index: number) =>
        <li key={index} className={'header-li' + (this.props.page.id === page.id ? ' active' : '')}
            onClick={() => this.props.setPage(page)}>
            <span>{page.label}</span>
        </li>

    render() {
        return (
            <div>
                <ul className="nav navbar-nav social">
                    <li onClick={() => location.href = 'mailto:infotechanecy.contact@gmail.com'}>
                        <span className="fa fa-envelope social-item" />
                        <span className="cUniv pointer">
                           infotechanecy.contact@gmail.com</span>
                    </li>
                    <li className="social-item" style={{ padding: '12px 15px'}}> | </li>
                    <li><span className="fa fa-facebook social-item" /></li>
                    <li><span className="fa fa-twitter social-item" /></li>
                    <li><span className="fa fa-linkedin social-item" /></li>
                </ul>
                <div className="header">
                    <ul className="header-ul">
                        {headers.map( (page, index) => this.renderPage(toPage(page), index))}
                    </ul>
                </div>
            </div>
        );
    }
}
export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderInternal);
