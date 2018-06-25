import React, { Component } from 'react';

class TDEE extends Component {

  constructor() {
    super();
  }

  static defaultProps = {
    levels: ['Sedentary', 'Lightly Active', 'Active', 'Fucking Animal']
  }

  render() {
    let activityLevels = this.props.levels.map(level => {
      return <option key={level} value={level}>{level}</option>
    });
    return (
      <div className="TDEE">
        <h3>TDEE Calculator</h3>
        <form>
          <input type="text" placeholder="Weight..."></input><br />
          <input type="text" placeholder="Height..."></input><br />
          <select ref="level">
            {activityLevels}
          </select><br />
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default TDEE;
