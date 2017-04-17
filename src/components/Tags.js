import React, { Component } from 'react';

class Tags extends Component {
    render() {
        return (
                <li><a onClick={this.props.filterCards.bind(this, this.props.title)} className="tag">{this.props.title}</a></li>
        );
    }
}

export default Tags;
