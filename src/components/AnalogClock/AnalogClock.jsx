import React, { Fragment, useState } from 'react';
import './analogClock.css';

const AnalogClock = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    setHours(`rotateZ(${hh + mm / 12}deg)`);
    setMinutes(`rotateZ(${mm}deg)`);
    setSeconds(`rotateZ(${ss}deg)`);
  };
  setInterval(clock, 1000);

  return (
    <Fragment>
      <div className='clock__circle'>
        <span className='clock__twelve'></span>
        <span className='clock__one'>1</span>
        <span className='clock__two'>2</span>
        <span className='clock__three'></span>
        <span className='clock__four'>4</span>
        <span className='clock__five'>5</span>
        <span className='clock__six'></span>
        <span className='clock__seven'>7</span>
        <span className='clock__eight'>8</span>
        <span className='clock__nine'></span>
        <span className='clock__ten'>10</span>
        <span className='clock__eleven'>11</span>
        <div className='clock__rounder'></div>
        <div className='clock__hours' style={{ transform: hours }}></div>
        <div className='clock__minutes' style={{ transform: minutes }}></div>
        <div className='clock__seconds' style={{ transform: seconds }}>
          <span className='clock__handler'></span>
        </div>
      </div>
    </Fragment>
  );
};

export default AnalogClock;
