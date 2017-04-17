import React, { Component } from 'react';

class Tags extends Component {
    render() {
        return (
                <li><a  className="tag">{this.props.title}</a></li>
        );
    }
}

export default Tags;
