// /

import React, { Component } from 'react'
import { init } from 'ityped'

export class ITyped extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { 
            showCursor: false,
            startDelay: 1500,
            typeSpeed: 130,
            loop: false,
            backSpeed: 65,
            backDelay: 1250,
            strings: ['Creative', 'Professional', 'Junior' ]
        })
    }

    render(){
        return <div id="myElement"></div>
    }
}
