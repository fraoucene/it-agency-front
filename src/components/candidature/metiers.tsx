import * as React from 'react';
import {Card} from '../card/Card';

interface Props {
}

export const Metiers = ({}: Props) => {
    return<div className="container">
        <h3>Les métiers sur lesquels nous intervenons</h3>
        <div className="row section">
            <div className="col-sm-12 col-md-4 mb">
                <Card
                    title={'Transformation et innovation'}
                    text={'Permettre aux organisations de gagner des avantages' +
                    ' concurrentiels.'}
                    imgSrc={require('../../theme/img/img_1.jpg')}
                />
            </div>
            <div className="col-sm-12 col-md-4 mb">
                <Card
                    title={'Digital et data'}
                    text={'Nous travaillons avec nos clients pour placer' +
                    ' l’innovation au centre de leur transformation.'}
                    imgSrc={require('../../theme/img/img_2.jpg')}
                />
            </div>
            <div className="col-sm-12 col-md-4 mb">
                <Card
                    title={'Application, testing et infrastructures'}
                    text={'Notre offre de développement et de maintenance d’applications' +
                    ' et de support aux infrastructures.'}
                    imgSrc={require('../../theme/img/img_3.jpg')}
                />
            </div>
            <div className="col-sm-12 col-md-4">
                <Card
                    title={'Services d’externalisation métiers'}
                    text={'Poussez l’innovation, la transformation et la croissance de votre' +
                    ' entreprise.'}
                    imgSrc={require('../../theme/img/img_4.jpg')}
                />
            </div>
            <div className="col-sm-12 col-md-4">
                <Card
                    title={'Cybersécurité et gestion des risques'}
                    text={'De nouvelles façons de sécuriser vos biens matériels et immatériels voient' +
                    ' le jour. Seule un approche préventive sera à en mesure' +
                    ' de vous prémunir contre des menaces toujours plus sophistiquées.'}
                    imgSrc={require('../../theme/img/img_7.jpg')}
                />
            </div>
            <div className="col-sm-12 col-md-4">
                <Card
                    title={'Choisir le cloud'}
                    text={'À l’ère de la transformation numérique, une stratégie qui met le cloud' +
                    ' au coeur des options envisagées offre l’agilité et la flexibilité nécessaires' +
                    ' pour surpasser les concurrents.'}
                    imgSrc={require('../../theme/img/img_9.jpg')}
                />
            </div>
        </div>
    </div>;
};