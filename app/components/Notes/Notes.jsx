const React = require('react');

const Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },
  render: function() {
    const noteRows = [];

    this.props.notes.forEach(function(note){
      noteRows.push(<div>{note}</div>);
    });

    let notes = (
      <div>
      <h3>Notes for {this.props.username}</h3>
      <div>{noteRows}</div>
      </div>
    );
    return notes;
  }
});

module.exports = Notes;
