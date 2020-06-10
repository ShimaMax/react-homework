import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './style.scss';
import Toggler from '../Toggler/Toggler.jsx';

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
        return (
            <React.Fragment>
                <Row>
                    <Col xs={8}>
                        <input id="test_search_input" type="text" placeholder="Search" value={this.state.searchString} onChange={this.handleInputChange.bind(this)} />
                    </Col>
                    <Col xs={4}>
                        <button id="test_search_button" onClick={this.onSearch.bind(this)}>Search</button>
                    </Col>
                </Row>
                <div className="delimiter-2" />
                <Row>
                    <Col>
                        <Toggler id="test_search_toggler" title="Search by" tabs={['Title', 'Genre']} onChange={this.onChangeType.bind(this)} />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Search;
