'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

class Login extends Component {
    login(event) {
        event.preventDefault();
        const { email: { value: email }, password: { value: password } } = this.refs;

        if ( email !== '' && password !== '') {
            Meteor.loginWithPassword(email, password, (err) => {
                if (err) {
                    Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
                }
                else {
                    this.props.authenticate();
                    Bert.alert(`Welcome ${email}`, 'success', 'fixed-top', 'fa-smile-o');
                    browserHistory.push('/');
                } 
            });
        }
        else {
            Bert.alert('Enter email and password.', 'danger', 'fixed-top', 'fa-frown-o');
        }
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.login.bind(this)} className="form-group col-xs-4 col-xs-offset-4">
                    <div className="form-group">
                        <label>Email</label>
                        <input ref="email" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input ref="password" type="password" className="form-control" />
                    </div>
                    <button className="btn btn-default btn-block">Login</button>
                </form>
            </div>
        );
    }
}

export default connect(null, actions)(Login);