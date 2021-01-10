import React, { useState } from 'react';
import './DatePicker.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";
// import SearchResults from './SearchResults'

const DatePicker = ({searchValue, datePicker}) => {
  const history = useHistory();
  console.log(datePicker)
  const [showDatePicker, setShowDatePicker] = useState(datePicker)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleClick = () => {
    history.push(`/search-result/${searchValue}`)
    setShowDatePicker(false)
  }


 
  

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  if (!showDatePicker) return null
  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <p>Number of guests <PeopleIcon /></p>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={handleClick}>Search Alexbnb</Button>
    </div>
  )
}

export default DatePicker

