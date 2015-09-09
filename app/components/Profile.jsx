import React from 'react';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';
import Repos from './Github/Repos.jsx';
import Firebase from 'firebase';
import helpers from '../utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://scorching-inferno-9258.firebaseio.com/');

export default class Profile extends React.Component {

  static contextTypes = {
      router: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: { name: ''},
      repos: []
    };
  }

  init() {
    this.ref = base.bindToState(this.router.getCurrentParams().username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    const self = this;
    helpers.getGithubInfo(this.router.getCurrentParams().username)
      .then((dataObj) => {
        self.setState({
          bio: dataObj.bio,
          repos: dataObj.repos
        })
      });
  }

  componentWillMount() {
    this.router = this.context.router;
  }

  componentDidMount() {
    this.init();
  }

  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init();
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleAddNote = (newNote) => {
    base.post(this.router.getCurrentParams().username, {
      data: this.state.notes.concat([newNote])
    })
  }

  render(){
    let username = this.router.getCurrentParams().username;
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
}
