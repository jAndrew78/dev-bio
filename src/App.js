import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Landing, Profile, Projects, AboutMe, Contact } from './components';

// import './App.css';


export default function App() {
    return (
        <Router>
            <Switch>
                <Landing exact path="/" />
                <Profile exact path="/dev-profile" />
                <Projects exact path="/projects" />
                <AboutMe exact path="/about-me" />
                <Contact exact path="/contact" />
            </Switch>
        </Router>
    );
}
