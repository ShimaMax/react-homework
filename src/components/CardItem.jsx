import React from 'react';

import '../styles/CardItem.scss';

export default function CardItem({title, ganre, posterUrl, year}) {
    return (
        <div className="card-item">
            <img src={posterUrl} />
            <div className="delimiter-1" />
            <div className="description">
                <div className="left">
                    <h2>{title}</h2>
                    <p>{ganre}</p>
                </div>
                <div className="right">
                    <div className="year">{year}</div>
                </div>
            </div>
        </div>
    );
};

