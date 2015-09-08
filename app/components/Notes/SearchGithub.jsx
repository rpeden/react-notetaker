import React, { PropTypes } from 'react'
import Router from 'react-router'

class SearchGithub extends React.Component {

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit: function () {
    const router = this.context.router;
    const username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode().value = '';
    router.transitionTo('profile', { username: username });
  }
}

SearchGithub.contextTypes {
  router: React.PropTypes.func.isRequired
}
export default SearchGithub;

//mixins: [Router.Navigation]
