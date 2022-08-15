import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {setAuthUserData} from "../Redux/auth-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        if (!userId) {
            setAuthUserData.userId = this.props.authorizedUserId;
            // if (!setAuthUserData.userId) {
                //     this.props.history.push("/login")
                // }
            //так как у нас фейковый сервак, то, примення данный перебор, мы заглючиваем браузер
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);

// const userConnect = connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
//
// const postConnect = connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})

// export default userConnect(ProfileContainer)
//
// export default postConnect(ProfileContainer)
//
// export default userConnect(postConnect(ProfileContainer))
//
// export default compose(userConnect, postConnect) (ProfileContainer)

// const connect2 = (mapStateToProps, mapDispatchToProps) => (Component) => (props) => (
//     <Component {...props} {...mapDispatchToProps} {...mapStateToProps(store.getState())}/>
// )
// export default connect2(mapStateToProps, {getUserProfile, getStatus, updateStatus}) (ProfileContainer)



