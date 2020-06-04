import React from 'react';

import '../../styles/MovieDescription.scss';
import {Col, Container, Row} from "react-bootstrap";

export default function MovieDescription({movieInfo}) {
    return (
        <div className="movie-description">
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
                    <div className="delimiter-4" />
                    <Row>
                        <Col xs="3" className="poster-container">
                            <img src={movieInfo.poster_path} />
                        </Col>
                        <Col xs="9">
                            <div className="delimiter-1" />
                            <div className="header">
                                <span className="title">{movieInfo.title}</span>
                                <span className="rating">{movieInfo.vote_average}</span>
                            </div>
                            <div className="label">{movieInfo.tagline}</div>
                            <div className="delimiter-2" />
                            <div className="film-meta">
                                <div className="meta-item">{movieInfo.release_date.split('-')[0]}<span className="small"> year</span></div>
                                <div className="meta-item">{movieInfo.runtime}<span className="small"> min</span></div>
                            </div>
                            <div className="delimiter-2" />
                            <div className="description">{movieInfo.overview}</div>
                        </Col>
                    </Row>
                    <div className="delimiter-4" />
                </Container>
            </div>
        </div>
    );
};
