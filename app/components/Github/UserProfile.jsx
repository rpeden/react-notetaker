const React = require('react');

const UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div>
        <h3>User Profile</h3> <br />
        Username: {this.props.username} <br />
        Bio: {this.props.bio}
      </div>
    );
  }
});

module.exports = UserProfile;
