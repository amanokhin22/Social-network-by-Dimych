import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'Idiot', likesCount: 1546},
        {id: 2, message: 'I am not agree', likesCount: 953},
        {id: 3, message: 'You are both stupid morons', likesCount: 2784},
    ],
};


it('length of posts should be incremented',  () => {
  //test data
   const action = addPostActionCreator("Aloha");

    // action
    const newState = profileReducer(state, action);
    //expectation
   expect(newState.posts.length).toBe(4);

});

it('message of new post should be correct',  () => {
    //test data
    const action = addPostActionCreator("Aloha");

    // action
    const newState = profileReducer(state, action);
    //expectation
    expect(newState.posts[3].message).toBe('Aloha');
});

it('after deleting of messages should be decrement',  () => {
    //test data
    const action = deletePost(1);
    // action
    const newState = profileReducer(state, action);
    //expectation
    expect(newState.posts.message).toBe(4);
});

it('after deleting length shouldn`t be decrement',  () => {
    //test data
    const action = deletePost(1000);
    // action
    const newState = profileReducer(state, action);
    //expectation
    expect(newState.posts.message).toBe(4);
});