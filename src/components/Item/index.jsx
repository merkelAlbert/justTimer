import React from 'react';

import './style.css';

const Item = ({ value, caption }) => (
  <li className="item">
    <div className="value">{value}</div>
    {caption}
  </li>
);

export default Item;
