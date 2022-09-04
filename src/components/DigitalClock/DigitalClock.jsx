import React, { Fragment, useContext } from 'react';
import { ContextClock } from '../Context/ContextClock';
import './digitalClock.css';

const DigitalClock = () => {
  const { hourDigital, minuteDigital, amPm, dateNow, monthNow, yearNow } =
    useContext(ContextClock);
  return (
    <Fragment>
      <main className='clock__text'>
        <aside>
          <div className='clock__text-hour'>{`${hourDigital}:`}</div>
          <div className='clock__text-minute'>{`${minuteDigital}`}</div>
          <div className='clock__text-ampm'>{`${amPm}`}</div>
        </aside>
        <div className='clock__date'>
          <div className='clock__date-date'>{`${dateNow}`}</div>
          <div className='clock__date-month'>{`${monthNow} ,`}</div>
          <div className='clock__date-year'>{`${yearNow}`}</div>
        </div>
      </main>
    </Fragment>
  );
};

export default DigitalClock;
