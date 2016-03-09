const React = require("react");

const firebaseUrl = require('../firebaseUrl.js');

const RP = React.PropTypes;

const LoginPage = React.createClass({
    propTypes: {
        login: RP.func,
    },
    getInitialState: function() {
        return {
            email: '',
            password: '',
        };
    },
    onSubmit: function(e) {
        e.preventDefault();
        this.createUser();
    },
    createUser: function() {
        const ref = new Firebase(firebaseUrl);
        ref.createUser({
                email: this.state.email,
                password: this.state.password,
            }, (error, userData) => {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                this.login();
                console.log("Successfully created user account with uid:",
                    userData.uid);
            }
        });
    },
    login: function() {
        const ref = new Firebase(firebaseUrl);
        ref.authWithPassword({
                email: this.state.email,
                password: this.state.password,
            }, (error, authData) => {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                this.props.login(authData);
                console.log("Authenticated successfully with payload:",
                    authData);
            }
        });
    },
    render: function() {
        return <div>
            <form onSubmit={this.onSubmit}>
                <div>
                    <input
                        value={this.state.email}
                        onChange={(e) => {
                            this.setState({ email: e.target.value });
                        }}
                    />
                </div>
                <div>
                    <input
                        value={this.state.password}
                        type="password"
                        onChange={(e) => {
                            this.setState({ password: e.target.value });
                        }}
                    />
                </div>
                <input type="submit"/>
            </form>
        </div>;
    }
});

module.exports = LoginPage;