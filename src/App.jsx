import React from 'react';

import Timer from './components/Timer';

function App() {
  const getNextEndDate = ({
    year = new Date().getFullYear(),
    month = new Date().getMonth(),
    day = new Date().getUTCDate(),
    hours = new Date().getHours(),
    minutes = new Date().getMinutes()
  }) => {
    const currentDate = new Date();
    const nextEndDate = new Date();
    nextEndDate.setFullYear(year);
    nextEndDate.setMonth(month);
    nextEndDate.setUTCDate(day);
    nextEndDate.setHours(hours);
    nextEndDate.setMinutes(minutes);

    if (currentDate > nextEndDate && currentDate.getMonth() > month) {
      nextEndDate.setFullYear(currentDate.getFullYear() + 1);
    }
    if (currentDate > nextEndDate && currentDate.getUTCDate() > day) {
      nextEndDate.setMonth(currentDate.getMonth() + 1);
    }
    if (currentDate > nextEndDate && currentDate.getHours() > hours) {
      nextEndDate.setUTCDate(currentDate.getUTCDate() + 1);
    }
    if (currentDate > nextEndDate && currentDate.getMinutes() > minutes) {
      nextEndDate.setHours(currentDate.getHours() + 1);
    }

    return nextEndDate;
  };

  return (
    <div>
      <Timer
        title="До обеда"
        endDate={getNextEndDate({ hours: 12, minutes: 35 })}
      />
      <Timer title="До переезда" endDate={new Date('2021-05-30T15:00:00')} />
      <Timer
        title="Пахану до учебы"
        endDate={new Date('2019-09-01T08:30:00')}
      />
      <Timer
        title="Илюхе до отпуска"
        endDate={new Date('2020-01-15T12:00:00')}
      />
      <Timer title="Вовану до др" endDate={new Date('2020-02-14T18:45:00')} />
      <Timer title="До релиза ЭДО" endDate={new Date('2019-09-07T10:00:00')} />
      <Timer
        title="До Аванса"
        endDate={getNextEndDate({ day: 20, hours: 9, minutes: 30 })}
      />
      <Timer
        title="До ЗП"
        endDate={getNextEndDate({ day: 5, hours: 9, minutes: 30 })}
      />
      <Timer
        title="Славику до отпуска"
        endDate={new Date('2019-08-23T18:00:00')}
      />
    </div>
  );
}

export default App;
