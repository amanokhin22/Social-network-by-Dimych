import React from 'react';
import './App.css';
import Navlink from "../nav/NavLink";
import News from '../News/News';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../profile/ProfileContainer";
import HeaderContainer from "../header/HeaderContainer";
import Login from "../login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../Redux/app-reducer";
import Preloader from "../common/preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        return (

            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navlink/>

                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer/>}/>

                        <Route path='/profile/:userId?'
                               component={ProfileContainer}/>

                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/settings' render={() => <Settings/>}/>

                        <Route path='/login' render={() => <Login/>}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps,
        {initializeApp}))
(App);
