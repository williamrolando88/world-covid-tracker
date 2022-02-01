import React, { useState } from 'react';

const getToday = () => {
  const t = new Date();
  const day = t.getDate();
  const month = t.getMonth() + 1;
  const year = t.getFullYear();
  return month > 10 ? `${year}-0${month}-${day}` : `${year}-${month}-${day}`;
};

const DateSelector = () => {
  const [startingDate, setStartingDate] = useState(getToday());
  const [endingDate, setEndingDate] = useState(getToday());
  const [hasEndingDate, setHasEndindDate] = useState(false);

  const handleBlur = () => {
    console.log('onBlur');
    console.log(startingDate);
    console.log(endingDate);
    console.log(hasEndingDate);
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
            {hasEndingDate ? 'From:' : 'Date:'}
          </label>
          <input
            type="date"
            name="startingDate"
            value={startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
            required
          />
        </div>
        {hasEndingDate && (
          <div>
            <label htmlFor="endingDate">To:</label>
            <input
              type="date"
              name="endingDate"
              value={endingDate}
              onChange={(e) => setEndingDate(e.target.value)}
              required
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelector;
