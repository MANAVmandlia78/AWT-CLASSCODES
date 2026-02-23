import React, { useEffect, useState } from 'react';

const TestEffect = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setDouble(2 * count);
  }, [count]);

  return (
    <>
      <center>
        <div>{count}</div>
        <div>{double}</div>
        <button onClick={handleClick}>Increase</button>
      </center>
    </>
  );
};

export default TestEffect;