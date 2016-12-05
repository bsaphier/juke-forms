import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  handleButton () {
    return (this.state.inputValue.length === 0 || this.state.inputValue.length > 16);
  }

  render() {
    return (
      <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputValue={this.state.inputValue} handleButton={this.handleButton}/>
    );
  }

}