import React, { Component } from 'react'
import NavBar from "./elements/NavBar"
import Content from  "./elements/Content"


const initialState={
    title:"React JS",
    content:"Content of React",
}

export default class ButtNav extends Component {
    state=initialState

    HOME=()=>{
        this.setState(initialState)
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
                <NavBar 
                    title={this.state.title}
                />
                <button className="HOME" onClick={this.HOME}>HOME</button>
                <Content
                     content={this.state.content}
                />

                <button className="JSX" onClick={this.JSX}>JSX</button>
                <button className="JS" onClick={this.JS}>JS</button>
                <button className="VDOM" onClick={this.VDOM}>VDOM</button>

            </div>

        )
    }
}
