import React from 'react';

const NewPlaylist = (props) => {
  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="alert alert-warning" hidden={props.hidden}>{props.message}</div>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" value={props.inputValue} onChange={props.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={props.buttonState}>Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    );
};

NewPlaylist.propTypes = {
  handleSubmit: React.PropTypes.func,
  handleChange: React.PropTypes.func,
  buttonState: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  message: React.PropTypes.string,
  inputValue: React.PropTypes.string.isRequired
};

export default NewPlaylist;
