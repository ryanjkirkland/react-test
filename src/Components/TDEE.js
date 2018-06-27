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
          <input type="text" placeholder="Weight..." class="attr"></input><br />
          <input type="text" placeholder="Height..." class="attr"></input><br />
          <select ref="level" class="attr">
            {activityLevels}
          </select><br />
          <input type="submit" class="attr"></input>
        </form>
      </div>
    );
  }
}

export default TDEE;
