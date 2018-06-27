import React, { Component } from 'react';

class MHR extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();
  }

  render() {
    let maxHeartRate = 180 - this.state.value;
    return (
      <div className="MHR">
        <h3>Max Heart Rate Calculator</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onInput={this.handleInput} placeholder="Age" className="attr"></input><br />
          <input type="submit" value="Submit" className="attr"></input>
        </form>

        <p>Your maximum heart rate is: {maxHeartRate}</p>
      </div>
    );
  }
}

export default MHR;
