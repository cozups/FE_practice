import Hello from './Components/Hello';
import Wrapper from './Components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Hello color="red" name="react" />
        <Hello color="pink" />
      </Wrapper>
    </div>
  );
}

export default App;
