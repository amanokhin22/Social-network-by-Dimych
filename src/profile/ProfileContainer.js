import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../Redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        if (!userId) {
            this.props.getUserProfile(userId);
        }
    }
    render() {
        const userId = this.props.match.params.userId;
        return (
            <Profile {...this.props} profile={this.props.profile} hideProfile={!userId}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer)