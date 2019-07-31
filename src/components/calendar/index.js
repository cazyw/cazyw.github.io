import React from 'react';
import moment from 'moment';
import './calendar.css';

const weekdayshort = moment.weekdaysShort();
const weekdayshortname = weekdayshort.map(day => {
  return (
    <th key={day} className="week-day">
      {day}
    </th>
  );
});

export default class Calendar extends React.Component {
  state = {
    dateObject: moment()
  };

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };

  dayName = () => {
    return this.state.dateObject.format('ddd');
  };

  monthStartDay = date => {
    return moment(date, 'YYYY-MM-DD').format('e');
  };

  month = () => {
    return this.state.dateObject.format('MMMM');
  };

  year = () => {
    return this.state.dateObject.format('Y');
  };

  printDays = () => {
    let dayBlocks = [];
    for (let i = 1; i <= this.daysInMonth(); i++) {
      dayBlocks.push(<td>{i}</td>);
    }
    return dayBlocks;
  };

  render() {
    return (
      <div>
        <h2>A Calendar</h2>
        <div className="calendar">
          <div className="calendar-navi">
            <span className="calendar-label">{this.month()}</span>
            <span className="calendar-label">{this.year()}</span>
          </div>
          <div className="calendar-date">
            <table className="calendar-day">
              <thead>
                <tr>{weekdayshortname}</tr>
              </thead>
              <tbody>
                <tr>{this.printDays()}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
