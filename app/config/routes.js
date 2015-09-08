import React from 'react';
import Main from'../components/Main.jsx';
import Home from '../components/Home.jsx';
import Profile from '../components/Profile.jsx';
import Router from'react-router';
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

export default (
    <Route name="app" path="/" handler={Main} >
        <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>
)
