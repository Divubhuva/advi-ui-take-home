import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Filter.css";

const Filter = ({ handleFilterByDate, handleFilterByPopularity }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPopularity, setSelectedPopularity] = useState("");

  const handleDateChange = (date) => {
    handleFilterByDate(date);
    setSelectedDate(date);
  };

  const handlePopularityChange = (event) => {
    handleFilterByPopularity(event.target.value);
    setSelectedPopularity(event.target.value);
  };

  return (
    <div className="row filter-container">
      <div className="col-md-12 date-filter">
        <div>Date</div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
          className="calendar form-control"
        />
      </div>

      <div className="col-md-12 popularity-filter">
        <div>Popularity</div>

        <select
          value={selectedPopularity}
          onChange={handlePopularityChange}
          className="popularity-filter-options form-control"
        >
          <option value="">Select</option>
          <option value="MarketWatch">MarketWatch</option>
          <option value="USA Today">USA Today</option>
          <option value="The Washington Post">The Washington Post</option>
          <option value="Google News">Google News</option>
        </select>
      </div>

      <div className="col-md-12 reset-filter">
        <button
          onClick={() => {
            handleDateChange(null);
            handleFilterByPopularity(null);
          }}
          className="button"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
