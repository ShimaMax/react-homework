import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './style.scss';
import Search from "../../../../components/Search/Search.jsx";

export default function Header({onSearch}) {
    return (
        <div className="main-page-header">
            <Container>
                <Row>
                    <span className="logotype">
                        <span className="bold">netflix</span>roulette
                    </span>
                </Row>
                <div className="delimiter-6" />
                <Row>
                    <Col md={{span: 10, offset: 1}}>
                        <h1>Find your movie</h1>
                        <div className="delimiter-2" />
                        <Search id="test_header_search" onSearch={onSearch.bind(this)} />
                    </Col>
                </Row>
                <div className="delimiter-10" />
            </Container>
        </div>
    );
};
