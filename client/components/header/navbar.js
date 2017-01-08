'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

//navs
import LoggedIn from './loggedIn-nav';
import LoggedOut from './loggedOut-nav';

class Navbar extends Component {
    
    renderNav() {
        return this.props.authenticated && Meteor.userId() ? <LoggedIn /> : <LoggedOut /> ; 
    }

    render() {
        return (
            <div className="navbar">
                {this.renderNav()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.authenticated
    }
}

export default connect(mapStateToProps)(Navbar);