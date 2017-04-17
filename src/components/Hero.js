import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Hero extends Component {
    render() {
        return (
            <header className="jumbotron hero-spacer">
                <div className="container">
                    <h1 className="hero-title">{this.props.title}</h1>
                    <p>
                       {this.props.description}
                    </p>
                    <p>
                        <Button className="btn-outline-white" bsSize="large">{this.props.heroctatext}</Button>
                    </p>
                </div>
            </header>
        );
    }
}

export default Hero;