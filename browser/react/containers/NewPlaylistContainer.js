import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(event.target.value);
    // this.setState({ inputValue: event.target.value });
    // console.log('event', event.target.value);
  }

  render() {
    return (
      <NewPlaylist handleSubmit={this.handleSubmit}/>
    );
  }

}