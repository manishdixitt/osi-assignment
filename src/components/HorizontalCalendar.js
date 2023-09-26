import React, { useState } from "react";
import "./HorizontalCalendar.css"; // Import the CSS file

const HorizontalCalendar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(scrollPosition - 1);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 1);
  };

  const numVisibleDates = 7; // Number of visible dates at a time
  const startDate = new Date();

  startDate.setDate(startDate.getDate() + scrollPosition); // Adjust start date based on scroll position

  const calendarData = [];

  for (let i = 0; i < numVisibleDates; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    calendarData.push(date);
  }

  return (
    <div className="horizontal-calendar">
      <button className="horizontal-calendar-button" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="horizontal-calendar-items" style={{ display: "flex" }}>
        {calendarData.map((date, index) => (
          <div key={index} className="horizontal-calendar-item">
            {/* <div
              className={`${
                date.getDate() === new Date().getDate() ? "current-date" : ""
              }`}
            > */}
              <div className="day" style={{ margin: "5px" }}>
                {date
                  .toLocaleDateString("en-US", { weekday: "short" })
                  .toUpperCase()}
              </div>
              <div
              className={`${
                date.getDate() === new Date().getDate() ? "current-date" : ""
              }`}
              
            >

              <div
                className="date"
                style={{
                  border: "1px solid #d3d3d3",
                  borderRadius: "8px",
                  padding: "10px",
                  fontSize: "20px",
                }}
              >
                {date.getDate()}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="horizontal-calendar-button" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default HorizontalCalendar;
