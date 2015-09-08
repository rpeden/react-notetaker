import React from 'react';
import NotesList from './NotesList.jsx';
import AddNotes from './AddNote.jsx';

class Notes extends React.Component {

  static propTypes = {
   username: React.PropTypes.string.isRequired,
   notes: React.PropTypes.array.isRequired,
   addNote: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNotes addNote={this.props.addNote} />
        <div>
          <NotesList notes={this.props.notes} />
        </div>
      </div>
    );
  }

}

export default Notes;
