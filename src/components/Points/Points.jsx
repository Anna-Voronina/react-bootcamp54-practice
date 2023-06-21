import React, { Component } from 'react';

export class Points extends Component {
  state = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  onLeavePoint = key => {
    this.setState(prevState => ({ [key]: prevState[key] + Number(key) }));
  };

  countTotalPoints = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  render() {
    const total = this.countTotalPoints();
    return (
      <div>
        {Object.keys(this.state).map(item => {
          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                this.onLeavePoint(item);
              }}
            >
              {item}
            </button>
          );
        })}
        <p>Total points: {total}</p>
      </div>
    );
  }
}

export default Points;
