import { useContext } from 'react';
import { CountContext } from '../../App';

function ComponentA() {
  const countCtx = useContext(CountContext);
  return (
    <div>
      ComponentA
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

export default ComponentA;
