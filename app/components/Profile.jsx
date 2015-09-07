const React = require('react');
const Router = require('react-router');
const UserProfile = require('./Github/UserProfile.jsx');
const Notes = require('./Notes/Notes.jsx');
const Repos = require('./Github/Repos.jsx');
const ReactFireMixin = require('reactfire');
const Firebase = require('firebase');

const Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],

    getInitialState: function() {
      return {
        notes: [ ],
        bio: { name: ''},
        repos: [ ]
      };
    },

    componentDidMount: function() {
      this.ref = new Firebase('https://scorching-inferno-9258.firebaseio.com/');
      var childRef = this.ref.child(this.getParams().username)
      this.bindAsArray(childRef, 'notes');
    },

    componentWillUnmount: function() {
        this.unbind('notes');
    },

    handleAddNote: function(newNote) {
      this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
    },

    render: function(){
      let username = this.getParams().username;
      return (
          <div className="row">
            <div className="col-md-4">
              <UserProfile username={username} bio={this.state.bio}/>
            </div>
            <div className="col-md-4">
              <Repos username={username} repos={this.state.repos}/>
            </div>
            <div className="col-md-4">
              <Notes
                username={username}
                notes={this.state.notes}
                addNote={this.handleAddNote}/>
            </div>
          </div>
      )
    }
});

module.exports = Profile;
