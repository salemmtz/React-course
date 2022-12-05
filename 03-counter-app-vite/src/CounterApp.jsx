import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  console.log('render');
  // if there is a change in the state, the whole component render again

  const [counter, setCounter] = useState(value);

  const handledAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => setCounter(c => c - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handledAdd}> +1 </button>
      <button onClick={handleSubstract}> -1 </button>
      <button aria-label="btn-reset" onClick={handleReset}>
        {' '}
        Reset{' '}
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
