import React, { useState } from 'react';

const DateSelector = () => {
  const [startingDate, setStartingDate] = useState(new Date());
  const [endingDate, setEndingDate] = useState(new Date());
  const [hasEndindDate, setHasEndindDate] = useState(false);

  const handleBlur = () => {
    console.log('onBlur');
  };

  return (
    <div onBlur={handleBlur}>
      <fieldset onChange={(e) => setHasEndindDate(e.target.value === 'range')}>
        <div>
          <input
            type="radio"
            name="dateRange"
            id="oneDay"
            value="oneDay"
            defaultChecked
          />
          <label htmlFor="oneDay">Single Day</label>
        </div>
        <div>
          <input type="radio" name="dateRange" id="range" value="range" />
          <label htmlFor="range">Range of Days</label>
        </div>
      </fieldset>
      <div>
        <div>
          <label htmlFor="startingDate">
            {hasEndindDate ? 'From:' : 'Date:'}
          </label>
          <input
            type="date"
            name="startingDate"
            value={startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
          />
        </div>
        {hasEndindDate && (
          <div>
            <label htmlFor="endingDate">To:</label>
            <input
              type="date"
              name="endingDate"
              value={endingDate}
              onChange={(e) => setEndingDate(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelector;
