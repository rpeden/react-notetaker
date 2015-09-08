import React from 'react';
import Router from 'react-router';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';
import Repos from './Github/Repos.jsx';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import helpers from '../utils/helpers';

const Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],

    getInitialState: function() {
      return {
        notes: [ ],
        bio: { name: ''},
        repos: [ ]
      };
    },

    init: function() {
      var childRef = this.ref.child(this.getParams().username)
      this.bindAsArray(childRef, 'notes');

      const self = this;
      helpers.getGithubInfo(this.getParams().username)
        .then((dataObj) => {
          self.setState({
            bio: dataObj.bio,
            repos: dataObj.repos
          })
        });
    },

    componentDidMount: function() {
      this.ref = new Firebase('https://scorching-inferno-9258.firebaseio.com/');
      this.init();
    },

    componentWillReceiveProps: function(nextProps) {
      this.unbind('notes');
      this.init();
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

export default Profile;
