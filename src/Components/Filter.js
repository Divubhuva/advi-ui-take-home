import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Filter.css";

const Filter = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPopularity, setSelectedPopularity] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePopularityChange = (event) => {
    setSelectedPopularity(event.target.value);
  };

  return (
    <div className="filter-container">
      <div className="date-filter">
        <h3>Date Filter</h3>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
          className="calendar"
        />
      </div>
      <div className="popularity-filter">
        <h3>Popularity Filter</h3>
        <select
          value={selectedPopularity}
          onChange={handlePopularityChange}
          className="popularity-filter-options"
        >
          <option value="">Select</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="reset-filter">
        <button onClick={() => setSelectedDate(null)}>Reset</button>
      </div>
    </div>
  );
};

export default Filter;
