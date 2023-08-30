import { useState } from 'react';
import AppRouter from './Router';

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedin={isLoggedin} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
