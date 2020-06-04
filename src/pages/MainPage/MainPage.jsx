import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './style.scss';
import Header from './components/Header/Header.jsx';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Toggler from "../../components/Toggler/Toggler.jsx";

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
                <Header onSearch={this.onSearch.bind(this)} />
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
