import React, { Component } from 'react';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ inputValue: event.target.value });
  }

  render () {
    const inputVal = this.state.inputValue;
    const filteredArtists = this.props.artists.filter( artist =>
      artist.name.match(inputVal)
    );

    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={ filteredArtists } />
      </div>
    );
  }
}

FilterableArtistsContainer.propTypes = {
  artists: React.PropTypes.array
};
