import React from 'react';
import Main from'../components/Main.jsx';
import Home from '../components/Home.jsx';
import Profile from '../components/Profile.jsx';
import  { Router, Route, DefaultRoute } from'react-router';

export default (
    <Route name="app" path="/" handler={Main} >
        <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>
)
