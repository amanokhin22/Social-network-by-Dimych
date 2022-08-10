import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        if (!userId) {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
) (ProfileContainer);






