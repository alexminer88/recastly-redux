import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import thunk from 'redux-thunk';
import store from '../store/store.js'

const VideoListContainer = (state) => {
  
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
// const mapStateToProps = state => {
//   return {
//     video: state.video,
//     videos: state.videos
//   }
// }

// const VideoListContainer = connect(
//   mapStateToProps
// )(VideoList)


export default VideoListContainer;
