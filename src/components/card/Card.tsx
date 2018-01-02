import * as React from 'react';

interface Props {
    readonly imgSrc: string;
    readonly title: string;
    readonly text: string;
}

export const Card = ({imgSrc, title, text}: Props) => {
    return <div className="card">
        <div className="card-media">
            <img className="card-img animation" src={imgSrc} alt={title}/>
        </div>
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <div className="card-text">{text}</div>
        </div>
    </div>;
};

export const Card__ = ({imgSrc, title, text}: Props) => {
    return <div className="card">
        <div className="card-media">
            <img className="card-img__ animation" src={imgSrc} alt={title}/>
        </div>
        <div className="card-content__">
            <h3 className="card-title">{title}</h3>
            <div className="card-text">{text}</div>
        </div>
    </div>;
};