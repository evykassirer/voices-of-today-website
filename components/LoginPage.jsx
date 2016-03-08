const React = require("react");

const firebaseUrl = require('../firebaseUrl.js');

const LoginPage = React.createClass({
    getInitialState: function() {
        return {
            email: '',
            password: '',
        };
    },
    onSubmit: function(e) {
        e.preventDefault();
        const ref = new Firebase(firebaseUrl);
        ref.createUser({
                email: this.state.email,
                password: this.state.password,
            }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:",
                    userData.uid);
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