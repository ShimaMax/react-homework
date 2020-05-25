import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/MainPageHeader.scss';
import Search from "../Search.jsx";

class MainPageHeader extends React.Component {
    render() {
        return <div className="main-page-header">
            <Container>
                <Row>
                    <span className="logotype">
                        <span className="bold">netflix</span>roulette
                    </span>
                </Row>
                <div className="delimiter-6"></div>
                <Row>
                    <Col md={{span: 10, offset: 1}}>
                        <h1>Find your movie</h1>
                        <div className="delimiter-2"></div>
                        <Search onSearch={this.props.onSearch.bind(this)} />
                    </Col>
                </Row>
                <div className="delimiter-10"></div>
            </Container>
        </div>;
    }
}

export default MainPageHeader;
