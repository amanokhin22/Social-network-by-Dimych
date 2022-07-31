import React from 'react';
import './App.css';
import Header from "../header/Header";
import Navlink from "../nav/NavLink";
import News from '../News/News';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../profile/ProfileContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
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

                </div>
            </div>
        </BrowserRouter>
    );
}
export default App
