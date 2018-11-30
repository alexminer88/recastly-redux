import { connect } from 'react-redux';
import changeVideo from './../actions/currentVideo.js';
// import changeVideoList from './../actions/videoList.js';
import thunk from 'redux-thunk';
// import store from '../store/store.js'
import VideoList from './../components/VideoList.js';


const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => {
      dispatch(changeVideo(video))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videoList
  }
}

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
// const mapStateToProps = state => {
//   return {
//     video: state.video,
//     videos: state.videos
//   }
// }

const VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)


export default VideoListContainer;
