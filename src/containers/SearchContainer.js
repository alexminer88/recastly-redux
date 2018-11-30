import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';
import thunk from 'redux-thunk';
// import store from '../store/store.js'

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (url) => {
      dispatch(handleVideoSearch(url))
    }
  }

} 
const mapStateToProps = state => {
  return {};
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

// handleSearchInputChange
// var SearchContainer = () => {};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
