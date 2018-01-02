import * as React from 'react';
import {Card} from '../card/Card';

interface Props {
}

export const Engagements = ({}: Props) => {
    return<div className="container">
        <h3>Nos engagements</h3>
        <div className="row section">
            <div className="col-sm-12 col-md-4 mb">
                <Card
                    title={'Rapidité'}
                    text={'Grâce à un flux de demandes clients constamment alimenté, nous somme' +
                    ' capables de vous trouver un poste ou une mission en moins d\'une semaine.'}
                    imgSrc={require('../../theme/img/img_5.jpg')}
                />
            </div>
            <div className="col-sm-12 col-md-4 mb">
                <Card
                    title={'Confiance'}
                    text={'Nos clients sont des acteurs majeurs dans leurs domaines et sont' +
                    'régulièrement récompensés pour leurs innovations, ce qui vous garantie' +
                    ' une pérennité dans votre travail.'}
                    imgSrc={require('../../theme/img/img_8.jpg')}
                />
            </div>
            <div className="col-sm-12 col-md-4 mb">
                <Card
                    title={'Professionnalisme'}
                    text={'Nos équipes disposent d\'une grande expérience dans le recrutement de' +
                    ' profils web et sauront parfaitement vous accompagner.'}
                    imgSrc={require('../../theme/img/img_10.jpg')}
                />
            </div>
        </div>
    </div>;
};