import React, { useState } from 'react';
import '../styles/Calender.css';

const Calendar = () => {
  const currentYear = new Date().getFullYear();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
  const [year, setYear] = useState(currentYear);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = (year, monthIndex) => {
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const daysInMonth = getDaysInMonth(year, monthIndex);
    const firstDay = new Date(year, monthIndex, 1).getDay();

    const weeks = [];
    let days = [];
    let dayCount = 1;

    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={`empty-${monthIndex}-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === todayDate && monthIndex === todayMonth && year === todayYear;
      days.push(
        <td key={`day-${monthIndex}-${day}`} className={isToday ? 'today' : ''}>
          {day}
        </td>
      );

      if ((day + firstDay) % 7 === 0 || day === daysInMonth) {
        weeks.push(<tr key={`week-${monthIndex}-${day}`}>{days}</tr>);
        days = [];
      }
    }

    return (
      <div key={monthIndex} className="month">
        <div className="month-header">
          <button onClick={handlePrevYear}>«</button>
          <button onClick={handlePrevMonth}>«</button>
          <span>{months[monthIndex]} {year}</span>
          <button onClick={handleNextMonth}>»</button>
          <button onClick={handleNextYear}>«</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>SUN</th>
              <th>MON</th>
              <th>TUE</th>
              <th>WED</th>
              <th>THU</th>
              <th>FRI</th>
              <th>SAT</th>
            </tr>
          </thead>
          <tbody>{weeks}</tbody>
        </table>
      </div>
    );
  };

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonthIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonthIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevYear = () => {
    setYear((prevYear) => prevYear - 1);
  };

  const handleNextYear = () => {
    setYear((prevYear) => prevYear + 1);
  };

  /*  const handlePrevCentury = () => {
      setYear((prevYear) => prevYear - 100);
    };
  
    const handleNextCentury = () => {
      setYear((prevYear) => prevYear + 100);
    };*/

  return (
    <div className="calendar-container">
      {renderCalendar(year, currentMonthIndex)}
    </div>
  );
};

export default Calendar;
