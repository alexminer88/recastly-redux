import Redux from 'redux';
// import Store from '../store/store.js';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  //takes in the previous state and returns the next state
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video || null;
  default:
    return state;
  }
};

export default currentVideoReducer;
