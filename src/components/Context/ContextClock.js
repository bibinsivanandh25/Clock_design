import { createContext, useEffect, useState } from 'react';
import months from '../../months';

export const ContextClock = createContext();

const ContextProvider = ({ children }) => {
  const [hourDigital, setHourDigital] = useState('');
  const [minuteDigital, setMinuteDigital] = useState('');
  const [amPm, setAmPm] = useState('');
  const [dateNow, setDateNow] = useState('');
  const [monthNow, setMonthNow] = useState('');
  const [yearNow, setYearNow] = useState('');

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let HH = date.getHours();
      let MM = date.getMinutes();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let ampm;

      if (HH >= 12) {
        HH = HH - 12;
        ampm = 'PM';
      } else {
        ampm = 'AM';
      }

      if (HH === 0) HH = 12;
      if (HH < 10) HH = `0${HH}`;
      if (MM < 10) MM = `0${MM}`;

      setHourDigital(HH);
      setMinuteDigital(MM);
      setAmPm(ampm);
      setDateNow(day);
      setMonthNow(months[month]);
      setYearNow(year);
    }, 1000);
  }, []);
  return (
    <ContextClock.Provider
      value={{ hourDigital, minuteDigital, amPm, dateNow, monthNow, yearNow }}
    >
      {children}
    </ContextClock.Provider>
  );
};
export default ContextProvider;
