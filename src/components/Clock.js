import React, { Component } from "react";
import img from '../images/108158425.jpg';
import img2 from '../images/296371558.jpg';

class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        }
    }

    componentDidMount() {
        setInterval(() => this.setState({date: new Date() }), 1000)
    }

    render() {
        return (
            <>
            <div className="App">
                <h2>Now {this.state.date.toLocaleTimeString()}</h2>
            </div>
                <img src={img} width="500"
                        height="500" alt="Hotel"/>
                <img src={img2} width="500"
                     height="500" alt="Hotel2"/>
            </>
        )
    }
}

export default Clock;