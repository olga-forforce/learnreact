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
            <>
            <div className="App">
                <h2>Now {this.state.date.toLocaleTimeString()}</h2>
            </div>
                <a><img src="../images/108158425.jpg" width="50"
                        height="50" alt="Пример"></img></a>
            </>
        )
    }
}

export default Clock;