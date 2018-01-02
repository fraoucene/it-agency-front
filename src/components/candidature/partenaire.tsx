import * as React from 'react';
import Slider from 'react-slick';
import {partenaires} from '../../theme/img/partenaires';

class PartenairesInternal extends React.Component<{}, void> {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            centerMode: true,
            autoplay: true,
            slidesToScroll: 4,
            arrows: false,
        };
        return (
            <div className="container">
                <h3 className="cUniv">Nous vous ouvrons les portes des plus grandes sociétés</h3>
                <div className="slick">
                    <Slider {...settings}>
                        {partenaires.map((partenaire, index) =>
                        <div key={index}>
                            <img style={{padding: '5px', borderRadius: '15px', width: '50%'}}
                                 src= {require('../../theme/img/partenaires/' + partenaire)} alt="Contact"/>
                        </div>
                        )}
                    </Slider>
                </div>
            </div>
        );
    }
}

export const Partenaires = PartenairesInternal;