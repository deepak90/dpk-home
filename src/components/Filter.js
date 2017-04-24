import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';

class Filter extends Component {
    render() {
        return (
            <Col xs={12} md={12}>
                <h4>
                    filtering projects done using {this.props.filter}
                    <Button bsStyle="primary" bsSize="small" onClick={this.props.resetCards.bind(this)}>Reset</Button>
                </h4>
                
            </Col>
        );
    }
}

export default Filter;