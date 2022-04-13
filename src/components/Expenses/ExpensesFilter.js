import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    function changeHandler(event){
        const filterValue = event.target.value
        props.onFilter(filterValue)
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value = {props.selectedYear} onChange={changeHandler}>
          <option value="-1">All years</option>
          {props.filterOptions.map(option => {
            return (
              <option value={option} key = {option}>{option}</option>
            )
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;