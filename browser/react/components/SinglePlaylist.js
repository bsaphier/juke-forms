import React, { Component } from 'react';

import Songs from './Songs';
import AddSongContainer from '../containers/AddSongContainer';

export default class SinglePlaylist extends Component {
  componentDidMount () {
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    selectPlaylist(playlistId);
  }

  componentWillReceiveProps (nextProps) {
    const nextPlaylistId = nextProps.routeParams.playlistId;
    const currentPlaylistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    if (nextPlaylistId !== currentPlaylistId) selectPlaylist(nextPlaylistId);
  }

  render () {
    const playlist = this.props.selectedPlaylist;
    return (
      <div>
        <AddSongContainer {...this.props} />
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );
  }
}

SinglePlaylist.propTypes = {
  playlist: React.PropTypes.array,
  selectPlaylist: React.PropTypes.func,
  selectedPlaylist: React.PropTypes.object,
  routeParams: React.PropTypes.object
};
