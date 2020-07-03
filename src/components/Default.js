import React, { Component } from 'react';

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3 jum">404</h1>
                        <h1 className="jum">error</h1>
                        <h2>page not found</h2>
                        <h3>the requested URL 
                            <span className="danger">
                                {this.props.location.pathname} was not found
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}