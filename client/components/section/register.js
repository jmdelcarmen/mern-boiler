'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Register extends Component {

    onSignup(event) {
        event.preventDefault();

        const { email: { value: email }, password: { value: password } }= this.refs;
        const User = { email, password };
        //create user
        Accounts.createUser(User, (err) => {
            if (err) {
                Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
            }
            else {
                this.props.authenticate();
                Bert.alert("Welcome", 'success', 'fixed-top', 'fa-smile-o');
            }
        });
    }

    render() {
        return (
            <div className="register">
                <form onSubmit={this.onSignup.bind(this)} className="form-group col-xs-4 col-xs-offset-4">
                    <div className="form-group">
                        <label>Email</label>
                        <input ref="email" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input ref="password"type="password" className="form-control" />
                    </div>
                    <button className="btn btn-default btn-block">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default connect(null, actions)(Register);