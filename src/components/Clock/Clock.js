import React, { Component } from "react";

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
            <div className="App">
                <h2>Now {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;