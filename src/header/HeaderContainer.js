import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../Redux/auth-reducer";
import {authService} from "../api/authService";


class HeaderContainer extends React.Component {

    componentDidMount() {

        authService.auth('Gutor')
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data;
                    this.props.setAuthUserData(userId, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);