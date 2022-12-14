import React, {Suspense} from 'react';
import './App.css';
import Navlink from "../nav/NavLink";
import News from '../News/News';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import UsersContainer from "../Users/UsersContainer";
import HeaderContainer from "../header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../Redux/app-reducer";
import Preloader from "../common/preloader/Preloader";
import Redirect from "react-router-dom/Redirect";
//import DialogsContainer from "../Dialogs/DialogsContainer";
//import ProfileContainer from "../profile/ProfileContainer";
//import Login from "../login/login";
const DialogsContainer = React.lazy(() => import("../Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("../profile/ProfileContainer"));
const Login = React.lazy(() => import("../login/login")); //типа компанента загружена

class App extends React.Component {
    catchAllUnhandledError = () => {
        alert("Some error occurred");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledError)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <BrowserRouter>
                <Suspense fallback={<Preloader/>}>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Navlink/>

                        <div className='app-wrapper-content'>
                            <Switch>
                                <Route exact path='/'
                                       render={() => <Redirect to={"/profile"}/>}/>

                                <Route path='/dialogs' render={() =>
                                    <DialogsContainer/>}/>

                                <Route path='/profile/:userId?'
                                       component={ProfileContainer}/>

                                <Route path='/news' render={() => <News/>}/>
                                <Route path='/music' render={() => <Music/>}/>

                                <Route path='/users' render={() => <UsersContainer/>}/>

                                <Route path='/settings' render={() => <Settings/>}/>

                                <Route path='/login' render={() => <Login/>}/>

                                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>

                            </Switch>
                        </div>
                    </div>
                </Suspense>
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
