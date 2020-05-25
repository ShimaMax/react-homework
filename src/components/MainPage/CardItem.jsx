import React from 'react';

import '../../styles/CardItem.scss';

class CardItem extends React.PureComponent {
    render() {
        return <div className="card-item">
            <img src={this.props.posterUrl} />
            <div className="delimiter-1"></div>
            <div className="description">
                <div className="left">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.ganre}</p>
                </div>
                <div className="right">
                    <div className="year">{this.props.year}</div>
                </div>
            </div>
        </div>;
    }
}

export default CardItem;
