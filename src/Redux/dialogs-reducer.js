const UPDATE_NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            // state.newMessageBody = action.body;
            return {...state, newMessageBody: action.body};
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            // state.messages.push({id: 7, message: body}); это мутация, ее применять нельзя. внизу правильно на 35
            return {...state, newMessageBody: '', messages: [...state.messages, {id: 7, message: body}]};
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default dialogsReducer;