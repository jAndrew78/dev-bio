import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Landing, Profile, AboutMe } from './components';

// import './App.css';


export default function App() {
    return (
        <Router>
            <Switch>
                <Landing exact path="/" />
                <Profile exact path="/profile" />
                <AboutMe exact path="/about-me" />
            </Switch>
        </Router>
    );
}
