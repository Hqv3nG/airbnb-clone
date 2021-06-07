import { DateRangePicker } from 'react-date-range';
import "./Search.css"; 
import "react-date-range/dist/styles.css";
import 'react-date-range/dist/theme/default.css';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import People, { PeopleIcon } from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';


function Search() {

  const [startDate, setStartDate] = useState(new Date());  
  const [endDate, setEndDate] = useState(new Date()); 
  const History = useHistory(); 
  const selectionRange = {
      startDate: startDate,
      endDate: endDate, 
      key: "selection", 
  }
  
  function handleSelect(ranges) {
     setStartDate(ranges.selection.startDate); 
     setEndDate(ranges.selection.endDate);  
  }

  


    return (
        <div className="search">
         <DateRangePicker 
            ranges={
             [selectionRange]} 
            onChange={handleSelect} />
          <h2>
              Number of guests
              <People />
          </h2> 
            <input type="number" min={1} default={2} />
            
            <Button onClick={()=> History.push("/search")}>Search Airbnb</Button>
           
        </div>
    )
}

export default Search

