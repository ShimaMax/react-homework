import React from 'react';

import '../../styles/MainPage.scss';
import MainPageHeader from './MainPageHeader.jsx';
import CardsContainer from '../CardsContainer.jsx';
import Footer from '../Footer.jsx';
import {Col, Container, Row} from "react-bootstrap";
import Toggler from "../Toggler.jsx";

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: {type: 0, string: ''},
            sortType: 0
        };
    }

    onSearch(filter) {
        this.setState({
           filter
        });
    }

    onSortTypeChange(id) {
        this.setState({
            sortType: id
        });
    }

    render() {
        return (
            <div className="main-page">
                <MainPageHeader onSearch={this.onSearch.bind(this)} />
                <Container>
                    <div className="delimiter-2" />
                    <Row className="justify-content-end">
                        <Col xs="auto">
                            <Toggler title="Sort by" tabs={['Release date', 'Rating']} onChange={this.onSortTypeChange.bind(this)} />
                        </Col>
                    </Row>
                    <div className="delimiter-2" />
                </Container>
                <CardsContainer filter={this.state.filter} sortType={this.state.sortType} />
                <Footer />
            </div>
        );
    }
}

export default MainPage;
