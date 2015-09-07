import React from 'react';
import NotesList from './NotesList.jsx';
import AddNotes from './AddNote.jsx';

const Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function() {
    const noteRows = [];

    this.props.notes.forEach(function(note){
      noteRows.push(<div>{note}</div>);
    });

    let notes = (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNotes addNote={this.props.addNote} />
        <div>
          <NotesList notes={this.props.notes} />
        </div>
      </div>
    );
    return notes;
  }
});

module.exports = Notes;
