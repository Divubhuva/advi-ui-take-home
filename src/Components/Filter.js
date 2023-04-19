import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Filter.css";

const Filter = ({handleFilterByDate}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPopularity, setSelectedPopularity] = useState("");

  const handleDateChange = (date) => {
    
    handleFilterByDate(date);
    setSelectedDate(date);
  };

  const handlePopularityChange = (event) => {
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
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      
      <div className="col-md-12 reset-filter">
        <button onClick={() => handleDateChange(null)} className="button">Reset</button>
      </div>
    
    </div>
  );
};

export default Filter;
