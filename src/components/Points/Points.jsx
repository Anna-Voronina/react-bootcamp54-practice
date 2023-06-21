import { Notification } from 'components/Notification/Notification';
import { PointsOptions } from 'components/PointsOptions/PointsOptions';
import { Statistics } from 'components/Statistics/Statistics';
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
        <PointsOptions
          options={Object.keys(this.state)}
          onLeavePoint={this.onLeavePoint}
        />
        {total > 0 ? (
          <Statistics points={Object.entries(this.state)} total={total} />
        ) : (
          <Notification message="No points" />
        )}
      </div>
    );
  }
}



export default Points;
