import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import thunk from 'redux-thunk';
// import store from '../store/store.js'
// import changeVideo from '../actions/currentVideo.js'

const mapStateToProps = state => {
  return {
    video: state.currentVideo
  }
}

const mapDispatchToProps = state => {
  return {};
}

const VideoPlayerContainer = connect(
  mapStateToProps,  
  mapDispatchToProps
)(VideoPlayer)


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
export default VideoPlayerContainer;
