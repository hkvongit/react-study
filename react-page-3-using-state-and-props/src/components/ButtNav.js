import React, { Component } from 'react'
import NavBar from "./elements/NavBar"

export default class ButtNav extends Component {
    state={
        title:"React JS",
        content:"Content of React",
    }
    JSX=()=>{
        this.setState({
            title:"JSX",
            content:"JSX content"
        })
    }
    JS=()=>{
        this.setState({
            title:"JS",
            content:"JS content"
        })
    }
    VDOM=()=>{
        this.setState({
            title:"VDOM",
            content:"VDOM content"
        })
    }
    render() {
        return (
            <div>
                <button className="JSX" onClick={this.JSX}>JSX</button>
                <button className="JS" onClick={this.JS}>JS</button>
                <button className="VDOM" onClick={this.JSX}>VDOM</button>
                <NavBar 
                    title={this.state.title}
                    content={this.state.content}
                />
                
            </div>

        )
    }
}
