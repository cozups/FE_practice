import { AppProviders } from './Provider/AppProviders';
import { MuiMode } from './components/mui/MuiMode';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
