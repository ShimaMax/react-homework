import React from 'react';

import '../../styles/MovieDescription.scss';
import {Col, Container, Row} from "react-bootstrap";

class MovieDescription extends React.PureComponent {
    render() {
        return <div className="movie-description">
            <div className="dark-wrapper">
                <Container>
                    <Row className="justify-content-between">
                        <div>
                            <span className="logotype">
                                <span className="bold">netflix</span>roulette
                            </span>
                        </div>
                        <div>
                            <button className="search-button">Search</button>
                        </div>
                    </Row>
                    <div className="delimiter-4"></div>
                    <Row>
                        <Col xs="3" className="poster-container">
                            <img src={this.props.movieInfo.poster_path} />
                        </Col>
                        <Col xs="9">
                            <div className="delimiter-1"></div>
                            <div className="header">
                                <span className="title">{this.props.movieInfo.title}</span>
                                <span className="rating">{this.props.movieInfo.vote_average}</span>
                            </div>
                            <div className="label">{this.props.movieInfo.tagline}</div>
                            <div className="delimiter-2"></div>
                            <div className="film-meta">
                                <div className="meta-item">{this.props.movieInfo.release_date.split('-')[0]}<span className="small"> year</span></div>
                                <div className="meta-item">{this.props.movieInfo.runtime}<span className="small"> min</span></div>
                            </div>
                            <div className="delimiter-2"></div>
                            <div className="description">{this.props.movieInfo.overview}</div>
                        </Col>
                    </Row>
                    <div className="delimiter-4"></div>
                </Container>
            </div>
        </div>;
    }
}

export default MovieDescription;
