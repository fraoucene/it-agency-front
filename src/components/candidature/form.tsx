import * as React from 'react';
import {State} from '../../reducers';
import {Page} from '../../beans/page';
import {connect} from 'react-redux';
import RECRUTEMENT = Page.RECRUTEMENT;
import CONTACT = Page.CONTACT;

interface LocaleState {
    readonly raisonSocial: string;
    readonly nom: string;
    readonly prenom: string;
    readonly post: string;
    readonly phone: string;
    readonly email: string;
    readonly message: string;
}

interface StateProps {
    readonly page: Page;
}

const mapStateToProps = (state: State): StateProps => {
    return {
        page: state.page
    };
};

type Props = StateProps;
class FormInternal extends React.Component<Props, LocaleState> {

    constructor() {
        super();
        this.state = {
            raisonSocial: '',
            nom: '',
            prenom: '',
            post: '',
            phone: '',
            email: '',
            message: '',
        };
    }

    private inputRaisonSocial: HTMLInputElement;
    private inputNom: HTMLInputElement;
    private inputPrenom: HTMLInputElement;
    private inputPost: HTMLInputElement;
    private inputPhone: HTMLInputElement;
    private inputEmail: HTMLInputElement;
    private inputMessage: HTMLTextAreaElement;

    post = () => {
        console.log('post', this.state);
    }
    isNotNullOrEmpty = (value: string) => !(!value || value === undefined || value === '' || value.length === 0);
    valid = (): boolean => {
        const valid = this.isNotNullOrEmpty(this.state.nom) &&
            this.isNotNullOrEmpty(this.state.prenom) &&
            this.isNotNullOrEmpty(this.state.email);

        if (this.props.page.id === RECRUTEMENT) {
            return valid && this.isNotNullOrEmpty(this.state.raisonSocial);
        }
        if (this.props.page.id === CONTACT) {
            return valid && this.isNotNullOrEmpty(this.state.message);
        }
        return valid;
    }
    render() {
        return (
            <div className="form-group row container">
                <h3>Décrochez le poste de vos rêves !</h3>
                <div className="candidature-form">
                    {this.props.page.id === RECRUTEMENT &&
                    <input
                        onChange={() => this.setState(
                            Object.assign({}, this.state, {raisonSocial: this.inputRaisonSocial.value}))}
                        ref={(c) => this.inputRaisonSocial = c}
                        type="text" className="form-control candidature-form-item univ__2" id="inputRaisonSocial"
                        placeholder="Raison Social*" />
                    }
                    <input
                        onChange={() => this.setState(
                            Object.assign({}, this.state, {nom: this.inputNom.value}))}
                        ref={(c) => this.inputNom = c}
                        type="text" className="form-control candidature-form-item univ__2" id="inputNom"
                        placeholder="Nom*" />
                    <input
                        onChange={() => this.setState(
                            Object.assign({}, this.state, {prenom: this.inputPrenom.value}))}
                        ref={(c) => this.inputPrenom = c}
                        type="text" className="form-control candidature-form-item univ__2" id="inputPrenom"
                        placeholder="Prénom*" />
                    {this.props.page.id !== CONTACT &&
                    <input
                        onChange={() => this.setState(
                            Object.assign({}, this.state, {post: this.inputPost.value}))}
                        ref={(c) => this.inputPost = c}
                        type="text" className="form-control candidature-form-item univ__2" id="inputPoste"
                        placeholder="Poste" />}
                    <input
                        onChange={() => this.setState(
                            Object.assign({}, this.state, {phone: this.inputPhone.value}))}
                        ref={(c) => this.inputPhone = c}
                        type="tel" className="form-control candidature-form-item univ__2" id="inputNumber"
                        placeholder="N° de téléphone" />
                    <input
                        onChange={() => this.setState(
                            Object.assign({}, this.state, {email: this.inputEmail.value}))}
                        ref={(c) => this.inputEmail = c}
                        type="email" className="form-control candidature-form-item univ__2" id="inputEmail"
                        placeholder="E-mail*" />
                    <textarea
                        rows={10}
                        style={{resize: 'none'}}
                        onChange={() => this.setState(
                            Object.assign({}, this.state, {message: this.inputMessage.value}))}
                        ref={(c) => this.inputMessage = c}
                        type="text" className="form-control candidature-form-item univ__2" id="inputEmail"
                        placeholder="Ecrivez-nous..." />

                    <button
                        disabled={!this.valid()}
                        onClick={this.post}
                        type="button" className="btn btn-primary btn btn-block login-btn univ">
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

export const Form = connect(mapStateToProps)(FormInternal);