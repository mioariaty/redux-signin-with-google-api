import React from 'react';
import { connect } from 'react-redux';
import {
    signIn,
    signOut
} from '../actions';

class GoogleAuth extends React.Component {

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            // record user's id
            this.props.signIn(this.auth.currentUser.get().getId());
            console.log(this.auth.currentUser.get().getBasicProfile());
            
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                clientId: '928088709660-l04kd7qge79nn8ostipa9flq6opqctqe.apps.googleusercontent.com',
                scope: 'profile'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
            .catch((err) => {
                console.log(err)    
            });;
        });
    }
    
    renderAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return null;
        } 
        else if (this.props.isSignedIn === true) {
            return (
                <div className="d-flex">
              
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this.onSignOutClick} >Sign Out</button>
                        <h3>{this.auth.currentUser.get().getBasicProfile().ig}</h3>
                    
                        <img src={this.auth.currentUser.get().getBasicProfile().Paa} className="img-fluid rounded-circle" alt=""/>
                </div>
            );
        } 
        else {
            return (
                <div>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this.onSignInClick} >Sign In With Google</button>    
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);