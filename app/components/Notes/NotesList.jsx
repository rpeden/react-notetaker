import React, { PropTypes } from 'react'

class NotesList extends React.Component {

  render () {
    return (
      <ul className="list-group">
        {this.formatNotes()}
      </ul>
    )
  }

  formatNotes() {
    return this.props.notes.map( (note,index) => {
      return <li className="list-group-item" key={index}> {note} </li>
    });
  }
}

export default NotesList;
