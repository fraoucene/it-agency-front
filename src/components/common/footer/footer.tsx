import * as React from 'react';

interface Props {
}

export const Footer = ({}: Props) => {
    return <div className="footer">
        <div className="container row" style={{textAlign: 'start'}}>
            <div className="col-md-4 cUniv">
                <img  style={{marginTop: '-70px'}} src={require('../info-tech-agency.png')}
                          alt=" logo de Info tech agency"/>
            </div>
            <nav className="col-md-8">
                <div className="row">
                    <ul className="col-6 col-md-3">
                        <li><a>Nos solutions</a></li>
                        <li><a>Offres</a></li>
                        <li><a>Join</a></li>
                    </ul>
                    <ul className="col-6 col-md-6">
                        <li><p className="bl cUniv">Nous rejoindre</p></li>
                        <li>
                            <p><span>Vous souhaitez rejoindre les équipes internes d'Info Tech Agency </span>
                                <span>Envoyez votre CV à </span>
                                <span className="pointer bl cUniv"
                                      onClick={() => location.href = 'mailto:infotechagency.contact@gmail.com'}>
                                    infotechagency.contact@gmail.com
                                </span>
                                 <span> avec la mention "Candidature interne" en objet.</span>
                            </p>
                        </li>
                    </ul>
                    <ul className="col-6 col-md-3">
                        <li><p className="bl cUniv">Adresse</p></li>
                        <li>
                            <p>
                                <span>49, avenue de paris <br /></span>
                                <span>94800 Villejuif</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <ul className="nav navbar-nav right">
                    <li onClick={() => location.href = 'mailto:infotechagency.contact@gmail.com'}>
                        <span className="fa fa-envelope social-item" />
                        <span className="cUniv pointer">
                           infotechagency.contact@gmail.com</span>
                    </li>
                    <li className="social-item" style={{ padding: '12px 15px'}}> | </li>
                    <li><span className="fa fa-facebook social-item" /></li>
                    <li><span className="fa fa-twitter social-item" /></li>
                    <li><span className="fa fa-linkedin social-item" /></li>
                </ul>
            </div>
        </div>
    </div>;
};