import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import thunk from 'redux-thunk';
import store from '../store/store.js'
import changeVideo from '../actions/currentVideo.js'

// const getCurrentVideo = (state, filter) => {
//   switch(filter) {
//   case 'CHANGE_VIDEO':
//     return video.filter(v => v.currentVideo);
//   default
//     return video;
//   }

// }

// const mapStateToProps = state => {
//   return {
//     video: getCurrentVideo(state.currentVideo, changeVideo)
//   }
// }

// const VideoPlayerContainer = connect(
//   mapStateToProps
// )(VideoPlayer)


var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
