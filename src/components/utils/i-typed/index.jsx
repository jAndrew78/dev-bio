// /

import React, { Component } from 'react'
import { init } from 'ityped'

export class ITyped extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        
        init(myElement, { 
            // placeholder: false,
            showCursor: false,
            // startDelay: 1000,
            typeSpeed: 75,
            loop: false,
            backSpeed: 65,
            backDelay: 1250,
            strings: [' ', 'Creative Professional', 'Well Spoken Nerd', 'Thoughtful & Focused', 'App/Web Developer' ]
        })
    }

    render(){
        return <div id="myElement">App/Web Developer</div>
    }
}
