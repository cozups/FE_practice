import React from 'react';

function Wrapper({ children }) {
  const style = {
    background: 'black',
    color: 'aqua',
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;
