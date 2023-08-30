import { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService, authStateObserver } from 'firebaseInstance';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authStateObserver((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedin={isLoggedin} /> : 'Initializing...'}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
