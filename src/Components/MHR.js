import React, { Component } from 'react';

class MHR extends Component {
  render() {
    return (
      <div className="MHR">
        <h3>Max Heart Rate Calculator</h3>
        <form>
          <input type="text" placeholder="Age" class="attr"></input><br />
          <input type="submit" class="attr"></input>
        </form>
      </div>
    );
  }
}

export default MHR;
