import React from 'react';

import { Link } from 'react-router-dom';

export const AllLink = () => {
  return (
    <div
      style={{
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'spaceEvenly',
        width: '30%',
        fontSize: '50px',
        textAlign: 'center',
      }}
    >
      <div>
        <Link to="/page1">Page1へ</Link>
        <Link to="/page2">Page2へ</Link>
        <Link to="/page3">Page3へ</Link>
      </div>
    </div>
  );
};
