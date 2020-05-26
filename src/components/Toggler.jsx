import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../styles/Toggler.scss';

class Toggler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };
    }

    toggleTab(id) {
        if (this.state.activeTab === id) return;

        this.setState({
           activeTab: id
        });
        this.props.onChange(id);
    }

    render() {
        return (
            <Row className='toggler'>
                <Col xs="auto" className="title">{this.props.title}</Col>
                <Col xs="auto" className="buttons">
                    {this.props.tabs.map((value, index) => {
                        return <div
                            key={index}
                            className={`${this.state.activeTab === index ? 'active' : ''}`}
                            onClick={_ => this.toggleTab(index)}>
                            {value}
                        </div>;
                    })}
                </Col>
            </Row>
        );
    }
}

export default Toggler;
