const React = require('react');

const Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div>
        <h3>Repos</h3>
      </div>
    );
  }
});

module.exports = Repos;
