import { createContext, useReducer } from 'react';
import ComponentA from './components/useReducer/ComponentA';
import ComponentB from './components/useReducer/ComponentB';
import ComponentC from './components/useReducer/ComponentC';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

// 2. context 만들어서 provide 하기
export const CountContext = createContext();

function App() {
  // 1. useReducer로 counter 만들기
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
