'use strict';

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';


class LoggedIn extends Component {

    logout(event) {
        event.preventDefault();

        Meteor.logout((err) => {
            if (err) {
                Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
            }
            else {
                this.props.authenticate();
                Bert.alert('You are now logged out.', 'info', 'fixed-top', 'fa-smile-o');
                browserHistory.push('/');
            }
        }); 
    }
    
    render() {
        return (
            <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li onClick={this.logout.bind(this)}><Link>Logout</Link></li>
            </ul>
        );
    }
}


export default connect(null, actions)(LoggedIn);
