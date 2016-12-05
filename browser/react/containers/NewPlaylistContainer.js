import React, { Component } from 'react';

import NewPlaylist from '../components/NewPlaylist';

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      buttonState: true,
      hidden: true,
      alertMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    let value = event.target.value;
    this.setState({ inputValue: value });
    if (value.length === 0 || value.length > 16) {
      this.setState({
        buttonState: true,
        hidden: false,
        alertMessage: (value.length === 0) ? 'Please enter a name' : 'Please pick a name shorter than 16 chars'
      });
    } else {
      this.setState({
        buttonState: false,
        hidden: true
      });
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.addPlaylist(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <NewPlaylist
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        inputValue={this.state.inputValue}
        buttonState={this.state.buttonState}
        hidden={this.state.hidden}
        message={this.state.alertMessage}
      />
    );
  }

}

Playlist.propTypes = {
  addPlaylist: React.PropTypes.func
};
