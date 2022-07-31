import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Idiot', likesCount: 1546},
                {id: 2, message: 'I am not agree', likesCount: 953},
                {id: 3, message: 'You are both stupid morrons', likesCount: 2784},
            ],

        },

        dialogsPage: {

            dialogs: [
                {id: 1, name: 'Artiom'},
                {id: 2, name: 'Stas'},
                {id: 3, name: 'Max'},
                {id: 4, name: 'Olha'},
                {id: 5, name: 'Shura'},
                {id: 6, name: 'Lera'},
                {id: 7, name: 'Vetal'},
            ],
            messages: [
                {id: 1, message: 'What are you doing?'},
                {id: 2, message: 'I dont want all off this'},
                {id: 3, message: '50/50'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Oh, she`s not sleeping'},
                {id: 6, message: 'Do you want to dance?'},
                {id: 7, message: 'I want beer'},
            ],
            newMessageBody: ''
        }
    },

    sidebar: {

    },


    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { //{ type: 'ADD-POST' }

       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.sigebar = sidebarReducer(this._state.sigebar, action);

            this._callSubscriber(this._state);

    }
}
export default store;

window.state = store;