import * as React from 'react';
import {Page} from '../../../beans/page';
import {setPage} from '../../../actions/page';
import {connect} from 'react-redux';
import toPage = Page.toPage;

interface DispatchProps {
    readonly setPage: (page: Page) => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        setPage: (page: Page) => dispatch(setPage(page)),
    };
};
const FooterInternal = (props: Props) => {
    return <div className="footer">
        <div>
            <ul>
                <li onClick={() => props.setPage(toPage(Page.SOLUTIONS))}><a>Nos solutions</a></li>
                <li onClick={() => props.setPage(toPage(Page.OFFRES))}><a>Offres</a></li>
                <li onClick={() => props.setPage(toPage(Page.RECRUTEMENT))}><a>Recrutement</a></li>
                <li onClick={() => props.setPage(toPage(Page.ACCEUIL))}><a>Mentions légales</a></li>
                <li onClick={() => props.setPage(toPage(Page.CONTACT))}><a>Nous contacter</a></li>
            </ul>
            <ul>
                <li><div className="footer-social-item">
                    <span className="fa fa-facebook social-item" /></div>
                </li>
                <li><div className="footer-social-item">
                    <span className="fa fa-twitter social-item" /></div>
                </li>
                <li><div className="footer-social-item">
                    <span className="fa fa-linkedin social-item" /></div>
                </li>
                <li onClick={() => location.href = 'mailto:infotechagency.contact@gmail.com'}>
                    <div className="footer-social-item">
                    <span className="fa fa-envelope social-item" /></div>
                </li>
            </ul>
        </div>
        <div className="col-sm-12 copyright">
            © {new Date().getFullYear()} Info Tech Agency - Tous droits réservés.
        </div>
    </div>;
};
export const Footer = connect(undefined, mapDispatchToProps)(FooterInternal);