import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing, Profile, Projects, Bio } from './components';

// import './App.css';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Landing />}/>
                <Route exact path="dev-profile/" element={<Profile />}/>
                <Route exact path="projects/" element={<Projects />}/>
                <Route exact path="dev-bio/" element={<Bio />}/>
            </Routes>
        </Router>
    );
}
