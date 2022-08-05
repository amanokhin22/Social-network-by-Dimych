import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../Redux/profile-reducer";
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        if (!userId) {
            this.props.getUserProfile(userId);
        }
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />
        const userId = this.props.match.params.userId;
        return (
            <Profile {...this.props} profile={this.props.profile} hideProfile={!userId}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer)