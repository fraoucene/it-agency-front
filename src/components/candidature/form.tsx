import * as React from 'react';

class CandidatureFormInternal extends React.Component<{}, void> {

    render() {
        return (
            <div className="form-group row container">
                <h3>Décrochez le poste de vos rêves !</h3>
                <div className="candidature-form">
                    <input type="text" className="form-control candidature-form-item univ__2" id="inputNom"
                           placeholder="Nom*" />
                    <input type="text" className="form-control candidature-form-item univ__2" id="inputPrenom"
                           placeholder="Prénom*" />
                    <input type="text" className="form-control candidature-form-item univ__2" id="inputPoste"
                           placeholder="Poste*" />
                    <input type="tel" className="form-control candidature-form-item univ__2" id="inputNumber"
                           placeholder="N° de téléphone" />
                    <input type="email" className="form-control candidature-form-item univ__2" id="inputEmail"
                           placeholder="E-mail*" />

                    <button type="button" className="btn btn-primary btn btn-block login-btn univ">
                        VALIDER</button>
                    <div className="mt4">
                        <p>Vous avez des projets digitaux et désirez un devis gratuit? Une question?</p>
                        <h4>N'hésitez pas à nous contacter !</h4>
                        <p>Info Tech Agency <br /> 49 avenue de Paris <br />94800 Villejuif - France<br /></p>
                    </div>
                </div>
            </div>
        );
    }
}

export const CandidatureForm = CandidatureFormInternal;