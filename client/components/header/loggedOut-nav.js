'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class LoggedOut extends Component {
    render() {
        return (
            <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        );
    }
}

export default LoggedOut;
