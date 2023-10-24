import { useContext } from 'react';
import { CountContext } from '../../App';

function ComponentD() {
  const countCtx = useContext(CountContext);
  return (
    <div>
      ComponentD
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

export default ComponentD;
