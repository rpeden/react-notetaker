import React, { PropTypes } from 'react'

export default class AddNote extends React.Component {
  static propTypes = {
    addNote: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    const newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.addNote(newNote);
  }

  render () {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add New Note"></input>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}> Submit </button>
        </span>
      </div>
    )
  }
}
