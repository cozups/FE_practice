import { useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'firebaseInstance';

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedin={isLoggedin} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
