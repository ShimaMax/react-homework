import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../styles/Search.scss';
import Toggler from './Toggler.jsx';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.filter = {type: 0, string: ''};

        this.state = {
            searchString: ''
        };
    }

    onChangeType(id) {
        this.filter.type = id;
        this.props.onSearch(this.filter);
    }

    onSearch() {
        this.filter.string = this.state.searchString;
        this.props.onSearch(this.filter);
    }

    handleInputChange(event) {
        this.setState({searchString: event.target.value});
    }

    render() {
        return <React.Fragment>
            <Row>
                <Col xs={8}>
                    <input type="text" placeholder="Search" value={this.state.searchString} onChange={this.handleInputChange.bind(this)} />
                </Col>
                <Col xs={4}>
                    <button onClick={this.onSearch.bind(this)}>Search</button>
                </Col>
            </Row>
            <div className="delimiter-2"></div>
            <Row>
                <Col>
                    <Toggler title="Search by" tabs={['Title', 'Genre']} onChange={this.onChangeType.bind(this)} />
                </Col>
            </Row>
        </React.Fragment>;
    }
}

export default Search;
