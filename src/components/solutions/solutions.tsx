import * as React from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import {Card__} from '../card/Card';
import {Technologies} from '../technologies/technologies';

interface DispatchProps {
    readonly loadSolutionsPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadSolutionsPage: () => ''
    };
};

class PageSolutionsInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadSolutionsPage();
    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
        };
        return (
            <div>
                <div className="slick-solution">
                    <Slider {...settings}>
                        <div><img src= {require('../../theme/img/solutions/solu_1.jpg')} alt="Solution 1"/></div>
                        <div><img src= {require('../../theme/img/solutions/solu_2.jpg')} alt="Solution 2"/></div>
                        <div><img src= {require('../../theme/img/solutions/solu_3.jpg')} alt="Solution 3"/></div>
                        <div><img src= {require('../../theme/img/solutions/solu_4.jpg')} alt="Solution 4"/></div>
                    </Slider>
                </div>
                <div className="container">
                    <h3 className="mb4">Développez votre entreprise via le leader de la technologie</h3>
                    <div className="row">
                        <div className="col-sm-4">
                            <Card__
                                title={'Hébergement web'}
                                text={'Simple, fiable, puissant et securisé, une solution d\'hébergement' +
                                ' web qui satisfait parfaitement tous vos besoins.'}
                                imgSrc={require('../../theme/img/smartweb/b6.png')}
                            />
                        </div>
                        <div className="col-sm-4">
                            <Card__
                                title={'Développement web'}
                                text={'Nous développons des applications robustes, performantes' +
                                ' et évolutives sur mesure pour rejoindre vos cibles.'}
                                imgSrc={require('../../theme/img/smartweb/b4.png')}
                            />
                        </div>
                        <div className="col-sm-4">
                            <Card__
                                title={'Web design'}
                                text={'Nous réalisons une diversité de propositions jusqu\'à ce que vous' +
                                ' soyez pleinement satisfait en terme de visuel.'}
                                imgSrc={require('../../theme/img/smartweb/b3.png')}
                            />
                        </div>
                        <div className="col-sm-4">
                            <Card__
                                title={'Digital marketing'}
                                text={'Nous vous aiderons à trouver la bonne formule pour transformer les ' +
                                'internautes en futurs clients.'}
                                imgSrc={require('../../theme/img/smartweb/b5.png')}
                            />
                        </div>
                        <div className="col-sm-4">
                            <Card__
                                title={'Création graphique'}
                                text={'Elaboration d\'une identité visuelle créative, cohérente, riche et' +
                                ' polyvalente, avec optimisation web et print.'}
                                imgSrc={require('../../theme/img/smartweb/b1.png')}
                            />
                        </div>
                        <div className="col-sm-4">
                            <Card__
                                title={'Conseils stratégiques'}
                                text={'Nous élaborons votre stratégie de communication pour en orienter' +
                                ' l’exécution créative.'}
                                imgSrc={require('../../theme/img/smartweb/b2.png')}
                            />
                        </div>
                    </div>
                </div>
                <div className="univ__2">
                    <div className="container">
                        <h3>NOS SOLUTIONS</h3>
                        <p className="mb4">Quelques technologies web utilisées par notre agence</p>
                        <Technologies />
                    </div>
                </div>
            </div>
        );
    }
}

export const PageSolutions = connect(mapDispatchToProps)(PageSolutionsInternal);