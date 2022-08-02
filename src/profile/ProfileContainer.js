import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        if (userId) {
            axios.get(`http://localhost:3001/profile/${userId}`)
                .then(response => {
                    this.props.setUserProfile(response.data)
                });
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)