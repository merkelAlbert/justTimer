import React from 'react';

import './style.css';
import Item from '../Item';

const Timer = ({ endDate, title }) => {
  const [diff, setDiff] = React.useState(null);

  React.useEffect(() => {
    setInterval(() => {
      setDiff(Math.abs(endDate - new Date()));
    }, 100);
  }, [endDate]);

  const getHours = () => {
    if (new Date(diff).getHours() - 3 >= 0) {
      return new Date(diff).getHours() - 3;
    } else if (24 - new Date(diff).getHours() < 24) {
      return 24 - new Date(diff).getHours();
    }
    return 0;
  };

  return (
    <ul className="timer">
      <li className="timer__title-container">
        <h2 className="timer__title">{title}</h2>
      </li>
      {endDate > new Date() && (
        <>
          <Item
            caption="Годы"
            value={Number(new Date(diff).getFullYear()) - 1970}
          />
          <Item caption="Месяцы" value={new Date(diff).getMonth()} />
          <Item caption="Дни" value={new Date(diff).getUTCDate() - 1} />
          <Item caption="Часы" value={getHours()} />
          <Item caption="Минуты" value={new Date(diff).getMinutes()} />
          <Item caption="Секунды" value={new Date(diff).getSeconds()} />
          <Item
            caption="Милисекунды"
            value={
              new Date(diff).getMilliseconds() >= 100
                ? new Date(diff).getMilliseconds()
                : new Date(diff).getMilliseconds() + 100
            }
          />
        </>
      )}
    </ul>
  );
};

export default Timer;
