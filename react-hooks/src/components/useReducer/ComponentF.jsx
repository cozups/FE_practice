import { useContext } from 'react';
import { CountContext } from '../../App';

function ComponentF() {
  const countCtx = useContext(CountContext);
  return (
    <div>
      ComponentF
      <button onClick={() => countCtx.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countCtx.countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countCtx.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentF;
