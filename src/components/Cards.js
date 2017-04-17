import React, { Component } from 'react';
import { Thumbnail, Col } from 'react-bootstrap';
import Tags from './Tags'


class Cards extends Component {
    render() {
        return (
            <Col xs={12} sm={6} md={3}>
                <Thumbnail src="http://placehold.it/300x200" alt="242x200">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <ul className="tags">
                        {this.props.tags.map(tag => <Tags
                            key={tag}
                            title={tag} 
                            filterCards={this.props.filterCards}/>)}
                    </ul>

                </Thumbnail>
            </Col>
        );
    }
}

export default Cards;