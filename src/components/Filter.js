import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';

class Filter extends Component {
    render() {
        return (
            <Col xs={12} md={12}>
                <h4>
                    Filter Applied: <span className="highlight-purple">{this.props.filter}</span>
                    <Button bsSize="small" className="btn-outline-teal" onClick={this.props.resetCards.bind(this)}>Reset</Button>
                </h4>
                
            </Col>
        );
    }
}

export default Filter;